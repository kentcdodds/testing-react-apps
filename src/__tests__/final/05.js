// mocking HTTP requests
// http://localhost:3000/login-submission

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login-submission'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

test('submitting the form makes a POST to /login and redirects the user to /app', async () => {
  const fakeToken = 'fake-token'
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({token: fakeToken}),
  })

  render(<Login />)
  const {username, password} = buildLoginForm()

  await userEvent.type(screen.getByLabelText(/username/i), username)
  await userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByText(/submit/i))

  await screen.findByLabelText(/loading/i)

  expect(window.fetch).toHaveBeenCalledWith('/api/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'content-type': 'application/json'},
  })
  expect(window.fetch).toHaveBeenCalledTimes(1)
})
