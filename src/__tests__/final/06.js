// mocking modules
// http://localhost:3000/login-submission
import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {useNavigate} from 'react-router-dom'
import Login from '../../components/login-submission-with-navigate'

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
  window.fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({token: 'fake-token'}),
  })
  render(<Login />)
  const username = 'chucknorris'
  const password = 'i need no password'

  await userEvent.type(screen.getByLabelText(/username/i), username)
  await userEvent.type(screen.getByLabelText(/password/i), password)
  await userEvent.click(screen.getByText(/submit/i))

  await screen.findByLabelText(/loading/i)

  expect(window.fetch.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        "/api/login",
        Object {
          "body": "{\\"username\\":\\"chucknorris\\",\\"password\\":\\"i need no password\\"}",
          "headers": Object {
            "content-type": "application/json;charset=UTF-8",
          },
          "method": "POST",
        },
      ],
    ]
  `)

  await waitFor(() => expect(mockNavigate).toHaveBeenCalledTimes(1))
  expect(mockNavigate).toHaveBeenCalledWith('/app')
  expect(window.localStorage.getItem('token')).toBe('fake-token')
})
