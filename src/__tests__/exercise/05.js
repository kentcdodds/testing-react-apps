// mocking HTTP requests
// http://localhost:3000/login-submission

import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import {setupServer} from 'msw/node'
import Login from '../../components/login-submission'
import {handlers} from 'test/server-handlers'
import {rest} from 'msw'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
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
  expect(error.textContent).toMatchInlineSnapshot(`"username required"`)
})

test(`logging in without password displays error`, async () => {
  render(<Login />)

  const {username} = buildLoginForm()

  await userEvent.type(screen.getByLabelText(/username/i), username)

  await userEvent.click(screen.getByRole('button', {name: /submit/i}))

  await waitForElementToBeRemoved(screen.getByLabelText('loading...'))

  const error = screen.getByRole('alert')
  expect(error.textContent).toMatchInlineSnapshot(`"password required"`)
})

test(`unknown server error displays the error message`, async () => {
  const errorMessage = 'server is down'
  server.use(
    rest.post(
      'https://auth-provider.example.com/api/login',
      async (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({message: errorMessage}))
      },
    ),
  )

  render(<Login />)

  await userEvent.click(screen.getByRole('button', {name: /submit/i}))

  await waitForElementToBeRemoved(screen.getByLabelText('loading...'))

  const error = screen.getByRole('alert')
  expect(error).toHaveTextContent(errorMessage)
})
