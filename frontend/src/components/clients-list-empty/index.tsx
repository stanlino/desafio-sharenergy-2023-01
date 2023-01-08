import { Container } from './styles'

export function ClientsListEmpty (): JSX.Element {
  return (
    <Container>
      <img src="/clients-empty.svg" />
      <span>
        Não há clientes cadastrados
      </span>
    </Container>
  )
}
