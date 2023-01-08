import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavigationSidebar } from '../components/navigation-sidebar'

import { NotFoundPage } from '../pages/404'
import { UsersPage } from '../pages/users'
import { LoginPage } from '../pages/login'
import { HTTPCatPage } from '../pages/http-cat'
import { RandomDogPage } from '../pages/random-dog'
import { ClientsPage } from '../pages/clients'

import { ProtectedRoutes } from './protected-routes'
import { ProtectedLogin } from './protected-login'

export function AppRoutes (): JSX.Element {
  return (
    <BrowserRouter>
      <NavigationSidebar />
      <Routes>
        <Route element={<ProtectedLogin />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/users/:page" element={<UsersPage />} />
          <Route path="/http-cat" element={<HTTPCatPage />} />
          <Route path="/random-dog" element={<RandomDogPage />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
