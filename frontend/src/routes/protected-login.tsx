import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../providers/auth'

export function ProtectedLogin (): JSX.Element {
  const { user } = useAuth()

  if (user != null) return <Navigate to={ '/users' } />

  return <Outlet />
}
