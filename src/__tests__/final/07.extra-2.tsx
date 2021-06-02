// testing with context and a custom render method
// 💯 create a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, RenderOptions, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

function renderWithProviders(
  ui: React.ReactElement,
  {theme = 'light', ...options}: RenderOptions & {theme?: string} = {},
) {
  function Wrapper({children}: {children: React.ReactNode}) {
    if (theme !== 'light' && theme !== 'dark') {
      throw new Error('Invalid theme')
    }
    return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  }
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
