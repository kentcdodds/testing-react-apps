// testing custom hooks
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UseCounterHookExample from '../../examples/counter-hook'

test('exposes the count and increment/decrement functions', () => {
  render(<UseCounterHookExample />)
  const increment = screen.getByText(/increment/i)
  const decrement = screen.getByText(/decrement/i)
  const message = screen.getByText(/current count/i)

  expect(message).toHaveTextContent('Current count: 0')
  userEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
