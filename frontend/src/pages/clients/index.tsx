import { useState } from 'react'
import { MdRemoveRedEye, MdDelete, MdOutlineClose } from 'react-icons/md'
import { Actions, Clients, Container, Form, Main, Sidebar } from './styles'

export function ClientsPage (): JSX.Element {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  function toggleSidebar (): void {
    setSidebarVisible(visible => !visible)
  }

  return (
    <Container>
      <Main>
        <header>
          <h2>Clientes</h2>
          <button>
            Adicionar cliente
          </button>
        </header>
        <Clients>
          <div className="client">
            <span>Jonas Albuquerque</span>
            <Actions>
              <button onClick={toggleSidebar}>
                <MdRemoveRedEye />
              </button>
              <button className='delete'>
                <MdDelete />
              </button>
            </Actions>
          </div>
        </Clients>
      </Main>
      <Sidebar open={sidebarVisible}>
        <div className="content">
          <header>
            <h3>Jonas Albuquerque</h3>
            <button onClick={toggleSidebar}>
              <MdOutlineClose />
            </button>
          </header>
          <Form>
            <span>Dados pessoais</span>
            <input type="text" placeholder='Nome' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Telefone' />
            <input type="text" placeholder='Endereço' />
            <input type="text" placeholder='CPF' />
          </Form>

          <button>
            Salvar alterações
          </button>
        </div>
      </Sidebar>
    </Container>
  )
}
