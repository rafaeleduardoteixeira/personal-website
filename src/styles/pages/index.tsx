import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

export const Wrapper = styled.div`
  margin: 15vh 15vw 10vw 15vw;
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    margin: 10vh 5vw 15vw 5vw;
  }
`;
