import { AxiosError } from 'axios'
import create from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { api } from '../services/api'

interface SignInRequest {
  username: string
  password: string
}

type SignInResponse = number | 'unknown_error'

interface UserStore {
  username: null | string
  token: null | string
  refreshToken: null | string
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
      signIn: async ({ username, password }): Promise<SignInResponse> => {
        try {
          const { data } = await api.post('/session', {
            username,
            password
          })

          set({
            username: data.username,
            token: data.token,
            refreshToken: data.refreshToken
          })

          return 200
        } catch (err) {
          if (err instanceof AxiosError) {
            return err.response?.status as number
          }

          return 'unknown_error'
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
