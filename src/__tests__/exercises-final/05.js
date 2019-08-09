// advanced form testing with React Testing Library: mocking HTTP requests
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Login from '../../components/login-submission'

jest.mock('@reach/router', () => {
  return {navigate: jest.fn()}
})

beforeAll(() => {
  jest.spyOn(window, 'fetch')
})

afterAll(() => {
  window.fetch.mockRestore()
})

beforeEach(() => {
  window.fetch.mockReset()
})

test('submitting the form makes a POST to /login and redirects the user to /app', () => {
  const fakeResponse = Promise.resolve({token: 'fake-token'})
  window.fetch.mockResolvedValueOnce({
    json: () => fakeResponse,
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
})

beforeAll(() => {
  // this is here to silence a warning temporarily
  // we'll fix it in the next exercise
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  console.error.mockRestore()
})
