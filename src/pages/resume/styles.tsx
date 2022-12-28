import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

export const MyResumes = styled.div`
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

export const ResumeIframe = styled.iframe`
  padding: 20px 0 40px 0;
  width: 900px;
  height: 800px;

  ${media.tablet} {
    width: 700px;
    height: 700px;
  }

  ${media.smallTablet} {
    width: 600px;
    height: 700px;
  }

  ${media.mobile} {
    width: 430px;
    height: 700px;
  }

  ${media.smallMobile} {
    width: 400px;
    height: 700px;
  }
`;
