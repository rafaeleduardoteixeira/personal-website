import Link from 'next/link';

//  Svgs
import { Instagram } from '@/svgs/Instagram';
import { Linkedin } from '@/svgs/Linkedin';
import { Github } from '@/svgs/Github';
import { Facebook } from '@/svgs/Facebook';

//  Styles
import { HeaderWrapper, ContactWrapper, Icons } from './style';

function Header(): JSX.Element {
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
    </>
  );
}

export default Header;
