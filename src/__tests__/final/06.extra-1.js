// mocking modules
// 💯 test the unhappy path
// http://localhost:3000/login-submission

import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {useNavigate} from 'react-router-dom'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login-submission-with-navigate'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }
})

beforeEach(() => {
  useNavigate.mockReset()
  window.localStorage.removeItem('token')
})

test('submitting the form makes a POST to /login and redirects the user to /app', async () => {
  const mockNavigate = jest.fn()
  useNavigate.mockImplementation(() => mockNavigate)

  const fakeToken = 'fake-token'
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({token: fakeToken}),
  })

  render(<Login />)
  const {username, password} = buildLoginForm()

  await userEvent.type(screen.getByLabelText(/username/i), username)
  await userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByText(/submit/i))

  await screen.findByLabelText(/loading/i)

  expect(window.fetch).toHaveBeenCalledWith('/api/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'content-type': 'application/json'},
  })

  await waitFor(() => expect(mockNavigate).toHaveBeenCalledTimes(1))
  expect(mockNavigate).toHaveBeenCalledWith('/app')
  expect(window.localStorage.getItem('token')).toBe(fakeToken)
})

test('an error is displayed in the event of a failure', async () => {
  const mockNavigate = jest.fn()
  useNavigate.mockImplementation(() => mockNavigate)

  const errorMessage = 'Oh no!'
  window.fetch.mockResolvedValueOnce({
    ok: false,
    json: () => Promise.resolve({errors: [errorMessage]}),
  })

  render(<Login />)
  const {username, password} = buildLoginForm()

  await userEvent.type(screen.getByLabelText(/username/i), username)
  await userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByText(/submit/i))

  await screen.findByLabelText(/loading/i)

  expect(window.fetch).toHaveBeenCalledWith('/api/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'content-type': 'application/json'},
  })

  expect(await screen.findByRole('alert')).toHaveTextContent(errorMessage)

  expect(mockNavigate).not.toHaveBeenCalled()
  expect(window.localStorage.getItem('token')).toBeFalsy()
})
