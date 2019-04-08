import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from 'react-error-boundary'
import importAll from 'import-all.macro'

const allComponents = importAll.deferred('./components/*.js')

function DefaultComponent() {
  return (
    <div>
      <div>Please go to the URL for one of the components:</div>
      <div>
        <ul>
          {Object.keys(allComponents).map(key => (
            <li key={key}>
              <a href={key.replace(/\.\/components/, '')}>{key}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
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
          <div>
            <Component />
          </div>
        </React.Suspense>
      </ErrorBoundary>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('⚛'))
