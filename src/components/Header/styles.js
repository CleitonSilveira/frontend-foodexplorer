import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.dark_700};
  padding: 5.6rem 2.8rem 2.4rem;

  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .hide {
    display: none;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 800px) {
    padding: 2.4rem 12.3rem;

    .mobile {
      display: none;
    }

    .desktop {
      display: inline;
    }

    #header {
      gap: 3.2rem;
    }

    .search {
      width: 100%;
    }

    .button {
      min-width: 16rem;
      max-width: 21.6rem;
    }
  }
`

export const Logo = styled(Link)`
  background: none;

  color: ${({ theme }) => theme.colors.light_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-family: 'Roboto';

  min-width: 18rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.cake_200};
    grid-area: admin;
  }

  &:hover {
    filter: none;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-areas:
    "svg name"
    ". admin";
    position: relative;
    
    span {
      position: absolute;
      right: 0;
      top: -1rem;
    }
  }
`

export const Clickable = styled.div`
  > svg {
    color: ${({ theme }) => theme.colors.light_100};
    font-size: 3.2rem;
    position: relative;
  }

  > span {
    position: absolute;
    
    color: ${({ theme }) => theme.colors.light_100};

    background-color: ${({ theme }) => theme.colors.tomato_100};
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 50%;
    padding: 1.2rem;

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 49px;
    right: 19px;
  }

  &:hover {
    filter: none;
    cursor: pointer;
  }
`

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  background: ${({ theme }) => theme.colors.dark_400};
  top: 0;
  right: 0;

  .menu {
    padding: 0 2.8rem;

    .top {
      display: flex;
      gap: 1.6rem;
      
      padding: 5.6rem 0 2.4rem;

      > h3 {
        font-family: 'Roboto', serif;
        font-size: 2.1rem;
        font-weight: 400;
      }

      > svg {
        cursor: pointer;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.light_100};
      }
    }

    > ul {
      list-style: none;
    }

    li {
      padding: 1rem;
    }

    a {
      font-size: 2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.light_300};
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
