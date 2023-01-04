import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Sidebar } from '../components/sidebar'

import { NotFoundPage } from '../pages/404'
import { UsersPage } from '../pages/users'
import { LoginScreen } from '../pages/login'

export function AppRoutes (): JSX.Element {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginScreen />} />
        <Route>
          <Route path="/users" element={<UsersPage />}>
            <Route path=':page' element={<UsersPage />} />
          </Route>
          <Route path="/http-cat" element={<div />} />
          <Route path="/random-dog" element={<div />} />
          <Route path="/clients" element={<div />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
