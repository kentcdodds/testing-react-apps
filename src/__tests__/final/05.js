// mocking HTTP requests
// http://localhost:3000/login-submission
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login-submission'

test('submitting the form makes a POST to /login and redirects the user to /app', async () => {
  const fakeResponse = Promise.resolve({token: 'fake-token'})
  window.fetch.mockResolvedValueOnce({
    json: () => fakeResponse,
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
})

// the code below is here to silence a warning temporarily
// we'll fix it in the next exercise
beforeEach(() => {
  jest
    .spyOn(window, 'fetch')
    .mockImplementation(() => Promise.resolve({json: () => Promise.resolve()}))
})

afterEach(() => {
  window.fetch.mockRestore()
})

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  console.error.mockRestore()
})
