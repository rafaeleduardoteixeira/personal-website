import Link from 'next/link';

//  Svgs
import { Instagram } from '@/svgs/Instagram';
import { Linkedin } from '@/svgs/Linkedin';
import { Facebook } from '@/svgs/Facebook';
import { Github } from '@/svgs/Github';
import { Whatsapp } from '@/svgs/Whatsapp';

//  Interface
import { IContact } from '@/interface/contact.interface';

//  Styles
import { ContactWrapper, Icons } from './styles';

function Contact({ withPaddingTop, hasHr }: IContact): JSX.Element {
  return (
    <ContactWrapper withPaddingTop={withPaddingTop}>
      <Icons>
        <Link href="https://www.linkedin.com/in/rafael-eduardo-teixeira/">
          <a className="Linkedin" target="_blank">
            <Linkedin />
          </a>
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=5541988292230">
          <a className="Whatsapp" target="_blank">
            <Whatsapp />
          </a>
        </Link>
        <Link href="https://www.instagram.com/imrafaelteixeira/">
          <a className="Instagram" target="_blank">
            <Instagram />
          </a>
        </Link>
        <Link href="https://www.facebook.com/rafael.edu.teixeira">
          <a className="Facebook" target="_blank">
            <Facebook />
          </a>
        </Link>
        <Link href="https://github.com/rafaeleduardoteixeira">
          <a className="Github" target="_blank">
            <Github />
          </a>
        </Link>
      </Icons>
      {hasHr && <hr />}
    </ContactWrapper>
  );
}

export default Contact;
