// http://localhost:3000/easy-button
// NOTE: this component wont work by itself, so we have the example :)

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
} as const

function EasyButton(props: JSX.IntrinsicElements['button']) {
  const [theme] = useTheme()
  return <button style={styles[theme]} {...props} />
}

export default EasyButton
