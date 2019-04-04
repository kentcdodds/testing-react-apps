import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const Component = React.useState(() =>
    React.lazy(() => import(`./components${window.location.pathname}`)),
  )[0]
  return (
    <React.Suspense fallback="loading...">
      <div
        style={{
          flex: 1,
          padding: 20,
          border: '1px solid',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Component />
      </div>
    </React.Suspense>
  )
}

ReactDOM.render(<App />, document.getElementById('⚛'))
