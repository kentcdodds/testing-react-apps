// mocking HTTP requests
// 💯 use toMatchInlineSnapshot
// http://localhost:3000/login-submission

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login-submission'

test('submitting the form makes a POST to /login and redirects the user to /app', async () => {
  const fakeToken = 'fake-token'
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({token: fakeToken}),
  })

  render(<Login />)
  const username = 'chucknorris'
  const password = 'i need no password'

  await userEvent.type(screen.getByLabelText(/username/i), username)
  await userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByText(/submit/i))

  await screen.findByLabelText(/loading/i)

  expect(window.fetch.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        "/api/login",
        Object {
          "body": "{\\"username\\":\\"chucknorris\\",\\"password\\":\\"i need no password\\"}",
          "headers": Object {
            "content-type": "application/json",
          },
          "method": "POST",
        },
      ],
    ]
  `)
})
