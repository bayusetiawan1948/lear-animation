import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ExperimentLayout from './layouts/ExperimentLayout';
import CssTransitionsExp from './pages/experiments/CssTransitionsExp';
import MagneticCardExp from './pages/experiments/MagneticCardExp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/experiments',
    element: <ExperimentLayout />,
    children: [
      {
        path: 'css-transitions',
        element: <CssTransitionsExp />,
      },
      {
        path: 'magnetic-card',
        element: <MagneticCardExp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
