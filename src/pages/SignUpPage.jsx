import { SignUpForm } from "../components"

const SignUpPage = (props) => {
  return (
    <div>
      <h1> Signup. </h1>
      <SignUpForm {...props} />
    </div>
  )
}

export default SignUpPage