import * as React from 'react'
import {useCurrentPosition} from 'react-use-geolocation'
import Spinner from '../components/spinner'

function Location() {
  const [position, error] = useCurrentPosition()

  if (!position && !error) {
    return <Spinner />
  }

  if (error) {
    return (
      <div role="alert" style={{color: 'red'}}>
        {error.message}
      </div>
    )
  }

  return (
    <div>
      <p>Latitude: {position.coords.latitude}</p>
      <p>Longitude: {position.coords.longitude}</p>
    </div>
  )
}

export default Location
