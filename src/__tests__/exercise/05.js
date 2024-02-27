// mocking HTTP requests
// http://localhost:3000/login-submission

import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import {setupServer} from 'msw/node'
import Login from '../../components/login-submission'
import {handlers} from 'test/server-handlers'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())

test(`logging in displays the user's username`, async () => {
  render(<Login />)

  const {username, password} = buildLoginForm()

  await userEvent.type(screen.getByLabelText(/username/i), username)
  await userEvent.type(screen.getByLabelText(/password/i), password)

  await userEvent.click(screen.getByRole('button', {name: /submit/i}))

  await waitForElementToBeRemoved(screen.getByLabelText('loading...'))

  const message = screen.getByText(/welcome/i)
  expect(message).toHaveTextContent(`Welcome ${username}`)
})

test(`logging in without username displays error`, async () => {
  render(<Login />)

  const {password} = buildLoginForm()

  await userEvent.type(screen.getByLabelText(/password/i), password)

  await userEvent.click(screen.getByRole('button', {name: /submit/i}))

  await waitForElementToBeRemoved(screen.getByLabelText('loading...'))

  const error = screen.getByRole('alert')
  expect(error).toHaveTextContent('username required')
})

test(`logging in without password displays error`, async () => {
  render(<Login />)

  const {username} = buildLoginForm()

  await userEvent.type(screen.getByLabelText(/username/i), username)

  await userEvent.click(screen.getByRole('button', {name: /submit/i}))

  await waitForElementToBeRemoved(screen.getByLabelText('loading...'))

  const error = screen.getByRole('alert')
  expect(error).toHaveTextContent('password required')
})
