// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  const user = userEvent.setup()

  let submittedData
  const handleSubmit = data => (submittedData = data)

  render(<Login onSubmit={handleSubmit} />)

  const usernameInput = screen.getByLabelText('Username')
  const passwordInput = screen.getByLabelText('Password')
  const submitButton = screen.getByRole('button', {name: 'Submit'})

  const username = 'john@email.com'
  const password = 'password'

  await user.type(usernameInput, username)
  await user.type(passwordInput, password)
  await user.click(submitButton)

  expect(submittedData).toEqual({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
