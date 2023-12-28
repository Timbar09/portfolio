import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/Home';
import ErrorPage from './routes/ErrorPage';

import './assets/stylesheets/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: (
          <div>
            <h1>About page</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore quia a sapiente rerum facere consectetur fugiat harum
              architecto magni perferendis doloribus voluptatibus ullam aliquid,
              doloremque eligendi, corporis corrupti numquam minima laboriosam,
              voluptas fugit. Non ullam exercitationem ipsum at iste minus.
              Numquam, illum quaerat eligendi qui officiis laboriosam vero
              ducimus?
            </p>
          </div>
        ),
      },
      {
        path: '/projects',
        element: (
          <div>
            <h1>Projects page</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore quia a sapiente rerum facere consectetur fugiat harum
              architecto magni perferendis doloribus voluptatibus ullam aliquid,
              doloremque eligendi, corporis corrupti numquam minima laboriosam,
              voluptas fugit. Non ullam exercitationem ipsum at iste minus.
              Numquam, illum quaerat eligendi qui officiis laboriosam vero
              ducimus?
            </p>
          </div>
        ),
      },
      {
        path: '/capabilities',
        element: (
          <div>
            <h1>Capabilities page</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore quia a sapiente rerum facere consectetur fugiat harum
              architecto magni perferendis doloribus voluptatibus ullam aliquid,
              doloremque eligendi, corporis corrupti numquam minima laboriosam,
              voluptas fugit. Non ullam exercitationem ipsum at iste minus.
              Numquam, illum quaerat eligendi qui officiis laboriosam vero
              ducimus?
            </p>
          </div>
        ),
      },
      {
        path: '/contact',
        element: (
          <div>
            <h1>Contact page</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore quia a sapiente rerum facere consectetur fugiat harum
              architecto magni perferendis doloribus voluptatibus ullam aliquid,
              doloremque eligendi, corporis corrupti numquam minima laboriosam,
              voluptas fugit. Non ullam exercitationem ipsum at iste minus.
              Numquam, illum quaerat eligendi qui officiis laboriosam vero
              ducimus?
            </p>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
