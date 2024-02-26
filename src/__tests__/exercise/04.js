// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

const loginFormBuilder = build({
  fields: {
    username: fake(faker => faker.internet.userName()),
    password: fake(faker => faker.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', async () => {
  const user = userEvent.setup()

  const mockHandleSubmit = jest.fn()
  render(<Login onSubmit={mockHandleSubmit} />)

  const usernameInput = screen.getByLabelText('Username')
  const passwordInput = screen.getByLabelText('Password')
  const submitButton = screen.getByRole('button', {name: 'Submit'})

  const {username, password} = loginFormBuilder()

  await user.type(usernameInput, username)
  await user.type(passwordInput, password)
  await user.click(submitButton)

  expect(mockHandleSubmit).toHaveBeenCalledTimes(1)
  expect(mockHandleSubmit).toHaveBeenCalledWith({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
