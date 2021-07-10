import NextImage from 'next/image';
import Profile from '../../../public/assets/profile.jpg';

//Styles
import {
  AboutWrapper,
  ImgProfile,
  LeftContent,
  RightContent,
  RightText,
} from './styles';

function Header() {
  return (
    <AboutWrapper>
      <LeftContent>
        <ImgProfile>
          <NextImage
            src={Profile}
            alt="Profile image"
            className="ProfileImage"
            layout="responsive"
          />
        </ImgProfile>
      </LeftContent>
      <RightContent>
        <h1>
          <h2>
            Hi, I'm Rafael. <br />
          </h2>
          <span>Software Engineer,</span> <br />
          <h2>Entrepreneur, Husband and Dad</h2>
        </h1>
        <RightText>
          <p>
            I love Jesus, my wife, my son, coffee, fitness, career and my life.
          </p>
          <p>
            I'm Software Engineer, I've degree in "Systems for Internet", I've
            worked with IT 15+, since 2006 when I'd started my university. I’ve
            having the pleasure of working alongside some incredible engineers,
            designers, business analysts, and product owners. I discovered
            passionate about code standards, ECMAScript and reactive Javascript
            frameworks (Definitely React is more easily).
          </p>
        </RightText>
      </RightContent>
    </AboutWrapper>
  );
}

export default Header;
