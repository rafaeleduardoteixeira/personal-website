import styled from 'styled-components';
import { media } from '@/styles/GlobalStyle';

export const SkillsWrapper = styled.div`
  padding-top: 15vh;
  display: flex;
  justify-content: space-between;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  width: 30vw;

  ${media.mobile} {
    h2 {
      font-size: 1.8em;
      font-weight: 400;
      line-height: 40px;
    }
  }
`;

export const Text = styled.div`
  padding-top: 6vh;
  width: 30vw;

  p:first-child {
    margin-bottom: 3vh;
  }
  > p {
    font-size: 14px;
    line-height: 2.25rem;
  }

  ${media.tablet} {
    width: 40vw;

    > p {
      font-size: 16px;
      line-height: 2.25rem;
    }
  }

  ${media.mobile} {
    width: 90vw;

    > p {
      font-size: 16px;
      line-height: 2.25rem;
    }
  }
`;

export const SkillsContent = styled.div`
  width: 30vw;
  margin-left: 0;
  text-align: right;

  ${media.tablet} {
    width: 30vw;
    text-align: start;

    > p {
      font-size: 16px;
      line-height: 2.25rem;
    }
  }

  ${media.mobile} {
    width: 90vw;
    text-align: start;

    > p {
      font-size: 16px;
      line-height: 2.25rem;
    }
  }
`;

export const Skill = styled.span`
  display: inline-block;
  background: #f1f1f1;
  padding: 8px;
  border-radius: 8px;
  margin-top: 1vh;
  font-weight: 400;

  & + span {
    margin-left: 0.7vw;
  }

  &:hover {
    background: #e2e2e2ed;
  }
`;
