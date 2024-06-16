import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../pages/Tasks';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
import Users from '../pages/Users';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: "/",
        element: <Tasks />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

export default routes;
