import Dashboard from '../views/pages/dashboard';
// import Landing from '../views/pages/landing';
import Login from '../views/pages/login';
import Tips from '../views/pages/tips';
import Profile from '../views/pages/profile';
import Register from '../views/pages/register';

const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/login': Login,
  '/register': Register,
  '/tips': Tips,
  '/profile': Profile,
};

export default routes;
