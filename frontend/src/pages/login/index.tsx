import { FormEvent, useRef, useState } from 'react'
import { BiUserCircle, BiLockAlt } from 'react-icons/bi'
import { useUserStore } from '../../store/userStore'
import { Button, Container, FormHeader } from './styles'

export function LoginPage (): JSX.Element {
  const usernameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const [error, setError] = useState(0)

  const { signIn } = useUserStore(state => state)

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    setError(0)

    event.preventDefault()

    if ((usernameInputRef.current == null) || (passwordInputRef.current == null)) return

    const { value: username } = usernameInputRef.current
    const { value: password } = passwordInputRef.current

    const statusCode = await signIn({ username, password })

    setError(statusCode)
  }

  return (
    <Container>
      <main>
        <form onSubmit={handleSubmit}>
          <FormHeader>
            <h2>Desafio</h2>
            <img src="/shareenergylogo.png" alt="Share Energy Logo" />
          </FormHeader>

          <span className='error'>
            {error === 404 && 'Usuário não existe!'}
            {error === 301 && 'Credenciais incorretas!'}
            {error === 500 && 'Servidor fora do ar :('}
          </span>

          <label className='input-text-label' htmlFor="username-input">
            <BiUserCircle />
            <input required autoComplete='off' ref={usernameInputRef} placeholder='Usuário' type="text" id="username-input" />
          </label>
          <label className='input-text-label' htmlFor="password-input">
            <BiLockAlt />
            <input required ref={passwordInputRef} placeholder='Senha' type="password" id="password-input" />
          </label>
          <label className='input-checkbox-label' htmlFor="remember-me-checkbox">
            <input type="checkbox" id="remember-me-checkbox" />
            <span>Lembre-se de mim</span>
          </label>

          <Button>
            Acessar
          </Button>

        </form>
      </main>
    </Container>
  )
}
