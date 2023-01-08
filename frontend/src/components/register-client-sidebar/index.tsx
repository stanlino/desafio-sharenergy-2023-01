import { FormEvent, useRef } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { toast } from 'react-toastify'
import { ClientDTO } from '../../dtos/Client'
import { api } from '../../services/api'
import { Form, Sidebar } from './styles'

type Errors = Record<string, string>

interface RegisterClientSidebarProps {
  open: boolean
  close: () => void
  onCreate: (client: ClientDTO) => void
}

export function RegisterClientSidebar ({ open, close, onCreate }: RegisterClientSidebarProps): JSX.Element {
  const userNameInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const userEmailInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const userPhoneInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const userAddressInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const userCPFInputRef = useRef<HTMLInputElement>({} as HTMLInputElement)

  async function registerNewClient (event: FormEvent): Promise<void> {
    event.preventDefault()

    const { value: name } = userNameInputRef.current
    const { value: email } = userEmailInputRef.current
    const { value: phone } = userPhoneInputRef.current
    const { value: address } = userAddressInputRef.current
    const { value: cpf } = userCPFInputRef.current

    const errors: Errors = {
      'Client already exists!': 'Este usuário já existe!'
    }

    await toast.promise(
      api.post('/clients', {
        name,
        email,
        phone,
        address,
        cpf
      }),
      {
        pending: {
          render () {
            return 'Cadastrando cliente'
          }
        },
        error: {
          render ({ data }) {
            const { response } = data as { response: { data: { message: string } } }
            return `${errors[response.data.message]}`
          }
        },
        success: {
          render ({ data }) {
            onCreate(data?.data as ClientDTO)
            close()
            return 'Cliente cadastrado!'
          }
        }
      }
    )
  }

  return (
    <Sidebar open={open}>
      <div className="content">
        <header>
          <h3>Cadastrar cliente</h3>
          <button onClick={close}>
            <MdOutlineClose />
          </button>
        </header>
        <Form onSubmit={registerNewClient}>
          <div>
            <span>Dados pessoais</span>
            <input ref={userNameInputRef} type="text" placeholder='Nome' title='Nome' required />
            <input ref={userEmailInputRef} type="text" placeholder='Email' required />
            <input ref={userPhoneInputRef} type="text" placeholder='Telefone' required />
            <input ref={userAddressInputRef} type="text" placeholder='Endereço' required />
            <input ref={userCPFInputRef} type="text" placeholder='CPF' required />
          </div>

          <button type='submit'>
            Cadastrar cliente
          </button>
        </Form>
      </div>
    </Sidebar>
  )
}
