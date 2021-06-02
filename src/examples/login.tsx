import Login from '../components/login'
export default function LoginExample() {
  return <Login onSubmit={vals => console.log('submission success', vals)} />
}
