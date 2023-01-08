import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;

  user-select: none;

  main {
    display: flex;
    flex: 1;

    max-width: 1200px;
    margin: 0 auto;

    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;

    border: 1px solid #ccc;

    padding: 8px 16px;

    width: min(400px, 100%);
    border-radius: 8px;

    @media (max-width: 400px) {
      border: 0;
    }

    .input-text-label {
      background-color: #D9D9D9;
      margin: 4px 0;

      display: flex;
      align-items: center;

      width: 100%;
      gap: 0.5rem;

      height: 40px;
      border-radius: 8px;
      padding: 0 8px;

      svg {
        font-size: 25px;
        color: #797979;
      }

      input {
        border: 0;
        display: flex;
        flex: 1;

        outline: 0;
        background-color: transparent;

        font-size: 14px;
        line-height: 14px;

        ::placeholder {
          color: #797979;
        }
      }
    }

    .error {
      color: red;
      align-self: center;
      margin: 8px 0;
      font-weight: 600;
    }

    .input-checkbox-label {
      display: flex;
      flex-direction: row;

      cursor: pointer;

      margin: 8px 0;

      span {
        margin-left: 8px;
      }
    }
  }
`

export const FormHeader = styled.header`
  
  display: flex;
  flex-direction: column;

  align-items: center;

  margin: 2rem 0;

  h2 {
    color: var(--text-color)
  }
  
  img {
    width: 200px;
  }
`
