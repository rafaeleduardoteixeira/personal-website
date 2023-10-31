import Link from 'next/link';

//  Svgs
import { Instagram } from '@/svgs/Instagram';
import { Linkedin } from '@/svgs/Linkedin';
import { Facebook } from '@/svgs/Facebook';
import { Github } from '@/svgs/Github';
import { Whatsapp } from '@/svgs/Whatsapp';
import Resume from '@/svgs/Resume';

//  Interface
import { IContact } from '@/interface/contact.interface';

//  Styles
import { ContactWrapper, Icons } from './styles';

function Contact({ $withPaddingTop, $hasHr }: IContact): JSX.Element {
  return (
    <ContactWrapper $withPaddingTop={$withPaddingTop}>
      <Icons>
        <Link href="/resume" className="Resume">
          <Resume />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rafael-eduardo-teixeira/"
          className="Linkedin"
          target="_blank"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5541988292230"
          className="Whatsapp"
          target="_blank"
        >
          <Whatsapp />
        </Link>
        <Link
          href="https://www.instagram.com/imrafaelteixeira/"
          className="Instagram"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          href="https://www.facebook.com/rafael.edu.teixeira"
          className="Facebook"
          target="_blank"
        >
          <Facebook />
        </Link>
        <Link
          href="https://github.com/rafaeleduardoteixeira"
          className="Github"
          target="_blank"
        >
          <Github />
        </Link>
      </Icons>
      {$hasHr && <hr />}
    </ContactWrapper>
  );
}

export default Contact;
