import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 100%;

  background-color: #f4f4f4;

  box-shadow: 1px 1px 3px rgba(0,0,0,.2);

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 16px;

    h2 {
      font-size: 1.25rem;
    }

    .large-logo {
      width: 100%;
    }
    
    .small-logo {
      display: none;
    }
  }

  @media (max-width: 720px) {
    width: 50px;
    padding: 4px;

    header {
      align-items: center;
      margin: 8px 0;

      h2 {
        display: none;
      }

      .large-logo {
        display: none;
      }

      .small-logo {
        display: flex
      }
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  width: 100%;

  flex: 1;

  a {
    text-decoration: none;
    color: var(--text-color);
    
    display: flex;
    flex: 1;

    height: 40px;
    border-radius: 8px;

    padding: 0 8px;

    align-items: center;

    gap: 0.5rem;

    margin: 8px 0;

    transition: all .4s;

    &:hover {
      background-color: #C2C2C2;
    }
    
    @media (max-width: 720px) {
      justify-content: center;
    }
  }
  
  li {
    list-style: none;
  }

  @media (max-width: 720px) {
    span {
      display: none;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  
  gap: 0.5rem;

  button {
    height: 40px;

    background-color: var(--primary-color);
    outline: 0;
    border: 0;

    border-radius: 8px;

    color: white;

    font-size: 16px;
    font-weight: 700;

    display: flex;
    gap: 0.5rem;
    
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      background-color: ${darken(0.1, '#1BA2A1')};
    }
  }

  @media (max-width: 720px) {
    span {
      display: none;
    }
  }
`

export const Content = styled.div`
  position: fixed;

  left: 0;
  top: 0;

  width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 16px;

  @media (max-width: 720px) {
    width: 50px;
    padding: 4px;
  }
`
