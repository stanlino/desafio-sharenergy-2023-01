import { darken } from 'polished'
import styled from 'styled-components'

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

    height: 40px;

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
    flex: 1;

    .content {
      position: relative;
      width: 100%;
    }
  } 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 16px 0;
  }

  span {
    margin-bottom: 8px;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 100%;

    font-size: 12px;
    margin-bottom: 8px;
  }

  input {

    height: 40px;
    padding: 0 8px;

    border: 1px solid #ccc;
    border-radius: 8px;

    outline-color: var(--primary-color);
  }
`
