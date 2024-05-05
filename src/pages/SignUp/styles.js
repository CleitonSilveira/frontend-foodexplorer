import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 4.7rem 0 6.5rem;

  .top {
    display: flex;
    align-items: center;
    gap: 1.1rem;

    margin-bottom: 7.3rem;

    > img {
      width: 43.3px;
      height: 43.3px;
    }

    > h1 {
      font-family: 'Roboto', serif;
      font-size: clamp(2rem, 3.2rem, 3.7rem);
      font-weight: 700;
    }
  }

  form {
    width: 100%;

    > h2 {
      display: none;
    }

    p {
      color: ${({ theme }) => theme.colors.tomato_300};
      font-size: 1.2rem;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 3.2rem;
  }

  a {
    display: flex;
    color: ${({ theme }) => theme.colors.light_100};

    font-weight: 500;
    font-size: 1.4rem;

    justify-content: center;
    margin-top: 3.2rem;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-areas:
    "top form";
    grid-template-columns: 2fr 1fr .2fr;

    .top {
      margin-left: 25%;
    }

    form {
      background: ${({ theme }) => theme.colors.dark_700};
      padding: 6.4rem;
      border-radius: 1.6rem;

      min-width: 32.5rem;

      > h2 {
        display: flex;
        justify-content: center;
        margin-bottom: 3.2rem;

        font-size: 3.2rem;
        font-weight: 500;
      }
    }
  }

`