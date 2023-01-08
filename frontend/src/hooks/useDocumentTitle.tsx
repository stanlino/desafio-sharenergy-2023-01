import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Titles = Record<string, string>

export function useDocumentTitle (): void {
  const titles: Titles = {
    '/': 'Desafio Share Energy | Login',
    '/users': 'Share Energy | Users',
    '/http-cat': 'Share Energy | HTTP cat',
    '/random-dog': 'Share Energy | Random dog',
    '/clients': 'Share Energy | Clients'
  }

  const location = useLocation()
  useEffect(() => {
    document.title = titles[location.pathname] ?? 'Desafio Share Energy'
  }, [location])
}
