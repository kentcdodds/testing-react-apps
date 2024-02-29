// mocking Browser APIs and modules
// http://localhost:3000/location

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import Location from '../../examples/location'

window.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
}

function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return {promise, resolve, reject}
}

test('displays the users current location', async () => {
  const fakeGeolocationPosition = {
    coords: {
      accuracy: 50,
      altitude: 0,
      altitudeAccuracy: null,
      heading: null,
      latitude: 40.746508545837685,
      longitude: -73.94085714411621,
      speed: null,
    },
    timestamp: 1709213291906,
  }

  const {promise, resolve, reject} = deferred()

  window.navigator.geolocation.getCurrentPosition.mockImplementation(
    (success, error, options) => {
      promise.then(() => success(fakeGeolocationPosition)).catch(() => error())
    },
  )

  render(<Location />)

  expect(screen.queryByLabelText('loading...')).toBeInTheDocument()

  await act(async () => resolve())

  expect(screen.queryByLabelText('loading...')).toBeNull()
  expect(screen.getByText(/latitude:/i)).toHaveTextContent(
    `Latitude: 40.746508545837685`,
  )
  expect(screen.getByText(/longitude:/i)).toHaveTextContent(
    `Longitude: -73.94085714411621`,
  )
})

/*
eslint
  no-unused-vars: "off",
*/
