// advanced form testing with React Testing Library: mocking modules
import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import {navigate} from '@reach/router'
import Login from '../../components/login-submission'

jest.mock('@reach/router', () => {
  return {
    ...jest.requireActual('@reach/router'),
    navigate: jest.fn(),
  }
})

beforeAll(() => {
  jest.spyOn(window, 'fetch')
})

afterAll(() => {
  window.fetch.mockRestore()
})

beforeEach(() => {
  window.fetch.mockReset()
  navigate.mockReset()
  window.localStorage.removeItem('token')
})

test('submitting the form makes a POST to /login and redirects the user to /app', async () => {
  window.fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({token: 'fake-token'}),
  })
  const {getByLabelText, getByText} = render(<Login />)
  const username = 'chucknorris'
  const password = 'i need no password'

  fireEvent.change(getByLabelText(/username/i), {target: {value: username}})
  fireEvent.change(getByLabelText(/password/i), {target: {value: password}})
  fireEvent.click(getByText(/submit/i))

  expect(getByLabelText(/loading/i)).toBeInTheDocument()
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
  await wait(() => expect(navigate).toHaveBeenCalledTimes(1))
  expect(navigate).toHaveBeenCalledWith('/app')
  expect(window.localStorage.getItem('token')).toBe('fake-token')
})
