import styled from 'styled-components';

export const Container = styled.button`

  background: ${({ theme }) => theme.colors.tomato_100};
  border: none;
  border-radius: .5rem;
  padding: 1.2rem 2.6rem;

  font-size: clamp(.8rem, 1.2rem, 1.6rem);
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
`