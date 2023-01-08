import { useState } from 'react'
import { Button } from '../../components/button'
import { UsersActivityIndicator } from '../../components/users-activity-indicator'
import { UsersListEmpty } from '../../components/users-list-empty'
import { useFetchUsers } from '../../hooks/useFetchUsers'
import { Actions, Container, Table } from './styles'

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
        <input onChange={e => setSearch(e.target.value)} placeholder='Filtre por nome, email ou usuário' type="text" />
      </header>
      {filteredUsers.length < 1 && !loading
        ? <UsersListEmpty />
        : (
            <>
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
                  {loading
                    ? <UsersActivityIndicator />
                    : filteredUsers.map(user => (
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
                <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
                  Página anterior
                </Button>
                <Button onClick={handleNextPage}>
                  Próxima página
                </Button>
              </Actions>
            </>
          )}
    </Container>
  )
}
