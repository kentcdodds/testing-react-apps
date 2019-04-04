// http://localhost:3000/isolated/testing/components/easy-button-example
import React from 'react'
import {useTheme} from './theme'

const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
}

function EasyButton(props) {
  const [theme] = useTheme()
  return <button style={styles[theme]} {...props} />
}

export default EasyButton
