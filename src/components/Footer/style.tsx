import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background: #f1f1f1;
  width: 100%;
  padding: 15vh 15vw 15vh 15vw;
`;

export const TextWrapper = styled.div`
  h2 {
    font-weight: 300;
  }

  p {
    padding: 5vh 0 5vh 0;
    width: 35vw;
    font-size: 14px;
    line-height: 2.25rem;
  }

  a {
    font-weight: 600;
  }
`;

export const BottonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  padding-top: 10vh;
`;

export const LogoWrapper = styled.div`
  > a {
    font-weight: 900;
  }
  > a span {
    font-weight: 300;
  }
`;

export const ContactWrapper = styled.div`
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
