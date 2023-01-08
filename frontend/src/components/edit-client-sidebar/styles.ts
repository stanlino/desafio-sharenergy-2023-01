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

  flex: 1;

  margin: 16px 0;

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
