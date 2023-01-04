import { FaCat, FaDog, FaUsers } from 'react-icons/fa'
import { BsBoxArrowLeft } from 'react-icons/bs'

import { Container, Content, Footer, Nav } from './styles'
import { Link } from 'react-router-dom'

export function Sidebar (): JSX.Element {
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
              <Link to='/users'>
                <FaUsers />
                <span>
                  Usuários
                </span>
              </Link>
            </li>
            <li>
              <Link to="/http-cat">
                <FaCat />
                <span>
                  HTTP Gatos
                </span>
              </Link>
            </li>
            <li>
              <Link to="/random-dog">
                <FaDog />
                <span>
                  Cães aleatórios
                </span>
              </Link>
            </li>
            <li>
              <Link to="/clients">
                <FaUsers />
                <span>
                  Clientes
                </span>
              </Link>
            </li>
          </ul>
        </Nav>
        <Footer>
          <span>@jonasRibeiro</span>
          <button>
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
