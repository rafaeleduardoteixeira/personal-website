import Link from 'next/link';

//  Styles
import { HeaderWrapper } from './styles';

// Components
import Contact from '@/components/Contact/Contact';
import Logo from '../Logo/Logo';

function Header(): JSX.Element {
  return (
    <>
      <HeaderWrapper>
        <Logo />
        <Contact withPaddingTop={true} hasHr={true} />
      </HeaderWrapper>
    </>
  );
}

export default Header;
