import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex: 1;
  
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;

    width: min(400px, 100%);
    padding: 16px;

    gap: 1rem;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }
`

export const Form = styled.form`

  display: flex;

  gap: .5rem;

  input {
    display: flex;
    flex: 1;

    height: 40px;
    border-radius: 8px;

    outline-color: var(--primary-color);

    border: 1px solid #ccc;

    padding: 0 8px;
  }
`
