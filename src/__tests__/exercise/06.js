// mocking modules
// http://localhost:3000/login-submission

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import {useNavigate} from 'react-router-dom'
import Login from '../../components/login-submission-with-navigate'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

jest.mock('react-router-dom', () => {
  const actualReactRouterDom = jest.requireActual('react-router-dom')
  return {
    ...actualReactRouterDom,
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
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  await screen.findByLabelText(/loading/i)

  expect(window.fetch).toHaveBeenCalledWith('/api/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'content-type': 'application/json'},
  })

  expect(mockNavigate).toHaveBeenCalledWith('/app')
  expect(mockNavigate).toHaveBeenCalledTimes(1)
  expect(window.localStorage.getItem('token')).toBe(fakeToken)
})
