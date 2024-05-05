import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 16.2rem; 

  flex-shrink: 0;

  border-radius: .8rem;
  border: 1px solid ${({ theme }) => theme.colors.dark_300};
  background-color: ${({ theme }) => theme.colors.dark_200};

  position: relative;

  > img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 1.6rem;
    font-weight: 500;

    cursor: pointer;

    text-align: center;
  }

  > span {
    color: ${({ theme }) => theme.colors.cake_200};
    font-family: 'Roboto', serif;
    text-align: center;
  }

 .bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > section {
    display: flex;
    gap: 1.4rem;
    padding: .4rem 0;
    margin-bottom: 1.6rem;

    > button {
      background: none;
      border: none;
      transition: filter .3s;

      &:hover {
        filter: brightness(.8);
      }

      > svg {
        color: ${({ theme }) => theme.colors.light_100};
      }
    }

    > span {
      font-family: 'Roboto', serif;
      color: ${({ theme }) => theme.colors.light_300};
    }
  }
 }

  .iconTop {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    cursor: pointer;
    transition: filter .3s;
    color: white;

    &:hover {
      filter: brightness(.8);
    }
  }

  .desktop {
    display: none;
  }

  @media (min-width: 856px) {
    gap: 1.5rem;
    width: 30rem;

    .desktop {
      display: inline;
      text-align: center;
    }

    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    > h1 {
      font-size: 2.4rem;
      font-weight: 700;
    }

    .bottom {
      flex-direction: row;
      justify-content: space-between;

      > section {
        margin-bottom: 0;

        > p {
          font-size: 2rem;
          line-height: 160%;
          font-weight: 700;
        }
      }

      button {
        max-width: 13rem;
      }
    }

    > span {
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 160%;
    }
  }

  transition: all .3s ease;

  &:hover {
    transform: scale(1.05);
  }
`