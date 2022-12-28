// Styles
import { MyResumes, ResumeIframe } from '@/styles/pages/resumes';

function Resume(): JSX.Element {
  const getResponsiveZoom = (): string => {
    if (window && window.matchMedia('(max-width: 1024)').matches) return '80';
    if (window && window.matchMedia('(max-width: 800)').matches) return '60';
    if (window && window.matchMedia('(max-width: 576)').matches) return '50';
    if (window && window.matchMedia('(max-width: 365)').matches) return '40';
    return '';
  };

  return (
    <MyResumes>
      <h2>Português | Portuguese</h2>
      <ResumeIframe
        src={`assets/resumes/portuguese.pdf#zoom=${getResponsiveZoom}`}
      />
      <h2>Inglês | English</h2>
      <ResumeIframe
        src={`assets/resumes/english.pdf#zoom=${getResponsiveZoom}`}
      />
    </MyResumes>
  );
}

export default Resume;
