import styled from 'styled-components';

export const Container = styled.div`

  background-color: ${({ theme }) => theme.colors.dark_900};
  border-radius: .5rem;

  padding: 1.2rem 1.4rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  width: 100%;

  > svg {
    color: ${({ theme }) => theme.colors.light_400};
  }

  > input {
   border: none;
   background-color: ${({ theme }) => theme.colors.dark_900};
   width: 100%;

    &::placeholder {
    font-family: 'Roboto', serif;
    color: ${({ theme }) => theme.colors.light_500};
    text-align: center;
    }
  }
`