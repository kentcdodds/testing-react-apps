// http://localhost:3000/login
// this renders a login UI and calls the onSubmit handler with the username
// and password when the user submits the form.

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement
  password: HTMLInputElement
}
interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export type LoginFormValues = {
  username: FormElements['username']['value']
  password: FormElements['password']['value']
}

function Login({onSubmit}: {onSubmit: (values: LoginFormValues) => void}) {
  function handleSubmit(event: React.FormEvent<LoginFormElement>) {
    event.preventDefault()
    const {username, password} = event.currentTarget.elements
    const values: LoginFormValues = {
      username: username.value,
      password: password.value,
    }

    onSubmit(values)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-field">Username</label>
        <input id="username-field" name="username" type="text" />
      </div>
      <div>
        <label htmlFor="password-field">Password</label>
        <input id="password-field" name="password" type="password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Login
