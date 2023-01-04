import { useState } from 'react'
import { useFetchUsers } from '../../hooks/useFetchUsers'
import { Action, Actions, Container, Table } from './styles'

export function UsersPage (): JSX.Element {
  const {
    users,
    loading,
    handleNextPage,
    handlePreviousPage,
    currentPage
  } = useFetchUsers()

  const [search, setSearch] = useState('')

  const filteredUsers = users.filter(user => {
    if (search.length < 1) return user

    if (
      user.email.includes(search) ||
      user.name.first.concat(' ').concat(user.name.last).includes(search) ||
      user.login.username.includes(search)
    ) return user
  })

  return (
    <Container>
      <header>
        <input onChange={e => setSearch(e.target.value)} placeholder='Pesquise por nome, email ou usuário' type="text" />
        <button>
          Pesquisar
        </button>
      </header>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Usuário</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {!loading && filteredUsers.map(user => (
            <tr key={user.login.username}>
              <td>
                <img src={user.picture.medium} alt={`Imagem de avatar de ${user.name.first}`} />
                {user.name.first.concat(' ').concat(user.name.last)}
              </td>
              <td>
                {user.email}
              </td>
              <td>
                {user.login.username}
              </td>
              <td>
                {user.dob.age} anos
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Actions>
        <Action disabled={currentPage === 1} onClick={handlePreviousPage}>
          Página anterior
        </Action>
        <Action onClick={handleNextPage}>
          Próxima página
        </Action>
      </Actions>
    </Container>
  )
}