import Link from 'next/link';

//  Styles
import LogoWrapper from './styles';

function Logo(): JSX.Element {
  return (
    <LogoWrapper>
      <Link href="/">
        <a>
          rafael
          <span>e</span>
          teixeira
        </a>
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
