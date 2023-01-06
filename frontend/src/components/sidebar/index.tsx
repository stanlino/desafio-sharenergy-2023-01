import { FaCat, FaDog, FaUsers } from 'react-icons/fa'
import { BsBoxArrowLeft } from 'react-icons/bs'

import { A, Container, Content, Footer, Nav } from './styles'
import { useLocation } from 'react-router-dom'

import { useUserStore } from '../../store/userStore'

export function Sidebar (): JSX.Element | null {
  const { pathname } = useLocation()
  const { signOut, username } = useUserStore(state => state)

  function isFocused (path: string): boolean {
    return pathname.includes(path)
  }

  function handleLogOut (): void {
    signOut()
  }

  if (pathname === '/') return null

  return (
    <Container>
      <Content>
        <header>
          <h2>Desafio</h2>
          <img className='large-logo' src="/shareenergylogo.png" alt="Share Energy Logo" />
          <img className='small-logo' src="/favicon.png" alt="Share Energy Logo" />
        </header>
        <Nav>
          <ul>
            <li>
              <A to='/users' focused={isFocused('/users')}>
                <FaUsers />
                <span>
                  Usuários
                </span>
              </A>
            </li>
            <li>
              <A to="/http-cat" focused={isFocused('/http-cat')}>
                <FaCat />
                <span>
                  HTTP Gatos
                </span>
              </A>
            </li>
            <li>
              <A to="/random-dog" focused={isFocused('/random-dog')}>
                <FaDog />
                <span>
                  Cães aleatórios
                </span>
              </A>
            </li>
            <li>
              <A to="/clients" focused={isFocused('/clients')}>
                <FaUsers />
                <span>
                  Clientes
                </span>
              </A>
            </li>
          </ul>
        </Nav>
        <Footer>
          <span>@{username}</span>
          <button onClick={handleLogOut}>
            <BsBoxArrowLeft />
            <span>
              Sair
            </span>
          </button>
        </Footer>
      </Content>
    </Container>
  )
}
