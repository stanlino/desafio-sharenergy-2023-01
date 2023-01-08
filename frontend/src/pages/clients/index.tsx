/* eslint-disable @typescript-eslint/promise-function-async */
import { useState } from 'react'
import { MdRemoveRedEye, MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'
import { EditClientSidebar } from '../../components/edit-client-sidebar'
import { RegisterClientSidebar } from '../../components/register-client-sidebar'
import { ClientDTO } from '../../dtos/Client'
import { useRequestClients } from '../../hooks/useRequest'
import { api } from '../../services/api'
import { Actions, Clients, Container, Main } from './styles'

export function ClientsPage (): JSX.Element {
  const [currentClient, setCurrentClient] = useState<ClientDTO | null>(null)

  const [registerClientSidebarOpen, setRegisterClientSidebarOpen] = useState(false)

  const { clients, loading, addClient, removeClient } = useRequestClients()

  async function deleteClient (id: string): Promise<void> {
    await toast.promise(
      api.delete(`/clients/${id}`),
      {
        pending: {
          render () {
            return 'Removendo cliente'
          }
        },
        error: {
          render () {
            return 'Erro ao remover cliente'
          }
        },
        success: {
          render () {
            return 'Cliente removido!'
          }
        }
      }
    )

    removeClient(id)
  }

  function selectClientToEditData (id: string): void {
    const client = clients.find(client => client.id === id)
    if (client == null) return
    setCurrentClient(client)
  }

  return (
    <Container>
      <Main sidebarOpened={currentClient !== null || registerClientSidebarOpen}>
        <header>
          <h2>Clientes</h2>
          <button onClick={() => setRegisterClientSidebarOpen(true)}>
            Adicionar cliente
          </button>
        </header>
        {!loading && (
          <Clients>
            {clients.map(client => (
              <div key={client.id} className="client">
                <span>{client.name}</span>
                <Actions>
                  <button onClick={() => selectClientToEditData(client.id)}>
                    <MdRemoveRedEye />
                  </button>
                  <button onClick={() => deleteClient(client.id)} className='delete'>
                    <MdDelete />
                  </button>
                </Actions>
              </div>
            ))}
          </Clients>
        )}
      </Main>
      <EditClientSidebar isOpen={currentClient !== null} data={currentClient} close={() => setCurrentClient(null)} />
      <RegisterClientSidebar onCreate={(client) => addClient(client)} open={registerClientSidebarOpen} close={() => setRegisterClientSidebarOpen(false)} />
    </Container>
  )
}
