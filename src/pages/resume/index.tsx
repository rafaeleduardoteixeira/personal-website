// Styles
import { MyResumes, ResumeIframe } from '@/styles/pages/resumes';
import { useEffect, useState } from 'react';

function Resume(): JSX.Element {
  const [zoom, setZoom] = useState<string>('');

  const getResponsiveZoom = (): string => {
    if (window.matchMedia('(max-width: 1024)').matches) return '80';
    if (window.matchMedia('(max-width: 800)').matches) return '60';
    if (window.matchMedia('(max-width: 576)').matches) return '40';
    if (window.matchMedia('(max-width: 365)').matches) return '30';
    return '';
  };

  useEffect(() => {
    setZoom(getResponsiveZoom());
  }, []);

  return (
    <MyResumes>
      <h2>Português | Portuguese</h2>
      <ResumeIframe
        src={`assets/resumes/portuguese.pdf#zoom=${zoom}&toolbar=1&navpanes=1`}
      />
      <h2>Inglês | English</h2>
      <ResumeIframe
        src={`assets/resumes/english.pdf#zoom=${zoom}&toolbar=1&navpanes=1`}
      />
    </MyResumes>
  );
}

export default Resume;
