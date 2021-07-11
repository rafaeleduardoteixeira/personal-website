//  Constants
import { skills } from '@/constants/skills';

//  Styles
import {
  SkillsWrapper,
  TextContent,
  Text,
  SkillsContent,
  Skill,
} from './styles';

function Skills(): JSX.Element {
  return (
    <SkillsWrapper>
      <TextContent>
        <div>
          <h2>
            Skills
            <br />
          </h2>
        </div>
        <Text>
          <p>
            From the beginning days of when I first got into software
            development up until now, I’ve learned and gained a solid
            understanding of web development standards, the importance of
            reusability/scalability in large enterprise applications, and how
            user expereince means everything.
          </p>
        </Text>
      </TextContent>
      <TextContent>
        <SkillsContent>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </SkillsContent>
      </TextContent>
    </SkillsWrapper>
  );
}

export default Skills;
