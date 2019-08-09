// simple test with React Testing Library
// 💯 React Testing Library handles cleanup for us automatically!
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments when the button is clicked', () => {
  const {container} = render(<Counter />)
  const button = container.querySelector('button')

  expect(button.textContent).toBe('0')
  fireEvent.click(button)
  expect(button.textContent).toBe('1')
})
