import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

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

    h2 {
      font-size: 1.8em;
      font-weight: 400;
      line-height: 40px;
    }
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: -5vh;
  div:nth-of-type(2) {
    margin-left: 10vh;
  }

  ${media.mobile} {
    margin-top: 0vh;
    div:nth-of-type(2) {
      margin-left: 0vh;
    }
  }
`;

export const ProjectWrapper = styled.div`
  margin-top: 10vh;
  h2 {
    margin-top: 5vh;
  }

  p {
    margin-top: 1vh;
  }

  ${media.mobile} {
    margin-top: 5vh;
  }
`;

export const ImgContent = styled.div`
  width: 32vw;
  padding-bottom: 5vh;
  .Image {
    border-radius: 10px;
  }
  ${media.mobile} {
    width: 90vw;
  }
`;
