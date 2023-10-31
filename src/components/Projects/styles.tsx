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

  ${media.tablet} {
    width: 50vw;
    text-align: start;

    > p {
      font-size: 16px;
      line-height: 2.25rem;
      width: 80vw;
    }

    h2 {
      font-size: 1.8em;
      font-weight: 400;
      line-height: 40px;
    }
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
  width: 100%;

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
    width: 30vw;
    min-height: 8vh;
  }

  ${media.tablet} {
    p {
      margin-top: 1vh;
      width: 40vw;
    }
  }

  ${media.mobile} {
    margin-top: 5vh;
    p {
      width: 90vw;
    }
  }
`;

export const ImgContent = styled.div`
  width: 100%;
  padding-bottom: 5vh;
  .Image {
    border-radius: 10px;
  }
  ${media.tablet} {
    width: 40vw;
  }
  ${media.mobile} {
    width: 90vw;
  }
`;

export const ButtonProject = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;

  margin-top: 3vh;
  padding: 5px 15px 5px 15px;
  height: 4vh;
  background: #f1f1f1;
  border: 0px;
  font-size: 0.8em;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 2px;

  svg {
    margin-left: 15px;
  }

  &:hover {
    background: #e2e2e2ed;
    transition: 300ms;
  }
`;
