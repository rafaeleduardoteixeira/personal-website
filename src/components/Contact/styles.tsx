import styled, { css } from 'styled-components';
import { media } from '@/styles/GlobalStyle';

//  Interface
import { IContact } from '@/interface/contact.interface';

export const ContactWrapper = styled.div<IContact>`
  ${({ withPaddingTop }) =>
    withPaddingTop &&
    css`
      padding-top: 10vh;
    `}

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  hr {
    height: 0.05rem;
    background: #d4d4d4;
    border: none;
    max-width: 20rem;
    margin-right: 0;
    margin-top: -10px;
    width: 100%;
  }

  ${media.mobile} {
    hr {
      width: 30vw;
    }
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
  .Whatsapp {
    > svg:hover > path {
      fill: #3cb362;
      transition: 300ms;
    }
  }
  .Resume {
    > svg:hover > g > path {
      fill: black;
      transition: 300ms;
    }
  }
`;
