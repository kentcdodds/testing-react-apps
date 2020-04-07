// mocking modules
// http://localhost:3000/login-submission
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
// 🐨 import the useNavigate hook from the react-router-dom module
// 💰 because you're going to use jest.mock below, the `navigate`, you pull
// in here will actually be whatever you return from your mock factory
// function below.

// 🐨 swap these imports so you get the new navigate feature
import Login from '../../components/login-submission'
// import Login from '../../components/login-submission-with-navigate'

// we don't actually have anywhere for react-router-dom to navigate in our tests
// so it actually doesn't navigate anywhere which is fine, except we want to
// validate that our code is actually doing a navigation and that it's
// navigating to where we expect.

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
  // 🐨 reset the navigate mock (just like we're doing for window.fetch)
  // 🐨 we'll also want to remove `token` from localStorage so that's clean.
  // 💰 window.localStorage.removeItem('token')
})

// 🐨 we're going to be doing some async/await in here, so make this function async:
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
  // 🐨 use React Testing Library's `wait` utility (💰 import it at the top of the file)
  // here to wait until `navigate` has been called once.
  // 💰 make sure this test function supports `await` by making this test function `async`
  // 💰 await wait(() => expect........)
  //
  // 🐨 assert that navigate was called with the right arguments
  // 🐨 assert that localStorage's "token" item is "fake-token"
})

// 💯 Read up on and try to use jest's __mocks__ directory functionality
// Note: there's no final example of this because if there were it would mess
// up your exercise 😅 Make sure to ask me about this!
// 📜 https://jestjs.io/docs/en/manual-mocks
