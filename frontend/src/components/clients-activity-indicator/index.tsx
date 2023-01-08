import { Container } from './styles'

export function ClientsActivityIndicator (): JSX.Element {
  return (
    <Container>
      {[...Array(4)].map((_, index) => (
        <section key={index.toString()}>
          <div className="name skeleton" />
          <div className='options'>
            <div className="option skeleton" />
            <div className="option skeleton" />
          </div>
        </section>
      ))}
    </Container>
  )
}
