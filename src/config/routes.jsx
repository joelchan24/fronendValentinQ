import { LoginPage, SignUpPage, HomePage, ProfilePage, Habit} from "../pages";

export default function routes(props) {
  return [
    {
      path: "/",
      element: <HomePage {...props} />,
    },
    {
      path: "/login",
      element: <LoginPage {...props} />,
    },
    {
      path: "/signup",
      element: <SignUpPage {...props} />,
    },
    {
      path: "/profile",
      element: <ProfilePage {...props} />,
    },
    {
      path:'/habits',
      element: <Habit {...props}  />
    }
  ];
}
