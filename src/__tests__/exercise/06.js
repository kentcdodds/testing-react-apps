// mocking modules
// http://localhost:3000/login-submission

import React from 'react'
// 🐨 also import "waitFor" from "@testing-library/react"
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// 🐨 import the useNavigate hook from the react-router-dom module
// 💰 because you're going to use jest.mock below, the `useNavigate`, you pull
// in here will actually be whatever you return from your mock factory
// function below.

// 🐨 swap these imports so you get the new navigate feature
import Login from '../../components/login-submission'
// import Login from '../../components/login-submission-with-navigate'

// 🐨 use jest.mock to mock react-router-dom's `useNavigate` hook
// 📜 https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options
// 💰 return {useNavigate: jest.fn()}
// 🦉 Don't try to put `jest.mock` inside any of the functions below. It should
// only appear at the root-level of this file, and it should never appear within
// a callback function.

// 💣 remove this, and you'll see the warning
beforeAll(() => {
  // this is here to silence a warning temporarily
  // we'll fix it in the next exercise
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

// 💣 remove this too
afterAll(() => {
  console.error.mockRestore()
})

beforeEach(() => {
  // 🐨 reset the useNavigate mock using .mockReset()
  // 🐨 we'll also want to remove `token` from localStorage so that's clean.
  // 💰 window.localStorage.removeItem('token')
})

test('submitting the form makes a POST to /login and redirects the user to /app', async () => {
  // 🐨 create a mock jest function (💰 `jest.fn()`) and assign it to "mockNavigate"
  // 🐨 take `useNavigate` (which is a mock function) and mock it's
  //    implementation to return your mockNavigate variable
  // 🦉 This means that when the source code calls useNavigate, it will get
  //    your mockNavigate function and it will call that function. Then you
  //    can assert it was called correctly.
  const fakeResponse = Promise.resolve({token: 'fake-token'})
  window.fetch.mockResolvedValueOnce({
    json: () => fakeResponse,
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

  // 🐨 use React Testing Library's `waitFor` utility (💰 import it at the top of the file)
  // here to wait until `mockNavigate` has been called once.
  // 📜 https://testing-library.com/docs/dom-testing-library/api-async#waitfor
  //
  // 🐨 assert that `mockNavigate` was called with the right arguments
  // 🐨 assert that localStorage's "token" item is "fake-token"
  // 💰 window.localStorage.getItem('token')
})
