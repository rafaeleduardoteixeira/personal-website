import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  padding-top: 15vh;
  display: flex;
  justify-content: space-between;
`;

export const TextContent = styled.div`
  width: 30vw;
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
`;

export const Skills = styled.div`
  width: 30vw;
  margin-left: 0;
  text-align: right;
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
