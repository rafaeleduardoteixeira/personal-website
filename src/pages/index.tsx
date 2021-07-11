//  Components
import SEO from '@/components/SEO/SEO';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';

//  Styles
import { MyProjects } from '@/styles/pages/index';

function Home(): JSX.Element {
  return (
    <>
      <SEO
        title="Rafael E. Teixeira | Software Engineer"
        description="My personal website. I created it to share my personal skills and project. I'm Software Engineer, Entrepreneur, Husband and Dad, with 14+ experience."
      />
      <About />
      <Skills />
      <MyProjects>
        <h2>Recent Projects</h2>
        <p>
          I'm pleasure to share some projects that I've working recently. Where
          I could learned new skills, enjoying time with my coworkers and a lot
          of code.
        </p>
      </MyProjects>
    </>
  );
}

export default Home;
