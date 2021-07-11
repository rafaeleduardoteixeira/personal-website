//  Constants
import { skills } from '@/constants/skills';

//  Styles
import { SkillsWrapper, TextContent, Text, Skills, Skill } from './styles';

function Header(): JSX.Element {
  return (
    <SkillsWrapper>
      <TextContent>
        <h2>
          Skills
          <br />
        </h2>
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
        <Skills>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </Skills>
      </TextContent>
    </SkillsWrapper>
  );
}

export default Header;
