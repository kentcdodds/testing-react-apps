// form testing with react-testing-library
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  // 💰 you'll need the `getByLabelText` and `getByText` utilities from `render`
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use fireEvent.change to fire a change event on the username and
  // password fields.
  // 💰 fireEvent.change(someInput, {target: {value: 'new value'}})
  //
  // 🐨 fire a click event on the button with the text "Submit"
  //
  // assert that submitData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

// 💯 Jest has built-in "mock" function APIs. Rather than creating the
// "submittedData" variable, try to use a mock function and assert it was called
// correctly:
// `jest.fn()`: 📜 https://jestjs.io/docs/en/mock-function-api
// `toHaveBeenCalledWith`: 📜 https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react%20testing&e=04&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

/* eslint no-unused-vars:0 */
