/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { AxiosError } from 'axios'
import create from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { api } from '../services/api'
import Cookies from 'js-cookie'

interface SetNewTokenProps {
  token: string
  refreshToken: string
  persist: boolean
}

interface SignInRequest {
  username: string
  password: string
  persist: boolean
}

type SignInResponse = number

interface UserStore {
  username: null | string
  token: null | string
  refreshToken: null | string
  setNewToken: ({ token, refreshToken }: SetNewTokenProps) => void
  signIn: ({ username, password, persist }: SignInRequest) => Promise<SignInResponse>
  signOut: () => void
}

export const useUserStore = create<UserStore, [
  ['zustand/persist', {}],
]>(
  persist(
    (set) => ({
      username: Cookies.get('username') || null,
      token: Cookies.get('token') || null,
      refreshToken: Cookies.get('refreshToken') || null,
      setNewToken: ({ token, refreshToken }: SetNewTokenProps) => set({
        token,
        refreshToken
      }),
      signIn: async ({ username, password, persist }): Promise<SignInResponse> => {
        try {
          const { data } = await api.post('/session', {
            username,
            password
          })

          if (persist) {
            Cookies.set('username', data.username, {
              expires: 30
            })

            Cookies.set('token', data.token, {
              expires: 30
            })

            Cookies.set('refreshToken', data.refresh_token, {
              expires: 30
            })
          }

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
      signOut: () => {
        set({
          username: null,
          token: null,
          refreshToken: null
        })

        Cookies.remove('username')
        Cookies.remove('token')
        Cookies.remove('refreshToken')
      }
    }),
    {
      name: '@share-energy-challenge',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
