import Link from 'next/link';

//  Styles
import LogoWrapper from './styles';

function Logo(): JSX.Element {
  return (
    <LogoWrapper>
      <Link href="/">
        rafael
        <span>e</span>
        teixeira
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
