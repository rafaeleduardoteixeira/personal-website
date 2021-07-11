import Link from 'next/link';

//  Svgs
import { Instagram } from '@/svgs/Instagram';
import { Linkedin } from '@/svgs/Linkedin';
import { Github } from '@/svgs/Github';
import { Facebook } from '@/svgs/Facebook';

//  Styles
import {
  FooterWrapper,
  TextWrapper,
  BottonWrapper,
  LogoWrapper,
  ContactWrapper,
  Icons,
} from './style';

function Header(): JSX.Element {
  return (
    <FooterWrapper>
      <TextWrapper>
        <h2>Have an Idea? Let's Build it.</h2>
        <p>
          Feel free to reach out if you’re in need of a Developer. Whether that
          means you need a website, web app, or you’re looking to fill a
          full-time position. I’m always open to a conversation.
        </p>
        <a href="mailto:rafaeleduardoteioxeira@gmail.com">
          rafaeleduardoteixeira@gmail.com
        </a>
      </TextWrapper>
      <BottonWrapper>
        <LogoWrapper>
          <Link href="/">
            <a>
              rafael
              <span>e</span>
              teixeira
            </a>
          </Link>
        </LogoWrapper>
        <ContactWrapper>
          <Icons>
            <Link href="https://www.linkedin.com/in/rafael-eduardo-teixeira/">
              <a className="Linkedin">
                <Linkedin />
              </a>
            </Link>
            <Link href="https://www.instagram.com/imrafaelteixeira/">
              <a className="Instagram">
                <Instagram />
              </a>
            </Link>
            <Link href="https://www.facebook.com/rafael.edu.teixeira">
              <a className="Facebook">
                <Facebook />
              </a>
            </Link>
            <Link href="https://github.com/rafaeleduardoteixeira">
              <a className="Github">
                <Github />
              </a>
            </Link>
          </Icons>
        </ContactWrapper>
      </BottonWrapper>
    </FooterWrapper>
  );
}

export default Header;
