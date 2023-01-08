/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, useRef } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { toast } from 'react-toastify'
import { ClientDTO } from '../../dtos/Client'
import { api } from '../../services/api'
import { Button } from '../button'
import { Form, Sidebar } from './styles'

interface EditClientSidebarProps {
  isOpen: boolean
  data: ClientDTO | null
  close: () => void
  onUpdate: (client: ClientDTO) => void
}

export function EditClientSidebar ({ isOpen, data, close, onUpdate }: EditClientSidebarProps): JSX.Element {
  const [editable, setEditable] = useState(false)

  console.log(data)

  const userNameInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const userEmailInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const userPhoneInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const userAddressInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const userCPFInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)

  function turnOnEditable (): void {
    setEditable(true)
  }

  function handleClose (): void {
    setEditable(false)
    close()
  }

  async function updateClientData (): Promise<void> {
    const { value: name } = userNameInputRef.current
    const { value: email } = userEmailInputRef.current
    const { value: phone } = userPhoneInputRef.current
    const { value: address } = userAddressInputRef.current
    const { value: cpf } = userCPFInputRef.current

    const clientUpdated = {
      id: data?.id,
      name,
      email,
      phone,
      address,
      cpf
    }

    if (clientUpdated === data) return

    await toast.promise(
      api.patch(`/clients/${data?.id}`, clientUpdated),
      {
        pending: {
          render () {
            return 'Atualizando cliente'
          }
        },
        error: {
          render () {
            return 'Erro ao atualizar cliente'
          }
        },
        success: {
          render () {
            onUpdate(clientUpdated as ClientDTO)
            handleClose()
            return 'Cliente atualizado!'
          }
        }
      }
    )
  }

  return (
    <Sidebar open={isOpen}>
      <div className="content">
        <header>
          <h3>Editar cliente</h3>
          <Button onClick={handleClose}>
            <MdOutlineClose />
          </Button>
        </header>
        <Form>
          <span>Dados pessoais</span>
          <label>
            ID
            <input type="text" disabled={true} defaultValue={data?.id} placeholder='Id' required/>
          </label>
          <label>
            Nome
            <input type="text" ref={userNameInputRef} disabled={!editable} defaultValue={data?.name} placeholder='Jonas Albuquerque' required/>
          </label>
          <label>
            Email
            <input type="text" ref={userEmailInputRef} disabled={!editable} defaultValue={data?.email} placeholder='jonas.albuquerque@gmail.com' required/>
          </label>
          <label>
            Telefone
            <input type="text" ref={userPhoneInputRef} disabled={!editable} defaultValue={data?.phone} placeholder='99 99999 9999' required/>
          </label>
          <label>
            Endereço
            <input type="text" ref={userAddressInputRef} disabled={!editable} defaultValue={data?.address} placeholder='Rua 16, Avenida 15, Bairro Tal' required/>
          </label>
          <label>
            CPF
            <input type="text" ref={userCPFInputRef} disabled={!editable} defaultValue={data?.cpf} placeholder='000 000 000 00' required/>
        </label></
        Form>

        <Button onClick={editable ? updateClientData : turnOnEditable}>
          {editable ? 'Atualizar cliente' : 'Editar dados do cliente'}
        </Button>
      </div>
    </Sidebar>
  )
}
