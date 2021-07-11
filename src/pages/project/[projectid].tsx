import NextImage from 'next/image';

//  Styles
import ProjectWrapper from './styles';

//  Imgs
import Barricade from '../../../public/assets/barricade.png';

function Project(): JSX.Element {
  return (
    <ProjectWrapper>
      <h2>UNDER CONSTRUCTION</h2>
      <NextImage src={Barricade} alt="Barricade image" className="Barricade" />
    </ProjectWrapper>
  );
}

export default Project;
