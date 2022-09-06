import {
  LoginPage,
  SignUpPage,
  HomePage,
  ProfilePage,
  Habit,
  Community,
} from "../pages";

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
      path: "/habits",
      element: <Habit {...props} />,
    },
    {
      path: "/community",
      element: <Community {...props} />,
    },
  ];
}
