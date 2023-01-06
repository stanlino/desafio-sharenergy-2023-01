import { Navigate, Outlet } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

export function ProtectedRoutes (): JSX.Element {
  const { username } = useUserStore()

  if (username == null) return <Navigate to={'/'} />

  return <Outlet />
}
