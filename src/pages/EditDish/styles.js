import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  min-height: 100vh;

  position: relative;

  .page {
    padding: 1rem 3.2rem 10rem;

    display: grid;
    gap: 2.4rem;

    position: relative;

    > a {
      color: ${({ theme }) => theme.colors.light_300};
      font-weight: 500;

      display: flex;
      align-items: center;
      margin: 2rem 0 1.6rem;
    }

    h1 {
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme }) => theme.colors.light_300};
    }

    form {

      display: grid;
      gap: 2.4rem;

      .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        label, p {
          color: ${({ theme }) => theme.colors.light_400};
          font-family: 'Roboto', serif;
        }

        > input[type="file"] {
          display: none;
        }

        .inputImage {
          display: flex;
          align-items: center;
          gap: .8rem;
          background: ${({ theme }) => theme.colors.dark_800};
          padding: 1.2rem 3.2rem;
          border-radius: .8rem;

          color: ${({ theme }) => theme.colors.light_100};
          font-weight: 500;
          line-height: 2.4rem;
        }

        .select {
          background: ${({ theme }) => theme.colors.dark_900};
          border-radius: .5rem;
    
          width: 100%;
    
          padding: .6rem;

          display: flex;
          align-items: center;

          position: relative;

          select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            padding: 1rem;
            width: 100%;

            background: ${({ theme }) => theme.colors.dark_900};
            border: none;

            color: ${({ theme }) => theme.colors.light_400};
            font-family: 'Roboto', serif;
            font-size: 1.4rem;
            line-height: 160%;

            &:focus{
              outline: none;
            } 
          }

        .arrowDown {
          position: absolute;
          right: 1.6rem;
        }
       }

        .ingredients {
          background: ${({ theme }) => theme.colors.dark_800};
          border-radius: .5rem;

          padding: .8rem;
          display: flex;
          gap: 1.6rem;

    
          width: 100%;
          flex-wrap: wrap;
        }
      
        > textarea {
          background: ${({ theme }) => theme.colors.dark_800};
          padding: 1.4rem;

          border: none;
          border-radius: .8rem;

          resize: none;
          height: 17.2rem;

          &::placeholder {
            font-family: 'Roboto', serif;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.colors.light_500};
          }
        }
      }

      footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3.2rem;
        margin-bottom: 5rem;


        .delete {
          background: ${({ theme }) => theme.colors.dark_800};
        }
      }
    }
  }

    @media (min-width: 800px) {

      justify-content: center;
      width: 100%;

      .page {
        justify-content: center;
      }

      form {
        display: grid;
        width: 80vw;

        gap: 3.2rem;
        grid-template-columns: calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10) calc((100% - (9 * 3.2rem)) / 10);
        grid-template-rows: auto auto auto auto;
        
        .input-wrapper {
          .ingredients {
            padding: .4rem .8rem;
          }

          .select {
            padding:.3rem;
    
            background: ${({ theme }) => theme.colors.dark_800};
    
            select {
              background: ${({ theme }) => theme.colors.dark_800};
            }
          }
        }
      }

        .input-wrapper:nth-child(1) {
          grid-column: 1 / span 3;
          grid-row: 1;

          .inputImage {
          font-size: 1.4rem;
          }
        }

        .input-wrapper:nth-child(2) {
          grid-column: 4 / span 4;
          grid-row: 1;
        }

        .input-wrapper:nth-child(3) {
          grid-column: 8 / span 3;
          grid-row: 1;

          #select {
            background: ${({ theme }) => theme.colors.dark_800};
          }
          
          #category {
            padding: .7rem;
            background: ${({ theme }) => theme.colors.dark_800};
          }
        }

        .input-wrapper:nth-child(4) {
          grid-row: 2;
          grid-column: 1 / span 8;
        }

        .input-wrapper:nth-child(5) {
          grid-row: 2;
          grid-column: 9 / span 2;
        }

        .input-wrapper:nth-child(6) {
          grid-row: 3;
          grid-column: 1 / span 10;
        }

        footer {      
          grid-row: 4;
          grid-column: 5 / span 6;
        }
      }
`