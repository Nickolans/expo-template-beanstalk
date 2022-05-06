import { Navigate } from 'react-router-native';
import DefaultLayout from '../../Layouts/Default.layout';
import BackButtonHeaderLayout from '../../Layouts/BackButtonHeaderLayout';
import ForgotPassword from '../../Views/Auth/ForgotPassword/ForgotPassword';
import VerifyEmail from '../../Views/Auth/ForgotPassword/VerifyEmail';
import ResetPassword from '../../Views/Auth/ForgotPassword/ResetPassword';
import Dev from '../../Views/Dev/Dev';
import Login from '../../Views/Auth/Login/Login';
import SignUp from '../../Views/Auth/SignUp/SignUp';
import GetStarted from '../../Views/Auth/GetStarted/GetStarted';
import Welcome from '../../Views/Auth/GetStarted/Welcome';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    element: () => Navigate({ to: '/protected', replace: true }),
  },
  {
    path: '/dev',
    exact: true,
    layout: DefaultLayout,
    element: Dev,
  },
  {
    path: '/forgotPassword',
    exact: true,
    layout: BackButtonHeaderLayout,
    element: ForgotPassword,
  },
  {
    path: '/verifyEmail',
    exact: true,
    layout: BackButtonHeaderLayout,
    element: VerifyEmail,
  },
  {
    path: '/resetPassword',
    exact: true,
    layout: BackButtonHeaderLayout,
    element: ResetPassword,
  },
  {
    path: '/login',
    exact: true,
    layout: BackButtonHeaderLayout,
    element: Login,
  },
  {
    path: '/signup',
    exact: true,
    layout: BackButtonHeaderLayout,
    element: SignUp,
  },
  {
    path: '/getstarted',
    exact: true,
    layout: DefaultLayout,
    element: GetStarted,
  },
  {
    path: '/welcome',
    exact: true,
    layout: DefaultLayout,
    element: Welcome,
  },

];

export default publicRoutes;
