import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

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

    &:hover {
      background-color: ${darken(0.1, '#1BA2A1')};
      color: white;
    }
  }

  .delete {
    border: 1px solid red;
    color: red;

    &:hover {
      background-color: ${darken(0.1, 'red')};
      color: white;
    }
  }
`

interface SidebarProps {
  open: boolean
}

export const Sidebar = styled.aside<SidebarProps>`
  background-color: #f4f4f4;
  width: 300px;

  box-shadow: -1px -1px 3px rgba(0,0,0,.2);

  display: ${({ open }) => open ? 'flex' : 'none'};

  .content {
    position: fixed;

    right: 0;
    top: 0;

    width: 300px;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 16px;

    header {
      display: flex;
      flex-direction: row;

      justify-content: space-between;
    }

  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 12px;
    border-radius: 8px;
    border: none;

    cursor: pointer;
    background-color: var(--primary-color);
    color: white;

    font-weight: 700;
    font-size: 16px;

    &:hover {
      background-color: ${darken(0.1, '#1BA2A1')};
    }
  }

  @media (max-width: 900px) {
    position: absolute;
    width: 100%;
    height: 100vh;
  } 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  flex: 1;

  margin: 16px 0;

  span {
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 8px;

    height: 40px;
    padding: 0 8px;

    border: 1px solid #ccc;
    border-radius: 8px;

    outline-color: var(--primary-color);
  }
`
