// testing with context and a custom render method
import React from 'react'
import {render} from 'react-testing-library'
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

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react%20testing&e=07&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

/* eslint no-unused-vars:0 */
