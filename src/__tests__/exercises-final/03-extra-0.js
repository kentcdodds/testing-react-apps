// simple test with react-testing-library
import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import Counter from '../../components/counter'

afterEach(cleanup)

test('counter increments when the button is clicked', () => {
  const {container} = render(<Counter />)
  const button = container.querySelector('button')

  expect(button.textContent).toBe('0')
  fireEvent.click(button)
  expect(button.textContent).toBe('1')
})
