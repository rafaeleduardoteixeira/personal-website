import { useRouter } from 'next/router';
import NextImage from 'next/image';

//  Svgs
import { ArrowRight } from '@/svgs/ArrowRight';

//  Constants
import projects from '@/constants/projects';

//  Styles
import {
  MyProjects,
  ProjectsWrapper,
  ProjectWrapper,
  ImgContent,
  ButtonProject,
} from './styles';

function Projects(): JSX.Element {
  const router = useRouter();

  const goToProject = projectid => {
    router.push(`/projects/${projectid}`, null, { shallow: true });
  };

  return (
    <>
      <MyProjects>
        <h2>Projetos recentes</h2>
        <p>
          Eu tenho orgunho de compartilhar alguns projetos que estou trabalhando
          recentemente. Onde eu pude aprender algumas habilidades, curtir tempo
          com meu time e claro, muito código.
        </p>
      </MyProjects>

      <ProjectsWrapper>
        {projects.map(project => (
          <ProjectWrapper key={project.id}>
            <ImgContent>
              <NextImage
                src={`/${project.images[0]}`}
                className="Image"
                alt={project.title}
                width={500}
                height={300}
              />
            </ImgContent>
            <h3>{project.title}</h3>
            <p>{project.resume}</p>
            <ButtonProject onClick={() => goToProject(project.id)}>
              VER MAIS
              <ArrowRight />
            </ButtonProject>
          </ProjectWrapper>
        ))}
      </ProjectsWrapper>
    </>
  );
}

export default Projects;

/* <h2>Recent Projects</h2>
<p>
  I'm pleasure to share some projects that I've working recently. Where
  I could learned new skills, enjoying time with my coworkers and a lot
  of code.
</p> */
