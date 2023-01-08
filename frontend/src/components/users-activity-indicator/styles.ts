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
    display: grid;
    grid-template-columns: 3fr 4fr 3fr 1fr;

    align-items: center;

    border-bottom: 1px solid #ccc;

    height: 70px;

    padding: 8px 0;

    .skeleton {
      animation: ${skeletonLoading} 0.5s linear infinite alternate;
    }

    .item {
      width: 60%;
      height: 20px;

      background-color: grey;
      border-radius: 8px;
    }

    .user {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      align-items: center;
    }

    .avatar {
      height: 50px;
      width: 50px;
      border-radius: 25px;

      background-color: grey;
    }
  }
`
