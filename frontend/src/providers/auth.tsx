import { createContext, ReactNode, useContext, useState } from 'react'
import { api } from '../services/api'

interface SignInProps {
  username: string
  password: string
}

interface User {
  username: string
}

interface AuthContextData {
  user: User | null
  signIn: ({ username, password }: SignInProps) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null)

  async function signIn ({ username, password }: SignInProps): Promise<void> {
    const { data, status } = await api.post('/session', {
      username,
      password
    })

    if (status !== 200) return console.log('Erro ao relizar autenticação')

    setUser({
      username: data.username
    })
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn
    }}>

    </AuthContext.Provider>
  )
}

export function useAuth (): AuthContextData {
  const context = useContext(AuthContext)
  return context
}
