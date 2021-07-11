import styled, { css } from 'styled-components';
import { media } from '@/styles/GlobalStyle';

//  Interfaces
import { IProject } from '@/interface/projects.interface';

export const ProjectWrapper = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    padding-bottom: 5vh;
  }

  p {
    font-size: 15px;
    line-height: 2.25rem;
  }

  a {
    cursor: pointer;
    text-decoration: underline;
  }

  ${media.mobile} {
    h2 {
      text-align: center;
    }
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  padding-top: 5vh;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 10vw;

  ${media.tablet} {
    width: 100%;
    display: flex;

    > div {
      padding-left: 15vw;
    }
  }

  ${media.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;

    > div {
      padding-left: 30vw;
    }
  }
`;

export const RightContent = styled.div`
  flex: 1;
  ${media.mobile} {
    padding-top: 10vh;
  }
`;

export const TextBold = styled.p<IProject>`
  font-weight: 600;

  ${({ withPaddingTop }) =>
    withPaddingTop &&
    css`
      padding-top: 3vh;
    `}

  ${media.tablet} {
    padding-top: 0vh;
  }

  ${media.mobile} {
    padding-top: 10vh;
  }
`;

export const ImgContent = styled.div`
  display: flex;
  padding-top: 10vh;

  .SecondImageContent {
    padding-left: 2vw !important;
  }

  ${media.tablet} {
    flex-direction: column;
    .SecondImageContent {
      padding-top: 8vh !important;
      padding-left: 0vw !important;
    }
  }

  ${media.mobile} {
    padding-top: 10vh;

    .SecondImageContent {
      padding-top: 10vh !important;
      padding-left: 0vw !important;
    }
  }
`;

export const Lesson = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 10vh;

  > p {
    width: 60vw;
    padding-top: 3vh;
    font-size: 14px;
    line-height: 2.25rem;
    text-align: center;
  }

  ${media.mobile} {
    padding-top: 15vh;

    > p {
      width: 90vw;
      padding-top: 10vh;
    }
  }
`;
