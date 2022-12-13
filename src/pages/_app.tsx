import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { AppProps } from 'next/app';

//  Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

//  Styles
import { Wrapper } from '@/styles/pages/index';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  
  const postMessage = () => {
    window.parent.postMessage(
    {
      type: "button-click",
      message: "clicked"
    },
    "*"
  );
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper onClick={() => postMessage()}>
        <Header />
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
