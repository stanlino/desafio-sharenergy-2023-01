import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginScreen } from '../pages/login'

const authRoutes = createBrowserRouter([
  {
    path: '/',
    element: <LoginScreen />
  }
])

export function Routes (): JSX.Element {
  return <RouterProvider router={authRoutes} />
}
