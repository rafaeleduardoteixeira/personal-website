import Link from 'next/link';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

//  Components
import SEO from '@/components/SEO/SEO';

//  Constants
import projects from '@/constants/projects';

//  Styles
import {
  ProjectWrapper,
  ProjectContent,
  LeftContent,
  RightContent,
  TextBold,
  ImgContent,
  Lesson,
} from '@/styles/pages/project';

function Project(): JSX.Element {
  const { query } = useRouter();
  const projectFiltered = projects.find(project => {
    if (project.id === query.projectid) {
      return project;
    }
    return '';
  });

  return (
    <>
      <SEO
        title="Rafael E. Teixeira | Software Engineer"
        description="My personal website. I created it to share my personal skills and project. I'm Software Engineer, Entrepreneur, Husband and Dad, with 14+ experience."
      />
      {projectFiltered && (
        <ProjectWrapper>
          <h2>{projectFiltered.title}</h2>
          <p>{projectFiltered.text}</p>
          <ProjectContent>
            <LeftContent>
              <div>
                <TextBold>Tipo</TextBold>
                <p>{projectFiltered.type}</p>
              </div>

              <div>
                <TextBold withPaddingTop>Tecnologias</TextBold>
                {projectFiltered.techs.map(tech => (
                  <p>{tech}</p>
                ))}
              </div>

              <div>
                <TextBold withPaddingTop>Ver mais</TextBold>
                <Link href={projectFiltered.link} target="_blank">
                  Link
                </Link>
              </div>
            </LeftContent>
            <RightContent>
              <NextImage
                src={`/${projectFiltered.images[0]}`}
                className="Image"
                alt={projectFiltered.title}
                width={1000}
                height={470}
              />
            </RightContent>
          </ProjectContent>

          <ImgContent>
            <NextImage
              src={`/${projectFiltered.images[1]}`}
              className="FirstImageContent"
              alt={projectFiltered.title}
              width={600}
              height={330}
            />
            <NextImage
              src={`/${projectFiltered.images[2]}`}
              className="SecondImageContent"
              alt={projectFiltered.title}
              width={600}
              height={330}
            />
          </ImgContent>
          <Lesson>
            <h3>Problemas e lições aprendidas</h3>
            <p>{projectFiltered.lesson}</p>
          </Lesson>
        </ProjectWrapper>
      )}
    </>
  );
}

export default Project;
