import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;

  max-width: 13rem;
  min-width: 8rem;

  background-color: ${({ theme, $isNew }) => $isNew ? "none" : theme.colors.light_600};

  color: ${({ theme, $isNew }) => $isNew ? theme.colors.light_500 : theme.colors.light_100 };

  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.colors.light_500}` : "none" };
  
  border-radius: .8rem;

  padding: .4rem .8rem;


  button {
    background: none;
    border: none;

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
  }

  .button-delete {
    color: ${({ theme }) => theme.colors.light_100};
  }

  .button-add {
    color: ${({ theme }) => theme.colors.light_500};
  }

  input {
    height: 3.2rem;
    width: 100%;

    background: none;
    border: none;

    color: ${({ theme }) => theme.colors.light_100};
    font-family: 'Roboto', serif;


    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`