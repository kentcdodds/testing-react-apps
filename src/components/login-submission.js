// http://localhost:3000/isolated/testing/components/login-submission
//
// The <LoginSubmission /> component uses our <Login /> component and actually
// submits the formData to /api/login and redirects the user or shows an error
// message if the request failed.
//
// NOTE: that while this is calling `fetch`, we're actually NOT making a real
// HTTP call in this app. If you checkout `hack-fetch.js` you'll se that we're
// overriding fetch to serve a fake response for the purposes of our demo app.
// 🚨  In the app you can simulate a failure by using "fail" as the password.
//     (this does not apply to the tests however).

import React from 'react'
import {navigate} from '@reach/router'
import Login from './login'

function formSubmissionReducer(state, action) {
  switch (action.type) {
    case 'SUBMIT': {
      return {loading: true, responseData: null, errorMessage: null}
    }
    case 'SUCCESS': {
      return {
        loading: false,
        responseData: action.responseData,
        errorMessage: null,
      }
    }
    case 'ERROR': {
      return {
        loading: false,
        responseData: null,
        errorMessage: action.error.errors[0],
      }
    }
    default:
      throw new Error(`Unsupported type: ${action.type}`)
  }
}

function useFormSubmission({endpoint, data}) {
  const [state, dispatch] = React.useReducer(formSubmissionReducer, {
    loading: false,
    responseData: null,
    errorMessage: null,
  })

  const fetchBody = data ? JSON.stringify(data) : null

  React.useEffect(() => {
    if (fetchBody) {
      dispatch({type: 'SUBMIT'})
      window
        .fetch(endpoint, {
          method: 'POST',
          body: fetchBody,
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        })
        .then(r => r.json())
        .then(
          responseData => {
            dispatch({type: 'SUCCESS', responseData})
          },
          error => {
            dispatch({type: 'ERROR', error})
          },
        )
    }
  }, [fetchBody, endpoint])

  return state
}

function Spinner() {
  return (
    <div className="lds-ripple" aria-label="loading...">
      <div />
      <div />
    </div>
  )
}

function LoginSubmission() {
  const [formData, setFormData] = React.useState(null)
  const {loading, responseData, errorMessage} = useFormSubmission({
    endpoint: '/api/login',
    data: formData,
  })

  const token = responseData && responseData.token
  React.useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', token)
      navigate('/app')
    }
  }, [token])

  if (responseData) {
    return null
  }

  return (
    <>
      <Login onSubmit={data => setFormData(data)} />
      {loading ? <Spinner /> : null}
      {errorMessage}
    </>
  )
}

export default LoginSubmission
