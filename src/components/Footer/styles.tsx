import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

export const FooterWrapper = styled.div`
  background: #f1f1f1;
  width: 100%;
  padding: 15vh 15vw 15vh 15vw;

  ${media.mobile} {
    padding: 15vh 5vw 15vh 5vw;
  }
`;

export const TextWrapper = styled.div`
  h2 {
    font-weight: 300;
  }

  p {
    padding: 5vh 0 5vh 0;
    width: 35vw;
    font-size: 14px;
    line-height: 2.25rem;
  }

  a {
    font-weight: 600;
  }

  ${media.mobile} {
    h2 {
      width: 80vw;
    }

    > p {
      padding: 5vh 0 8vh 0;
      font-size: 16px;
      width: 90vw;
      line-height: 2.25rem;
    }
  }
`;

export const BottonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  padding-top: 10vh;
`;
