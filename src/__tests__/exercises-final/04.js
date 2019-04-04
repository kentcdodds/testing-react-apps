// form testing with react-testing-library
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  let submittedData
  const handleSubmit = data => (submittedData = data)
  const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />)
  const username = 'chucknorris'
  const password = 'i need no password'

  fireEvent.change(getByLabelText(/username/i), {target: {value: username}})
  fireEvent.change(getByLabelText(/password/i), {target: {value: password}})
  fireEvent.click(getByText(/submit/i))

  expect(submittedData).toEqual({
    username,
    password,
  })
})
