import { useEffect } from 'react';

// Styles
import { MyResumes, Pdf } from '@/styles/pages/resumes';

function Resume(): JSX.Element {
  const numPages = 2;

  function handlePages(pdf, page, language, currentPage) {
    const canvas = document.createElement('canvas');
    const viewport = page.getViewport({
      scale: 1,
      rotate: 180,
      dontFlip: false,
    });
    const context = canvas.getContext('2d');
    const width = viewport.viewBox[2];
    const height = viewport.viewBox[3];
    viewport.width = width;
    viewport.height = height;
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    page.render({ canvasContext: context, viewport });

    document.getElementById(language).appendChild(canvas);

    const currPage = currentPage + 1;
    if (pdf !== null && currPage <= numPages) {
      pdf
        .getPage(currPage)
        .then(newPage => handlePages(pdf, newPage, language, currPage));
    }
  }

  const getPdf = async (language: string) => {
    let pdf = null;
    const pdfJS = await import('pdfjs-dist/build/pdf');
    pdfJS.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.min.js`;
    pdf = await pdfJS.getDocument(`assets/resumes/${language}.pdf`).promise;
    pdf.getPage(1).then(page => handlePages(pdf, page, language, 1));
  };

  useEffect(() => {
    async function render() {
      await getPdf('portuguese');
      await getPdf('english');
    }
    render();
  }, []);

  return (
    <MyResumes>
      <h2>Português | Portuguese</h2>
      <Pdf id="portuguese" />
      <h2>Inglês | English</h2>
      <Pdf id="english" />
    </MyResumes>
  );
}

export default Resume;
