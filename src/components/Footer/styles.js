import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 1.5rem;

  background-color: ${({ theme }) => theme.colors.dark_600};

  position: absolute;
  bottom: 0;

  > div {
    display: flex;
    gap: .4rem;
    align-items: center;
  }
  
  .logo {
    > svg {
      width: 2rem;
      height: 2rem;
    }

    p {
      color: ${({ theme }) => theme.colors.light_700};
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  .reserved {
    p {
      color: ${({ theme }) => theme.colors.light_200};
      font-size: 1.2rem;
    }
  }

  @media (min-width: 800px) {
    padding: 2.4rem 12.3rem;

    > div {
      gap: 1rem;
    }

    .logo {
      p {
        font-size: 2.4rem;
      }

      > svg {
        width: 3rem;
        height: 3rem;
      }
    }

    .reserved {
      p {
        font-size: 1.4rem;
      }
    }
  }
`