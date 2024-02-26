// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)
  act(() => createRoot(div).render(<Counter />))

  const click = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })

  const [decrement, increment] = div.querySelectorAll('button')

  const message = div.firstChild.querySelector('div')

  expect(message).toHaveTextContent('0')

  act(() => increment.dispatchEvent(click))
  expect(message).toHaveTextContent('1')

  act(() => decrement.dispatchEvent(click))
  expect(message).toHaveTextContent('0')

  div.remove()
})

/* eslint no-unused-vars:0 */
