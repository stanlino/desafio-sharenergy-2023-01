import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Sidebar } from '../components/sidebar'

import { NotFoundPage } from '../pages/404'
import { UsersPage } from '../pages/users'
import { LoginPage } from '../pages/login'
import { HTTPCatPage } from '../pages/http-cat'
import { RandomDogPage } from '../pages/random-dog'

export function AppRoutes (): JSX.Element {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route>
          <Route path="/users" element={<UsersPage />}>
            <Route path=':page' element={<UsersPage />} />
          </Route>
          <Route path="/http-cat" element={<HTTPCatPage />} />
          <Route path="/random-dog" element={<RandomDogPage />} />
          <Route path="/clients" element={<div />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
