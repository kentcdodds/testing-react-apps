import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from 'react-error-boundary'

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
      <ErrorBoundary FallbackComponent={DefaultComponent}>
        <React.Suspense fallback="loading...">
          <Component />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('⚛'))
