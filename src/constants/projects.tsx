const projects = [
  {
    id: 'institutional_website',
    type: 'Trabalho Integral',
    title: 'Website Institucional',
    link: 'https://www.bancobari.com.br/',
    resume:
      'Principal portal de contato do Banco Bari. Propósito é gerar leds para empréstimos e a conta digital, e claro, apresentar um pouco mais sobre o banco.',
    text: 'Principal portal de contato do Banco Bari. Propósito é gerar leds para empréstimos e a conta digital, e claro, apresentar um pouco mais sobre o banco.',
    images: [
      'assets/projects/website/home.png',
      'assets/projects/website/loan.png',
      'assets/projects/website/faq.png',
    ],
    techs: [
      'Next.js',
      'React',
      'Styled Components',
      'Context API',
      'Storybook',
      'TypeScript',
      'Strapi CMS',
    ],
    lesson:
      'O principal desafio era desenvolver o website institucional mais ranqueado com base na avaliação do Google (SEO, performace, etc). Iniciamos o projeto com o miniset que precisariamos desbravar o mundo de um novo framework (O Next.js) para entregarmos o melhor. Tivemos vários desafios relacionados ao build de produção, ambiente, desconhecimento do framework, etc. Porém, após 5 meses, dentro do prazo, entregamos o website institucional mais bem ranqueado analisando os principais bancos digitais do país.',
  },
  {
    id: 'partners_portal',
    type: 'Trabalho Integral',
    title: 'Portal de Parceiros',
    link: 'https://portal.parceirosbari.com.br/',
    resume:
      'Aplicação para os parceiros do Banco Bari gerirem sua carteira de empréstimos.',
    text: 'Produto utilizado por todos os parceiros do Banco Bari para captação de clientes, simulação de empréstimos/financiamentos, cadastro de proponentes, assinatura digital, envio de documentos, envio de propostas, acompanhamento de crédito, etc. Plataforma completa',
    images: [
      'assets/projects/portal_partners/list_proposal.png',
      'assets/projects/portal_partners/proposal.png',
      'assets/projects/portal_partners/proponent.png',
    ],
    techs: [
      'Next.js',
      'React',
      'Styled Components',
      'Context API',
      'Storybook',
      'TypeScript',
      'RESTFul',
    ],
    lesson:
      'O principal desafio é ter um portal onde o parceiro tenha facilidade de gerir seus contratos, uma experiência atraente, onde seja fácil e intuitivo para o mesmo utilizar. Com utilização de timelines, abas e botões kebab, o parceiro gerencia quase toda sua proposta em uma só tela, ganhando assim agilidade para captação de mais clientes.',
  },
  {
    id: 'partners_lp',
    type: 'Trabalho Integral',
    title: "LP's Banco Bari",
    link: 'https://www.bancobari.com.br/',
    resume:
      "Projeto de LP's Banco Bari, este projeto provem todas as LP's utilizadas no mesmo.",
    text: "Projeto de LP's Banco Bari, este projeto provem todas as LP's utilizadas no mesmo.",
    images: [
      'assets/projects/lp_partners/newsletter.png',
      'assets/projects/lp_partners/by_partner.png',
      'assets/projects/lp_partners/sign.png',
    ],
    techs: [
      'React',
      'Styled Components',
      'Context API',
      'Storybook',
      'TypeScript',
    ],
    lesson:
      "O principal desafio era agrupar todas as LP's geradas pelo banco em N projetos, N tecnologias e formas. Foi criado um repositório de componentes (Reactbook) centralizando todos e gerando um padrão de utilização para todo o banco.",
  },
];

export default projects;
