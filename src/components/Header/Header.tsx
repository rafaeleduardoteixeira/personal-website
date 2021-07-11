// Components
import Contact from '@/components/Contact/Contact';
import Logo from '../Logo/Logo';

//  Styles
import HeaderWrapper from './styles';

function Header(): JSX.Element {
  return (
    <>
      <HeaderWrapper>
        <Logo />
        <Contact withPaddingTop hasHr />
      </HeaderWrapper>
    </>
  );
}

export default Header;
