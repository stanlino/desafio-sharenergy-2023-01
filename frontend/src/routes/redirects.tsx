/* eslint-disable @typescript-eslint/no-throw-literal */
import { redirect } from 'react-router-dom'

export function redirectIfNotUser (): null {
  const user = true

  if (!user) {
    throw redirect('/')
  }

  return null
}

export function redirecIfUser (): null {
  const user = true

  if (user) {
    throw redirect('/users')
  }

  return null
}
