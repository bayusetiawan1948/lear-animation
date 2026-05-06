import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ExperimentLayout from './layouts/ExperimentLayout';
import CssTransitionsExp from './pages/experiments/CssTransitionsExp';
import MagneticCardExp from './pages/experiments/MagneticCardExp';
import { TiltCardExp } from './pages/experiments/TiltCardExp';
import MagneticButtonExp from './pages/experiments/MagneticButtonExp';
import CardListStaggeredExp from './pages/experiments/CardListStaggeredExp';

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
      {
        path: 'tilt-card',
        element: <TiltCardExp />,
      },
      {
        path: 'magnetic-button',
        element: <MagneticButtonExp />,
      },
      {
        path: 'card-list-staggered',
        element: <CardListStaggeredExp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
