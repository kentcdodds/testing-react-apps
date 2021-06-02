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
import {useAsync} from '../utils'
import type {LoginFormValues} from './login'

function getErrorMessage(error: unknown) {
  if (typeof error === 'string') return error
  if (error && typeof error === 'object' && 'message' in error) {
    return (error as {message: string}).message
  }
  return 'Unknown Error'
}

function useFormSubmission<SubmissionResponse, FormData>({
  endpoint,
  formData,
}: {
  endpoint: string
  formData: FormData | null
}) {
  const {status, data, run, error} = useAsync<SubmissionResponse>()

  const fetchBody = formData ? JSON.stringify(formData) : null

  React.useEffect(() => {
    if (fetchBody) {
      const promise = window
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
            return data as SubmissionResponse
          } else {
            throw data
          }
        })
      run(promise)
    }
  }, [fetchBody, endpoint, run])

  return {status, responseData: data, errorMessage: getErrorMessage(error)}
}

function LoginSubmission() {
  const [formData, setFormData] = React.useState<LoginFormValues | null>(null)
  const {status, responseData, errorMessage} = useFormSubmission<
    {username: string},
    LoginFormValues
  >({
    endpoint: 'https://auth-provider.example.com/api/login',
    formData,
  })

  return (
    <>
      {status === 'resolved' ? (
        <div>
          Welcome <strong>{responseData?.username}</strong>
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
