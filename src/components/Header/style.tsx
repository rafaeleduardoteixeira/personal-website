import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

export const HeaderWrapper = styled.div`
  > a {
    font-weight: 900;
  }
  > a span {
    font-weight: 300;
  }
`;

export const ContactWrapper = styled.div`
  padding-top: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  hr {
    height: 0.05rem;
    background: #d4d4d4;
    border: none;
    max-width: 20rem;
    margin-right: 0;
    width: 100%;
  }

  ${media.mobile} {
    padding-top: 10vh;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a + a {
    margin-left: 2vw;
  }

  .Linkedin {
    > svg:hover > path {
      fill: #0a66c2;
      transition: 300ms;
    }
  }
  .Instagram {
    > svg:hover > path {
      fill: #c13584;
      transition: 300ms;
    }
  }
  .Facebook {
    > svg:hover > path {
      fill: #2e89ff;
      transition: 300ms;
    }
  }
  .Github {
    > svg:hover > path {
      fill: #101010;
      transition: 300ms;
    }
  }
`;
