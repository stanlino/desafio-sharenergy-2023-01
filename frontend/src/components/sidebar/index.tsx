import { FaHome, FaCat, FaDog, FaUsers } from 'react-icons/fa'
import { BsBoxArrowLeft } from 'react-icons/bs'

import { Container, Footer, Nav } from './styles'

export function Sidebar (): JSX.Element {
  return (
    <Container>
      <header>
        <h2>Desafio</h2>
        <img className='large-logo' src="/shareenergylogo.png" alt="Share Energy Logo" />
        <img className='small-logo' src="/favicon.png" alt="Share Energy Logo" />
      </header>
      <Nav>
        <ul>
          <li>
            <a href="/home">
              <FaHome />
              <span>
                Início
              </span>
            </a>
          </li>
          <li>
            <a href="/http-cat">
              <FaCat />
              <span>
                HTTP Cat
              </span>
            </a>
          </li>
          <li>
            <a href="/random-dog">
              <FaDog />
              <span>
                Random Dog
              </span>
            </a>
          </li>
          <li>
            <a href="/users">
              <FaUsers />
              <span>
                Users
              </span>
            </a>
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
    </Container>
  )
}
