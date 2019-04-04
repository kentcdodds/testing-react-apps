// simple test with ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments when the button is clicked', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(<Counter />, div)
  const button = div.querySelector('button')

  expect(button.textContent).toBe('0')
  button.click()
  expect(button.textContent).toBe('1')

  document.body.removeChild(div)
})
