import {LoginForm} from '../components'


const AuthPage = (props) => {
  return (
    <div>
      <h1> Login. </h1>
      <LoginForm {...props} />
    </div>
  )
}

export default AuthPage