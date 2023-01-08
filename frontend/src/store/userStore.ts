import { AxiosError } from 'axios'
import create from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { api } from '../services/api'

interface SetNewTokenProps {
  token: string
  refreshToken: string
}

interface SignInRequest {
  username: string
  password: string
}

type SignInResponse = number

interface UserStore {
  username: null | string
  token: null | string
  refreshToken: null | string
  setNewToken: ({ token, refreshToken }: SetNewTokenProps) => void
  signIn: ({ username, password }: SignInRequest) => Promise<SignInResponse>
  signOut: () => void
}

export const useUserStore = create<UserStore, [
  ['zustand/persist', {}],
]>(
  persist(
    (set) => ({
      username: null,
      token: null,
      refreshToken: null,
      setNewToken: ({ token, refreshToken }: SetNewTokenProps) => set({
        token,
        refreshToken
      }),
      signIn: async ({ username, password }): Promise<SignInResponse> => {
        try {
          const { data } = await api.post('/session', {
            username,
            password
          })

          set({
            username: data.username,
            token: data.token,
            refreshToken: data.refresh_token
          })

          return 200
        } catch (err) {
          console.log(err)
          if (err instanceof AxiosError) {
            if (err.response?.status != null) {
              return err.response?.status
            }

            return 500
          }

          return 500
        }
      },
      signOut: () => set({
        username: null,
        token: null,
        refreshToken: null
      })
    }),
    {
      name: '@share-energy-challenge',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
