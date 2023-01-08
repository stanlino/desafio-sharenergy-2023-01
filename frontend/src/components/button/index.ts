import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Button = styled.button`
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: none;

  background-color: ${({ disabled = false }) => disabled ? 'grey' : css`var(--primary-color)`};

  padding: 8px 16px;

  color: white;
  font-weight: 700;
  font-size: 16px;

  cursor: ${({ disabled = false }) => disabled ? 'auto' : 'pointer'};

  &:hover {
    background-color: ${({ disabled = false }) => disabled ? 'grey' : darken(0.1, '#1BA2A1')};
  }
`
