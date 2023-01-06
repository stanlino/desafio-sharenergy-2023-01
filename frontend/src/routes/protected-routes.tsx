import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../providers/auth'

export function ProtectedRoutes (): JSX.Element {
  const { user } = useAuth()

  if (user == null) return <Navigate to={'/'} />

  return <Outlet />
}
