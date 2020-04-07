// mocking HTTP requests
// http://localhost:3000/login-submission
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login-submission'

// 🐨 The next lines are here to silence a warning that you'll be fixing
// so go ahead and delete these lines.
// 💣 delete start
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  jest.spyOn(console, 'warn').mockImplementation(() => {})
})

afterAll(() => {
  console.error.mockRestore()
  console.warn.mockRestore()
})
// 💣 delete end

test('submitting the form calls onSubmit with username and password', async () => {
  // here we want to tell jest that the next time window.fetch is called, it
  // should return a promise that resolves to a value we specify:
  // 🐨 using `mockResolvedValueOnce`, have window.fetch return this next time
  // it's called: `{json: () => Promise.resolve({token: 'fake-token'})}`
  // 📜 https://jestjs.io/docs/en/mock-function-api#mockfnmockresolvedvalueoncevalue

  render(<Login />)
  const username = 'chucknorris'
  const password = 'i need no password'

  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByText(/submit/i))

  // as soon as the user hits submit, we render a spinner to the screen. That
  // spinner has an aria-label of "loading..." for accessibility purposes, so
  // 🐨 assert that there is an element labeled "loading" in the document
  // 💰 you'll need to use a `find*` query variant like findByLabelText (so you'll want to use `await`)
  // 📜 https://testing-library.com/docs/dom-testing-library/api-queries#findby

  // 🐨 assert that window.fetch was called appropriately.
  // 💰 There are various ways to do this, here are a few methods that might be
  // helpful for you with you use `expect(window.fetch)`:
  // 📜 https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
  // 📜 https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber
})
