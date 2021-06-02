import {render as rtlRender, RenderOptions} from '@testing-library/react'
import {ThemeProvider} from 'components/theme'

function render(
  ui: React.ReactElement,
  {theme = 'light', ...options}: RenderOptions & {theme?: string} = {},
) {
  function Wrapper({children}: {children: React.ReactNode}) {
    if (theme !== 'light' && theme !== 'dark') {
      throw new Error('Invalid theme')
    }
    return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
// override React Testing Library's render with our own
export {render}
