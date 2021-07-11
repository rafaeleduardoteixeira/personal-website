import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

export const Wrapper = styled.div`
  margin: 15vh 15vw 15vw 15vw;
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    margin: 10vh 5vw 5vw 5vw;
  }
`;

export const MyProjects = styled.div`
  padding-top: 15vh;
  width: 30vw;

  > p {
    padding-top: 6vh;
    font-size: 14px;
    line-height: 2.25rem;
  }

  ${media.mobile} {
    width: 90vw;
    text-align: start;

    > p {
      font-size: 16px;
      line-height: 2.25rem;
    }
  }
`;
