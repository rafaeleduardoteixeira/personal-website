import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

export const ProjectWrapper = styled.div`
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 600;
  }

  .Barricade {
    padding: 10vh 10vh 10vh 10vh !important;
  }

  ${media.mobile} {
    h2 {
      text-align: center;
    }
  }
`;
