// advanced form testing with react-testing-library: mocking HTTP requests
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Login from '../../components/login-submission'

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
  // 📜 https://github.com/gnapse/jest-dom#tobeinthedocument
  //
  // 🐨 assert that window.fetch was called appropriately.
  // 💰 There are various ways to do this, here are a few methods that might be
  // helpful for you with you use `expect(window.fetch)`:
  // 📜 https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber
  // 📜 https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
})

// 💯 another way to assert that window.fetch was called properly is to take a
// snapshot of it's `.mock.calls` property.
// 📜 Read up on `.mock.calls`: https://jestjs.io/docs/en/mock-function-api#mockfnmockcalls
// 📜 Read up on `toMatchInlineSnapshot`: https://jestjs.io/docs/en/snapshot-testing#inline-snapshots
// Use an inline snapshot to verify that window.fetch was called properly.

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react%20testing&e=05&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
