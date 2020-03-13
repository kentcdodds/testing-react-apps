import {render as rtlRender} from '@testing-library/react'

function render(ui, {...rtlOptions}) {
  function Wrapper({children}) {
    return children
  }
  return rtlRender(ui, {wrapper: Wrapper, ...rtlOptions})
}

export * from '@testing-library/react'
// override React Testing Library's render with our own
export {render}
