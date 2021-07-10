import styled from 'styled-components';

export const AboutWrapper = styled.div`
  padding-top: 10vh;

  display: flex;
  justify-content: space-between;
`;

export const ImgProfile = styled.div`
  width: 30vw;
  height: 100%;

  .ProfileImage {
    border-radius: 10px;
  }
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  > h1 {
    text-align: end;
    > span {
      font-weight: 900;
    }

    > h2 {
      font-size: 0.5em;
      font-weight: 300;
    }
  }
`;

export const RightText = styled.div`
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
`;
