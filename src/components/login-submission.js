// http://localhost:3000/login-submission
//
// The <LoginSubmission /> component uses our <Login /> component and actually
// submits the formData to /api/login and redirects the user or shows an error
// message if the request failed.
//
// 🚨  You can see a failure by not providing a username or password

import * as React from 'react'
import Login from './login'
import Spinner from './spinner'

function formSubmissionReducer(state, action) {
  switch (action.type) {
    case 'START': {
      return {status: 'pending', responseData: null, errorMessage: null}
    }
    case 'RESOLVE': {
      return {
        status: 'resolved',
        responseData: action.responseData,
        errorMessage: null,
      }
    }
    case 'REJECT': {
      return {
        status: 'rejected',
        responseData: null,
        errorMessage: action.error.message,
      }
    }
    default:
      throw new Error(`Unsupported type: ${action.type}`)
  }
}

function useFormSubmission({endpoint, data}) {
  const [state, dispatch] = React.useReducer(formSubmissionReducer, {
    status: 'idle',
    responseData: null,
    errorMessage: null,
  })

  const fetchBody = data ? JSON.stringify(data) : null

  React.useEffect(() => {
    if (fetchBody) {
      dispatch({type: 'START'})
      window
        .fetch(endpoint, {
          method: 'POST',
          body: fetchBody,
          headers: {
            'content-type': 'application/json',
          },
        })
        .then(async response => {
          const data = await response.json()
          if (response.ok) {
            dispatch({type: 'RESOLVE', responseData: data})
          } else {
            dispatch({type: 'REJECT', error: data})
          }
        })
    }
  }, [fetchBody, endpoint])

  return state
}

function LoginSubmission() {
  const [formData, setFormData] = React.useState(null)
  const {status, responseData, errorMessage} = useFormSubmission({
    endpoint: 'https://auth-provider.example.com/api/login',
    data: formData,
  })

  return (
    <>
      {status === 'resolved' ? (
        <div>
          Welcome <strong>{responseData.username}</strong>
        </div>
      ) : (
        <Login onSubmit={data => setFormData(data)} />
      )}
      <div style={{height: 200}}>
        {status === 'pending' ? <Spinner /> : null}
        {status === 'rejected' ? (
          <div role="alert" style={{color: 'red'}}>
            {errorMessage}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default LoginSubmission
