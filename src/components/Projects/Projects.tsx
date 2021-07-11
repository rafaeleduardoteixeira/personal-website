import NextImage from 'next/image';

//  Constants
import { projects } from '@/constants/projects';

//  Styles
import {
  MyProjects,
  ProjectsWrapper,
  ProjectWrapper,
  ImgContent,
} from './styles';

function Projects(): JSX.Element {
  return (
    <>
      <MyProjects>
        <h2>Recent Projects</h2>
        <p>
          I'm pleasure to share some projects that I've working recently. Where
          I could learned new skills, enjoying time with my coworkers and a lot
          of code.
        </p>
      </MyProjects>

      <ProjectsWrapper>
        {projects.map((project, idx) => {
          return (
            <ProjectWrapper key={idx}>
              <ImgContent>
                <NextImage
                  src={`/${project.images[0]}`}
                  className="Image"
                  alt={project.title}
                  width={1000}
                  height={470}
                />
              </ImgContent>
              <h3>{project.title}</h3>
              <p>{project.resume}</p>
            </ProjectWrapper>
          );
        })}
      </ProjectsWrapper>
    </>
  );
}

export default Projects;
