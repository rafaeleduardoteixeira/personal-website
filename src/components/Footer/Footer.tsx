// Components
import Contact from '@/components/Contact/Contact';
import Logo from '../Logo/Logo';

//  Styles
import { FooterWrapper, TextWrapper, BottonWrapper } from './styles';

function Header(): JSX.Element {
  return (
    <FooterWrapper>
      <TextWrapper>
        <h2>Tem uma idéia? Vamos construir.</h2>
        <p>
          Fique à vontade para me enviar uma mensagem caso precise de um
          engenheiro para o seu projeto. Seja ele um website, um webapp ou até
          mesmo preencher uma vaga. Estou sempre aberto para diálogo.
        </p>
        <a href="mailto:rafaeleduardoteioxeira@gmail.com">
          rafaeleduardoteixeira@gmail.com
        </a>
      </TextWrapper>
      <BottonWrapper>
        <Logo />
        <Contact />
      </BottonWrapper>
    </FooterWrapper>
  );
}

export default Header;
/*
<h2>Have an Idea? Let's Build it.</h2>
<p>
  Feel free to reach out if you’re in need of a Developer. Whether that
  means you need a website, web app, or you’re looking to fill a
  full-time position. I’m always open to a conversation.
</p>
<a href="mailto:rafaeleduardoteioxeira@gmail.com">
  rafaeleduardoteixeira@gmail.com
</a> */
