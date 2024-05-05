import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  min-height: 100vh;

  position: relative;

  .page {
    padding-bottom: 15rem;

    .top {
    background: ${({ theme }) => theme.colors.gradient_200};
    height: 12rem;

    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    position: relative;

    display: flex;
    flex-direction: row-reverse;

    > img {
      position: absolute;
      left: -3rem;
      bottom: 0;
      width: clamp(4rem, 45%, 25rem);
      height: auto;

      animation: slideRight .7s ease-in;
    }

    .text {
      min-width: 20rem;
      color: ${({ theme }) => theme.colors.light_300};

      margin: 3.9rem 2.1rem 0 18.3rem;

      > h1 {
        font-size: 1.7rem;
        font-weight: 600;
        line-height: 140%;
      }

      > p {
        line-height: 140%;
        font-size: 1.2rem;
      }

      animation: slideRight .7s ease-in;
    }
    }

    .meal {
      margin-left: 2.4rem;
      
      > h2 {
        color: ${({ theme }) => theme.colors.light_300};
        font-weight: 500;
        font-size: 1.8rem;
        margin-bottom: 2.4rem;
      }

      .cards {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;

        position: relative;

        gap: 1.5rem;

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.colors.dark_400};
        }
        &::-webkit-scrollbar {
            height: 7px;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.dark_1000};
            border-radius: .8rem;
        }
      }

      .left {
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }

      .right {
        position: absolute;
        right: 0;
      }
    }

    .desktop {
      display: none;
    }
  }

  .noDishes {
    padding: 5rem 1rem 5rem;
    width: 100vw;
    font-size: 1.4rem;
    display: flex;
    gap: .9rem;
    align-items: center;
 }

  @media (max-width: 370px) {
    .top {
      position: relative;

      > img {
        display: none;
      }
    }

    .text {
      > p {
        text-align: center;
        margin-left: -10%;
      }
      
      >h1 {
        margin-left: -10%;
        text-align: center;
      }
    }
  }

  @media (min-width: 856px) {
    .page {
      padding: 0 12.4rem 15rem;
    
      .top {
        height: 26rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
  
        margin-top: 8rem;
  
  
        > img {
          width: clamp(30rem, 45%, 50rem);
        }
  
        .text {
          margin-left: 30rem;
          h1 {
            font-size: 4rem;
            font-weight: 500;
          }
  
          p {
            font-size: clamp(1.6rem, 60%, 16rem);
          }
        }
      }
  
      .meal {
        margin-top: 2rem;
       
        h2 {
          font-size: 3.2rem;
        }
        
        .cards {
          overflow: hidden;
          gap: 0;
          height: fit-content;

          margin-bottom: 4.6rem;
        }
      }

      .desktop {
        display: inline;
      }

      .noDishes {
        padding: 5rem 12rem 5rem;
        width: 100vw;

        display: flex;
        gap: .9rem;
        align-items: center;
        
        font-size: 1.6rem;
      }

      .mobile {
        display: none;
      }
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-140px);
    }
    100% {
      transform: translateX(0);
    }
  }

  `

export const Gradient = styled.div`
  background: ${({ theme }) => theme.colors.gradient_100};
  width: 20rem;
  height: 100%;

  position: absolute;
`
