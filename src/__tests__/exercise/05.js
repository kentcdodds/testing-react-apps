// mocking HTTP requests
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Login from '../../components/login-submission'

// 💣 delete below the code below
// It was here to silence warnings temporarily.
// now we're going to fix those problems.
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
// 💣 delete above

// Frontend unit and integration tests should NOT make real HTTP calls (save
// that for E2E). So in this exercise you're going to learn how to mock out
// `fetch` and provide a set response.

// before any of the tests in this file run, we want to make window.fetch a
// mock function
beforeAll(() => {
  // 🐨 use `jest.spyOn` to spy on the window's `fetch` property
  // 📜 https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname
})

// after all the tests are done, we want to restore window.fetch to it's
// original implementation
afterAll(() => {
  // 🐨 use mockRestore() to restore window.fetch to its original implementation
  // 📜 https://jestjs.io/docs/en/mock-function-api#mockfnmockrestore
})

// before each individual test in this file, we want to reset window.fetch
// so it clears all the calls information it's stored from other calls.
beforeEach(() => {
  // 🐨 use mockReset() to reset the call track information for window.fetch
  // 📜 https://jestjs.io/docs/en/mock-function-api#mockfnmockreset
})

test('submitting the form makes a POST to /login and redirects the user to /app', () => {
  // here we want to tell jest that the next time window.fetch is called, it
  // should return a promise that resolves to a value we specify:
  // 🐨 using `mockResolvedValueOnce`, have window.fetch return this next time
  // it's called: `{json: async () => ({token: 'fake-token'})}`
  // 📜 https://jestjs.io/docs/en/mock-function-api#mockfnmockresolvedvalueoncevalue

  const {getByLabelText, getByText} = render(<Login />)
  const username = 'chucknorris'
  const password = 'i need no password'

  fireEvent.change(getByLabelText(/username/i), {target: {value: username}})
  fireEvent.change(getByLabelText(/password/i), {target: {value: password}})
  fireEvent.click(getByText(/submit/i))

  // as soon as the user hits submit, we render a spinner to the screen. That
  // spinner has an aria-label of "loading..." for accessibility purposes, so
  // 🐨 assert that there is an element labeled "loading" in the document
  // 💰 you can use toBeInTheDocument() from jest-dom
  // 📜 https://github.com/testing-library/jest-dom#tobeinthedocument
  //
  // 🐨 assert that window.fetch was called appropriately.
  // 💰 There are various ways to do this, here are a few methods that might be
  // helpful for you with you use `expect(window.fetch)`:
  // 📜 https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber
  // 📜 https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
  //
  // 🦉 By here you'll probably notice a warning, we'll take care of that
  // in the next test.
})

// 💯 another way to assert that window.fetch was called properly is to take a
// snapshot of it's `.mock.calls` property.
// 📜 Read up on `.mock.calls`: https://jestjs.io/docs/en/mock-function-api#mockfnmockcalls
// 📜 Read up on `toMatchInlineSnapshot`: https://jestjs.io/docs/en/snapshot-testing#inline-snapshots
// Use an inline snapshot to verify that window.fetch was called properly.
