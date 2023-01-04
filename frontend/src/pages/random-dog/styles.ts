import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;

    width: min(400px, 100%);
    padding: 16px;

    gap: 0.5rem;

    min-height: 300px;

    img {
      width: 100%;
      border-radius: 8px;
      flex: 1;

      object-fit: cover;

      min-height: 300px;
      max-height: 500px;
    }
  }
`

export const Button = styled.button`
  height: 32px;

  border-radius: 8px;
  border: none;

  background-color: ${({ disabled = false }) => disabled ? 'grey' : css`var(--primary-color)`};

  padding: 0 8px;

  color: white;

  cursor: pointer;

  &:hover {
    background-color: ${({ disabled = false }) => disabled ? 'grey' : darken(0.1, '#1BA2A1')};
  }
`
