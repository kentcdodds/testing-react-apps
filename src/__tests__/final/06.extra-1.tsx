// mocking Browser APIs and modules
// 💯 test the unhappy path
// http://localhost:3000/location

import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import Location from '../../examples/location'

const mockedGeolocation = {
  getCurrentPosition: jest.fn(),
}

beforeAll(() => {
  Object.defineProperty(window.navigator, 'geolocation', {
    value: mockedGeolocation,
  })
})

function deferred() {
  let resolve: (value?: unknown) => void, reject: (reason?: unknown) => void
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })

  // @ts-expect-error good luck figuring out this one...
  return {promise, resolve, reject}
}

test('displays the users current location', async () => {
  const fakePosition = {
    coords: {
      latitude: 35,
      longitude: 139,
    },
  }
  const {promise, resolve} = deferred()
  mockedGeolocation.getCurrentPosition.mockImplementation(successCallback => {
    promise.then(() => successCallback(fakePosition))
  })

  render(<Location />)

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

  resolve()

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

  expect(screen.getByText(/latitude/i)).toHaveTextContent(
    `Latitude: ${fakePosition.coords.latitude}`,
  )
  expect(screen.getByText(/longitude/i)).toHaveTextContent(
    `Longitude: ${fakePosition.coords.longitude}`,
  )
})

test('displays error message when geolocation is not supported', async () => {
  const fakeError = new Error(
    'Geolocation is not supported or permission denied',
  )
  const {promise, reject} = deferred()

  mockedGeolocation.getCurrentPosition.mockImplementation(
    (successCallback, errorCallback) => {
      promise.catch(() => errorCallback(fakeError))
    },
  )

  render(<Location />)

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

  reject()

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument()

  expect(screen.getByRole('alert')).toHaveTextContent(fakeError.message)
})
