import {LoginPage, SignUpPage, HomePage} from "../pages"

export default function routes(props){
  
  return [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: '/login',
      element: <LoginPage {...props} />
    },
    {
      path: '/signup',
      element: <SignUpPage {...props} />
    }
  ]
}

