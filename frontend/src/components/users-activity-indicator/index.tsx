import { Container } from './styles'

export function UsersActivityIndicator (): JSX.Element {
  return (
    <Container>
      {[...Array(20)].map((_, index) => (
        <section key={index.toString()}>
          <div className="user">
            <div className='avatar skeleton' />
            <div className='item skeleton' />
          </div>
          <div className='item skeleton' />
          <div className='item skeleton' />
          <div className='item skeleton' />
        </section>
      ))}
    </Container>
  )
}
