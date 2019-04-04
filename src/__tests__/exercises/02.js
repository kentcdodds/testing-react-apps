// simple test with ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments when the button is clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  //
  // 🐨 append the div to document.body (💰 document.body.appendChild)
  //
  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  // 🐨 get a reference to the button (💰 div.querySelector)
  //
  // 🐨 expect the button's textContent is '0'
  // 🐨 click the button (💰 button.click())
  // 🐨 expect the button's textContent is '1'
  //
  // 🐨 cleanup by removing the div from the page (💰 document.body.removeChild)
})

// 💯 using .click on a DOM node works fine, but what if you wanted to fire an
// event that doesn't have a dedicated method (like mouseover). Rather than
// use `button.click()`, try using `button.dispatchEvent`:
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
// NOTE: Make sure that your event config sets `bubbles: true`

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react%20testing&e=02&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

/* eslint no-unused-vars:0 */
