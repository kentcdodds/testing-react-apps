// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', async () => {
  const user = userEvent.setup()
  const {getAllByRole, getByText} = render(<Counter />)

  const [decrement, increment] = getAllByRole('button')
  const message = getByText('Current count: 0')

  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')

  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')

  increment.focus()
  await user.keyboard('{enter}')
  expect(message).toHaveTextContent('Current count: 1')

  decrement.focus()
  await user.keyboard('{enter}')
  expect(message).toHaveTextContent('Current count: 0')

  increment.focus()
  await user.keyboard(' ')
  expect(message).toHaveTextContent('Current count: 1')

  decrement.focus()
  await user.keyboard(' ')
  expect(message).toHaveTextContent('Current count: 0')
})
