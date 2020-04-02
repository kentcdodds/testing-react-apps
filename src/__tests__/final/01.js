// simple test with ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments when the button is clicked', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(<Counter />, div)
  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')
  increment.click()
  expect(message.textContent).toBe('Current count: 1')
  decrement.click()
  expect(message.textContent).toBe('Current count: 0')

  document.body.removeChild(div)
})
