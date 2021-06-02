// mocking Browser APIs and modules
// 💯 test the unhappy path
// http://localhost:3000/location

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import {useCurrentPosition} from 'react-use-geolocation'
import {mocked} from 'ts-jest/utils'
import Location from '../../examples/location'

jest.mock('react-use-geolocation')
const mockedUseCurrentPosition = mocked(useCurrentPosition)

test('displays the users current location', async () => {
  const fakePosition = {
    coords: {
      latitude: 35,
      longitude: 139,
    },
  }
  type CurrentPositionReturn = ReturnType<typeof useCurrentPosition>
  let setReturnValue: React.Dispatch<
    React.SetStateAction<CurrentPositionReturn>
  >
  function useMockCurrentPosition() {
    const state = React.useState<CurrentPositionReturn>([undefined, undefined])
    setReturnValue = state[1]
    return state[0]
  }
  mockedUseCurrentPosition.mockImplementation(useMockCurrentPosition)

  render(<Location />)

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

  act(() => {
    setReturnValue([fakePosition, undefined])
  })

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
  type CurrentPositionReturn = ReturnType<typeof useCurrentPosition>
  let setReturnValue: React.Dispatch<
    React.SetStateAction<CurrentPositionReturn>
  >
  function useMockCurrentPosition() {
    const state = React.useState<CurrentPositionReturn>([undefined, undefined])
    setReturnValue = state[1]
    return state[0]
  }
  mockedUseCurrentPosition.mockImplementation(useMockCurrentPosition)

  render(<Location />)

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

  act(() => {
    setReturnValue([undefined, fakeError])
  })

  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument()

  expect(screen.getByRole('alert')).toHaveTextContent(fakeError.message)
})
