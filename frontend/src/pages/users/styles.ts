import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 16px;

  header {
    padding: 8px 0;
    display: flex;
    flex-direction: row;

    gap: 0.5rem;

    input {
      flex: 1;
      height: 40px;
      border-radius: 8px;

      border: 1px solid #ccc;

      padding: 0 8px;

      background-color: transparent;

      outline-color: var(--primary-color);
    }
  }
`

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  flex: 1;

  tr {
    display: grid;
    grid-template-columns: 3fr 4fr 3fr 1fr;

    border-bottom: 1px solid #ccc;

    height: 70px;
  }

  td {
    img {
      width: 50px;
      aspect-ratio: 1;
      border-radius: 50%;

      margin-right: 8px;
    }
  }

  td, th {
    overflow: hidden;

    min-width: 50px;

    padding: 0 8px;
    display: flex;
    align-items: center;

    :last-child {
      border-right: none;
    }

    :first-child {
      padding: 0;
    }

    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 720px) {

    tr {
      display: grid;
      grid-template-columns: 1fr;
    }

    th {
      justify-content: center;
    }

    th, td {
      :nth-child(n+2) {
        display: none;
      }
    }
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px;

  gap: 1rem;
`

export const Action = styled.button`
  height: 40px;
  padding: 0 8px;
  border-radius: 8px;
  border: none;

  cursor: pointer;
  background-color: ${({ disabled = false }) => disabled ? 'grey' : css`var(--primary-color)`};
  color: white;

  font-weight: 700;

  &:hover {
    background-color: ${({ disabled = false }) => disabled ? 'grey' : darken(0.1, '#1BA2A1')};
  }
`
