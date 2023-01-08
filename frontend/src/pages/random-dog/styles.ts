import styled from 'styled-components'

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
