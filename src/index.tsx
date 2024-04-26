import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { TodoPage } from './page/TodoPage';
import { CompletedPage } from './page/CompletedPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TodoPage />,
      },
      {
        path: "/completed",
        element: <CompletedPage />
      },
    ]
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider> 
  </React.StrictMode>
);