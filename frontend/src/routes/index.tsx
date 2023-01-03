import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Sidebar } from '../components/sidebar'

import { NotFoundPage } from '../pages/404'
import { LoginScreen } from '../pages/login'

import { redirecIfUser, redirectIfNotUser } from './redirects'

const appRoutes = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />
  },
  {
    path: '/',
    element: <LoginScreen />,
    loader: redirecIfUser
  },
  {
    path: '/home',
    element: <div />,
    loader: redirectIfNotUser
  },
  {
    path: 'http-cat',
    element: <div />,
    loader: redirectIfNotUser
  },
  {
    path: 'random-dog',
    element: <div />,
    loader: redirectIfNotUser
  },
  {
    path: 'users',
    element: <div />,
    loader: redirectIfNotUser
  }
])

export function Routes (): JSX.Element {
  return <>
    <Sidebar />
    <RouterProvider router={appRoutes} />
  </>
}
