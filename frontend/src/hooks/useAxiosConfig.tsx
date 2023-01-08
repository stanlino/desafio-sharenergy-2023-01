/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useMemo, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { useUserStore } from '../store/userStore'
import { api } from '../services/api'
import Cookies from 'js-cookie'

export function useAxiosConfig (): void {
  const { token, refreshToken, setNewToken, signOut } = useUserStore(state => state)

  useEffect(() => {
    api.defaults.headers.common.Authorization = `Bearer ${token!}`
  }, [token])

  useMemo(() => {
    const interceptor = api.interceptors.response.use(response => {
      return response
    }, async (error: AxiosError) => {
      if (error.response?.status !== 401) {
        return await Promise.reject(error)
      }

      axios.interceptors.response.eject(interceptor)

      return await api
        .post('/refresh-token', {
          refresh_token: refreshToken
        })
        .then(response => {
          setNewToken({
            refreshToken: response.data.refresh_token,
            token: response.data.token
          })

          Cookies.set('token', response.data.token, {
            expires: 30
          })

          Cookies.set('refreshToken', response.data.refresh_token, {
            expires: 30
          })

          if (error.response?.config.headers === undefined) return

          error.response.config.headers.Authorization = `Bearer ${response.data.token}`

          return axios.request(error.response.config)
        })
        .catch((err) => {
          if (err.response?.status !== 401) {
            return Promise.reject(err)
          }
          return signOut()
        })
    })

    return () => {
      api.interceptors.response.clear()
    }
  }, [refreshToken])
}
