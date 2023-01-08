import { Container } from './styles'

export function UsersListEmpty (): JSX.Element {
  return (
    <Container>
      <img src="/users-empty.svg" />
      <span>
        Nenhum usuário corresponde aos parâmetros de pesquisa.
      </span>
    </Container>
  )
}
