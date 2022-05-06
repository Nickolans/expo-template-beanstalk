import DefaultLayout from '../../Layouts/Default.layout';
import Dev from '../../Views/Dev/Dev';

const protectedRoutes = [
  {
    path: '/protected',
    exact: true,
    layout: DefaultLayout,
    element: Dev,
  },
];

export default protectedRoutes;
