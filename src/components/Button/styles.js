import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  background: ${({ theme }) => theme.colors.tomato_100};
  border: none;
  border-radius: .5rem;
  padding: 1.2rem 2.4rem;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
   background: ${({ theme }) => theme.colors.tomato_500};
   cursor: default;
  }

  &:not(:disabled):hover {
   background: ${({ theme }) => theme.colors.tomato_200};
  }
`