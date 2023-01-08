import styled, { keyframes } from 'styled-components'

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #ccc;

    height: 50px;

    padding: 8px 0;

    .skeleton {
      animation: ${skeletonLoading} 0.5s linear infinite alternate;
    }

    .name {
      width: 100px;
      height: 20px;

      background-color: grey;
      border-radius: 8px;
    }

    .options {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }

    .option {
      width: 45px;
      height: 35px;

      background-color: grey;
      border-radius: 8px;
    }
  }
`
