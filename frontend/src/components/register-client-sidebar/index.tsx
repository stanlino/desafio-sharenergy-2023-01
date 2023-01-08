import { FormEvent, useRef } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { toast } from 'react-toastify'
import { ClientDTO } from '../../dtos/Client'
import { api } from '../../services/api'
import { Button } from '../button'
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

  function resetInputs (): void {
    userNameInputRef.current.value = ''
    userEmailInputRef.current.value = ''
    userPhoneInputRef.current.value = ''
    userAddressInputRef.current.value = ''
    userCPFInputRef.current.value = ''
  }

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
            resetInputs()
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
            <label>
              Nome
              <input ref={userNameInputRef} type="text" placeholder='Jonas Albuquerque' title='Nome' required />
            </label>
            <label>
              Email
              <input ref={userEmailInputRef} type="text" placeholder='jonas.albuquerque@gmail.com' required />
            </label>
            <label>
              Telefone
              <input ref={userPhoneInputRef} type="text" placeholder='99 99999 9999' required />
            </label>
            <label>
              Endereço
              <input ref={userAddressInputRef} type="text" placeholder='Rua 16, Avenida 15, Bairro Tal' required />
            </label>
            <label>
              CPF
              <input ref={userCPFInputRef} type="text" placeholder='000 000 000 00' required />
            </label>
          </div>

          <Button type='submit'>
            Cadastrar cliente
          </Button>
        </Form>
      </div>
    </Sidebar>
  )
}
