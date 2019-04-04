import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const Component = React.useState(() =>
    React.lazy(`./components/${window.location.pathname}`),
  )[0]
  return (
    <React.Suspense fallback="loading...">
      <Component />
    </React.Suspense>
  )
}

ReactDOM.render(<App />, document.getElementById('⚛'))
