import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { AppProps } from 'next/app';
import Header from '@/components/Header/Header';

//Styles
import { Wrapper } from '@/styles/pages/index';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}
