// testing with context and a custom render method
import React from 'react'
import {render} from 'react-testing-library'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

function renderWithTheme(ui, {theme = 'light', ...options}) {
  const Wrapper = ({children}) => (
    <ThemeProvider value={[theme, () => {}]}>{children}</ThemeProvider>
  )
  return render(ui, {wrapper: Wrapper, ...options})
}

test('renders with the light styles for the light theme', () => {
  const {getByText} = renderWithTheme(<EasyButton>Easy</EasyButton>, {
    theme: 'light',
  })
  const button = getByText(/easy/i)
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  const {getByText} = renderWithTheme(<EasyButton>Easy</EasyButton>, {
    theme: 'dark',
  })
  const button = getByText(/easy/i)
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})
