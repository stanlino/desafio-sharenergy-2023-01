import { Navigate, Outlet } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

export function ProtectedLogin (): JSX.Element {
  const { username } = useUserStore()

  if (username != null) return <Navigate to={ '/users' } replace />

  return <Outlet />
}
