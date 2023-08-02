// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
// import ReactDOM from 'react-dom'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement('div')

  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(div)
  console.log(document.body.innerHTML)

  // 🐨 use createRoot to render the <Counter /> to the div
  //ReactDOM.render(<Counter />, div) // before v18
  const root = createRoot(div)
  act(() => root.render(<Counter />))
  console.log(document.body.innerHTML)

  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  const [decrement, increment] = div.querySelectorAll('button')

  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  const message = div.firstChild.querySelector('div')
  console.log(message.textContent)

  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(message.textContent).toBe('Current count: 0')

  // 🐨 click the increment button (💰 act(() => increment.click()))
  act(() => increment.click())

  // 🐨 assert the message.textContent
  expect(message.textContent).toBe('Current count: 1')

  // 🐨 click the decrement button (💰 act(() => decrement.click()))
  act(() => decrement.click())
  // 🐨 assert the message.textContent
  expect(message.textContent).toBe('Current count: 0')

  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // div.remove()
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
	// instead of doing div.remove(), we can better add a beforeEach function => see above
})

/* eslint no-unused-vars:0 */
