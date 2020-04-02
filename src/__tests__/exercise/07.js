// testing with context and a custom render method
import React from 'react'
import {render} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

test('renders with the light styles for the light theme', () => {
  // 🐨 uncomment all of this code and your test will be busted on the next line:
  // const {getByText} = render(<EasyButton>Easy</EasyButton>)
  // const button = getByText(/easy/i)
  // expect(button).toHaveStyle(`
  //   background-color: white;
  //   color: black;
  // `)
  //
  // The problem is that the EasyButton uses `useTheme` which uses
  // `React.useContext`. Because the component responsible for setting the
  // value of context is not included in what's being rendered in our test,
  // useTheme throws the error when it gets no value for context.
  //
  // 🐨 update the `render` call above to include the <ThemeProvider>
  // 💰 <ThemeProvider><EasyButton>Easy</EasyButton></ThemeProvider>
})

// 💯 add a test for the dark theme

// 💯 create a custom render method that includes the wrapper by default
// as well as a configurable option for what the theme should be.
// 📜 https://testing-library.com/docs/react-testing-library/api#wrapper

/* eslint no-unused-vars:0 */
