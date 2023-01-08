/* eslint-disable @typescript-eslint/promise-function-async */
import { useState } from 'react'
import { MdRemoveRedEye, MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'
import { Button } from '../../components/button'
import { ClientsActivityIndicator } from '../../components/clients-activity-indicator'
import { ClientsListEmpty } from '../../components/clients-list-empty'
import { EditClientSidebar } from '../../components/edit-client-sidebar'
import { RegisterClientSidebar } from '../../components/register-client-sidebar'
import { ClientDTO } from '../../dtos/Client'
import { useRequestClients } from '../../hooks/useRequest'
import { api } from '../../services/api'
import { Actions, Clients, Container, Main } from './styles'

export function ClientsPage (): JSX.Element {
  const [currentClient, setCurrentClient] = useState<ClientDTO | null>(null)

  const [registerClientSidebarOpen, setRegisterClientSidebarOpen] = useState(false)
  const [clientToDelete, setClientToDelete] = useState<string | null>(null)

  const { clients, loading, addClient, removeClient, updateClient } = useRequestClients()

  async function deleteClient (id: string): Promise<void> {
    if (clientToDelete !== id) return setClientToDelete(id)

    if (currentClient?.id === id) {
      setCurrentClient(null)
    }

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

  function openRegisterClientSidebar (): void {
    setCurrentClient(null)
    setClientToDelete(null)
    setRegisterClientSidebarOpen(true)
  }

  function selectClientToEditData (id: string): void {
    const client = clients.find(client => client.id === id)
    if (client == null) return
    setRegisterClientSidebarOpen(false)
    setClientToDelete(null)
    setCurrentClient(client)
  }

  return (
    <Container>
      <Main sidebarOpened={currentClient !== null || registerClientSidebarOpen}>
        <header>
          <h2>Clientes</h2>
          <Button onClick={openRegisterClientSidebar}>
            Cadastrar cliente
          </Button>
        </header>
        <Clients>
          {loading
            ? <ClientsActivityIndicator />
            : clients.length > 0 && clients.map(client => (
            <div key={client.id} className="client">
              <span>{client.name}</span>
              <Actions>
                <button onClick={() => selectClientToEditData(client.id)}>
                  <MdRemoveRedEye />
                </button>
                <button onClick={() => deleteClient(client.id)} className='delete'>
                  <MdDelete />
                  {clientToDelete === client.id && <span>Confirmar remoção</span>}
                </button>
              </Actions>
            </div>
            ))}
          {clients.length < 1 && !loading && <ClientsListEmpty />}
        </Clients>
      </Main>
      <EditClientSidebar onUpdate={(client) => updateClient(client)} isOpen={currentClient !== null} data={currentClient} close={() => setCurrentClient(null)} />
      <RegisterClientSidebar onCreate={(client) => addClient(client)} open={registerClientSidebarOpen} close={() => setRegisterClientSidebarOpen(false)} />
    </Container>
  )
}
