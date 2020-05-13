// testing with context and a custom render method
// 💯 create a custom render method
// http://localhost:3000/easy-button

import React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

function renderWithProviders(ui, {theme = 'light', ...options} = {}) {
  const Wrapper = ({children}) => (
    <ThemeProvider value={[theme, () => {}]}>{children}</ThemeProvider>
  )
  return render(ui, {wrapper: Wrapper, ...options})
}

test('renders with the light styles for the light theme', () => {
  renderWithProviders(<EasyButton>Easy</EasyButton>)
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  renderWithProviders(<EasyButton>Easy</EasyButton>, {
    theme: 'dark',
  })
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})
