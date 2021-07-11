import NextImage from 'next/image';

//  Imgs
import Profile from '../../../public/assets/profile.jpg';

//  Styles
import { AboutWrapper, ImgContent, TextContent, Text } from './styles';

function About(): JSX.Element {
  return (
    <AboutWrapper>
      <ImgContent>
        <NextImage
          src={Profile}
          alt="Profile image"
          className="ProfileImage"
          layout="responsive"
        />
      </ImgContent>
      <TextContent>
        <h1>
          Olá, eu sou Rafael. <br />
          <span>Engenheiro de software,</span> <br />
        </h1>
        <h2>Empreendedor, Esposo and Pai</h2>
        <Text>
          <p>
            Eu amo Jesus, minha esposa, meu filho, café, fisiculturismo, minha
            carreira e claro, minha vida.
          </p>
          <p>
            Sou Engenheiro de Software, formado em Sistemas para Internet,
            trabalho a mais de 15 anos com TI, desde 2006 quando entrei na minha
            primeira faculdade. Tenho muito orgulho de ter trabalhado ao lado de
            engenheiro incríveis, designers, analistas de negócio e PO. Na
            caminhada eu descobri uma paixão por padrões de código, ECMAScript e
            frameworks Javascript reativos (Definitivamente, React é mais
            fácil).
          </p>
        </Text>
      </TextContent>
    </AboutWrapper>
  );
}

export default About;

/* 
<h1>
Hi, I'm Rafael. <br />
<span>Software Engineer,</span> <br />
</h1>
<h2>Entrepreneur, Husband and Dad</h2>
<Text>
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
</p> */
