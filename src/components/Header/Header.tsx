import Link from 'next/link';

//Svgs
import { Instagram } from '@/svgs/Instagram';
import { Linkedin } from '@/svgs/Linkedin';
import { Github } from '@/svgs/Github';
import { Facebook } from '@/svgs/Facebook';

//Styles
import { HeaderWrapper, ContactWrapper, Icons } from './style';

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Link href="/">
          <a>
            rafael
            <span>e</span>
            teixeira
          </a>
        </Link>
      </HeaderWrapper>
      <ContactWrapper>
        <Icons>
          <a
            className="Linkedin"
            href="https://www.linkedin.com/in/rafael-eduardo-teixeira/"
          >
            <Linkedin />
          </a>
          <a
            className="Instagram"
            href="https://www.instagram.com/imrafaelteixeira/"
          >
            <Instagram />
          </a>
          <a
            className="Facebook"
            href="https://www.facebook.com/rafael.edu.teixeira"
          >
            <Facebook />
          </a>
          <a className="Github" href="https://github.com/rafaeleduardoteixeira">
            <Github />
          </a>
        </Icons>
        <hr />
      </ContactWrapper>
    </>
  );
}

export default Header;
