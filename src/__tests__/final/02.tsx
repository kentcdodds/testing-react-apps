// simple test with React Testing Library
// http://localhost:3000/counter

import {render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)
  const [decrement, increment] = Array.from(
    container.querySelectorAll('button'),
  )
  if (!decrement || !increment) {
    throw new Error('decrement and increment not found')
  }

  if (!(container.firstChild instanceof HTMLElement)) {
    throw new Error('first child is not a div')
  }
  const message = container.firstChild.querySelector('div')
  if (!message) {
    throw new Error(`couldn't find message div`)
  }

  expect(message.textContent).toBe('Current count: 0')
  fireEvent.click(increment)
  expect(message.textContent).toBe('Current count: 1')
  fireEvent.click(decrement)
  expect(message.textContent).toBe('Current count: 0')
})
