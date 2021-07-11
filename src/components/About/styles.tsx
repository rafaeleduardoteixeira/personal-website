import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

export const AboutWrapper = styled.div`
  padding-top: 10vh;

  display: flex;
  justify-content: space-between;

  ${media.mobile} {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 5vh;
  }
`;

export const ImgContent = styled.div`
  width: 30vw;
  height: 100%;

  .ProfileImage {
    border-radius: 10px;
  }

  ${media.mobile} {
    width: 90vw;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  > h1 {
    text-align: end;
    > span {
      font-weight: 900;
    }
  }
  > h2 {
    font-size: 2.4em;
    font-weight: 300;
  }

  ${media.mobile} {
    padding-top: 10vh;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 0.8em;

    > h1 {
      text-align: start;
      font-size: 1.8em;
      font-weight: 300;
      line-height: 40px;
    }
    > h2 {
      font-size: 1.8em;
      font-weight: 300;
      line-height: 40px;
    }
  }
`;

export const Text = styled.div`
  align-self: flex-end;

  padding-top: 6vh;
  text-align: end;
  width: 35vw;

  p:first-child {
    margin-bottom: 3vh;
  }
  > p {
    font-size: 14px;
    line-height: 2.25rem;
  }

  ${media.mobile} {
    text-align: start;
    width: 84vw;

    > p {
      font-size: 16px;
      line-height: 2.25rem;
    }
  }
`;
