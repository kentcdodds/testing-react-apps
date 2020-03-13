// simple test with React Testing Library
// 💯 use @testing-library/jest-dom
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments when the button is clicked', () => {
  const {container} = render(<Counter />)
  const [increment, decrement] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')

  expect(message).toHaveTextContent('Current count: 0')
  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
