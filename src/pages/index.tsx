//  Components
import SEO from '@/components/SEO/SEO';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';

function Home(): JSX.Element {
  return (
    <>
      <SEO
        title="Rafael E. Teixeira | Software Engineer"
        description="My personal website. I created it to share my personal skills and project. I'm Software Engineer, Entrepreneur, Husband and Dad, with 14+ experience."
      />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
