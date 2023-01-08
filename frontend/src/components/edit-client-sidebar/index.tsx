import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { ClientDTO } from '../../dtos/Client'
import { Form, Sidebar } from './styles'

interface EditClientSidebarProps {
  isOpen: boolean
  data: ClientDTO | null
  close: () => void
}

export function EditClientSidebar ({ isOpen, data, close }: EditClientSidebarProps): JSX.Element {
  const [editable, setEditable] = useState(false)

  function toggleEditable (): void {
    setEditable(editable => !editable)
  }

  function updateClientData (): void {

  }

  return (
    <Sidebar open={isOpen}>
      <div className="content">
        <header>
          <h3>Editar cliente</h3>
          <button onClick={close}>
            <MdOutlineClose />
          </button>
        </header>
        <Form>
          <span>Dados pessoais</span>
          <input type="text" disabled={!editable} placeholder='Nome' />
          <input type="text" disabled={!editable} placeholder='Email' />
          <input type="text" disabled={!editable} placeholder='Telefone' />
          <input type="text" disabled={!editable} placeholder='Endereço' />
          <input type="text" disabled={!editable} placeholder='CPF' />
        </Form>

        <button onClick={editable ? updateClientData : toggleEditable}>
          {editable ? 'Atualizar cliente' : 'Editar dados do cliente'}
        </button>
      </div>
    </Sidebar>
  )
}
