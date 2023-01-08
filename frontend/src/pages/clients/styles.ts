import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
`

interface MainProps {
  sidebarOpened: boolean
}

export const Main = styled.main<MainProps>`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 720px) {
    display: ${({ sidebarOpened = true }) => sidebarOpened ? 'none' : 'flex'};
  }

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding: 16px;

    button {
      padding: 0 8px;
      border-radius: 8px;
      border: none;

      cursor: pointer;
      background-color: var(--primary-color);
      color: white;

      font-weight: 700;

      &:hover {
        background-color: ${darken(0.1, '#1BA2A1')};
      }
    }
  }
`

export const Clients = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 16px;

  .client {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #ccc;

    padding: 8px 0;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 12px;
    border-radius: 8px;
    border: none;

    cursor: pointer;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);

    font-weight: 700;
    font-size: 16px;

    transition: all .4s;

    &:hover {
      background-color: ${darken(0.1, '#1BA2A1')};
      color: white;
    }
  }

  .delete {
    border: 1px solid red;
    color: red;
     
    span {
      font-size: 14px;
      margin-left: 5px;
    }

    &:hover {
      background-color: ${darken(0.1, 'red')};
      color: white;
    }
  }
`
