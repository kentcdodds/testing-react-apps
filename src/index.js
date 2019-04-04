import React from 'react'
import ReactDOM from 'react-dom'

function DefaultComponent() {
  return <div>Please go to the URL for one of the components</div>
}

function App() {
  const Component = React.useState(() => {
    if (window.location.pathname.length > 1) {
      return React.lazy(() => import(`./components${window.location.pathname}`))
    } else {
      return DefaultComponent
    }
  })[0]
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
