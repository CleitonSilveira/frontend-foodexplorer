import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  background: ${({ theme }) => theme.colors.dark_1000};
  padding: .4rem .8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .8rem;

  color: ${({ theme }) => theme.colors.light_100};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
`