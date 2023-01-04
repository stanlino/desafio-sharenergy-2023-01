import { FormEvent, useRef } from 'react'
import { BiUserCircle, BiLockAlt } from 'react-icons/bi'
import { Button, Container, FormHeader } from './styles'

export function LoginPage (): JSX.Element {
  const usernameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()

    if ((usernameInputRef.current == null) || (passwordInputRef.current == null)) return

    const { value: username } = usernameInputRef.current
    const { value: password } = passwordInputRef.current

    console.log(username, password)
  }

  return (
    <Container>
      <main>
        <form onSubmit={handleSubmit}>
          <FormHeader>
            <h2>Desafio</h2>
            <img src="/shareenergylogo.png" alt="Share Energy Logo" />
          </FormHeader>

          <label className='input-text-label' htmlFor="username-input">
            <BiUserCircle />
            <input required ref={usernameInputRef} placeholder='Usuário' type="text" id="username-input" />
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
