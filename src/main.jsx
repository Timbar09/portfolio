import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/Home';
import ErrorPage from './components/routes/ErrorPage.jsx';

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
        path: '/page2',
        element: (
          <div>
            <h1>Page 2</h1>
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
        path: '/page3',
        element: <h1>Page 3</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
