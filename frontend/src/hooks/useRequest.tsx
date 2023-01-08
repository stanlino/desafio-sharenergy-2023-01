/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useState, useEffect } from 'react'
import { ClientDTO } from '../dtos/Client'
import { api } from '../services/api'

interface UseRequestResponse {
  clients: ClientDTO[]
  loading: boolean
  addClient: (client: ClientDTO) => void
  removeClient: (id: string) => void
}

export function useRequestClients (): UseRequestResponse {
  const [clients, setClients] = useState<ClientDTO[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function request (): Promise<void> {
      setLoading(true)
      const { data } = await api.get('/clients')

      setClients(data.results)
      setLoading(false)
    }

    void request()
  }, [])

  function addClient (client: ClientDTO): void {
    if (clients.find(item => item.id === client.id)) return

    setClients(prevState => [...prevState, client])
  }

  function removeClient (id: string): void {
    setClients(prevState => prevState.filter(client => client.id !== id))
  }

  return {
    clients,
    loading,
    addClient,
    removeClient
  }
}
