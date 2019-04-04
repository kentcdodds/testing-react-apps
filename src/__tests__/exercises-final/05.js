// advanced form testing with react-testing-library: mocking HTTP requests
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Login from '../../components/login-submission'

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
})
