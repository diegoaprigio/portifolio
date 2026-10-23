export const site = {
  name: 'Diego Aprigio',
  role: 'Senior Software Engineer',
  email: 'aprigio17cg@gmail.com',
  location: 'Florianópolis, Brazil',
  url: 'https://diegoaprigio-dev.vercel.app',
  linkedin: 'https://www.linkedin.com/in/devdiegoaprigio/',
  github: 'https://github.com/diegoaprigio',
  description:
    'Diego Aprigio is a senior software engineer in Florianópolis. Backend and cloud-native systems with Node.js, NestJS, TypeScript, and AWS.',
}

export const education = [
  {
    title: 'Bachelor of Technology, Computer Science',
    school: 'UNIFENAS — Universidade Prof. Edson Antônio Velano',
    period: '2013 — 2016',
  },
  {
    title: 'Postgraduate degree, Technologies for Web Development',
    school: 'Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais',
    period: '2017 — 2019',
  },
  {
    title: 'MBA, Big Data and Competitive Intelligence',
    school: 'Descomplica Faculdade Digital',
    period: '2023',
  },
  {
    title: 'MBA, Strategic Project Management and Agile Methodologies',
    school: 'Descomplica Faculdade Digital',
    period: '2022',
  },
]

export const quotes = [
  {
    text: 'I have worked with Diego for two years and, after gaining more experience and working with a lot of different people across the years, I can confidently say that he is truly an exceptional professional and coworker. He is a very skilled software engineer and a true hard worker, always able to solve the problems and overcome the obstacles that came across the team, and also a very calm and patient person, making it a pleasure to work with him.',
    name: 'Marina Refatti Guaragna',
  },
  {
    text: 'Diego is a responsible, diligent, and proactive developer. He is always available to share his insights and resolve any problems to improve the game. He is a professional that I highly recommend.',
    name: 'Rosselynn Gattites',
  },
]

export const skills = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'React',
  'Next.js',
  'C#',
  '.NET',
  'PostgreSQL',
  'Prisma',
  'SQL Server',
  'AWS',
  'Amazon ECS',
  'AWS Lambda',
  'Amazon S3',
  'DynamoDB',
  'Azure',
  'Terraform',
  'Docker',
  'REST APIs',
  'Generative AI',
  'Git',
  'CloudWatch',
  'API Gateway',
  'DB2',
  'Figma',
  'Scrum',
  'Kanban',
]

export type Role = {
  company: string
  logo: string
  place: string
  period: string
  title: string
  summary: string
  points: string[]
  stack: string[]
}

export const roles: Role[] = [
  {
    company: 'TaxRobot',
    logo: '/images/logos/taxrobot-icon.jpg',
    place: 'Remote · Houston, United States',
    period: 'Jan 2026 — Present',
    title: 'Senior Software Engineer',
    summary:
      'Backend, infrastructure, and database lead for a U.S. R&D tax credit platform.',
    points: [
      'Moved users from a slow, barely functional no-code tool to a fast product with AI in the workflow, after planning and delivering the NestJS rebuild. The MVP reached users in eight months.',
      'Wrote the scaling plan the company adopted for the whole environment: AWS ECS clusters, so the service can grow and shrink with load.',
      'Learned U.S. official documents and R&D tax credit rules on the job and encoded that knowledge in the new platform during a short migration window.',
      'Own backend, infrastructure, and database decisions, and propose the changes for each version from the Figma designs.',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'AWS ECS', 'Docker', 'Terraform'],
  },
  {
    company: 'CI&T',
    logo: '/images/logos/ciandt.svg',
    place: 'Remote · Campinas, Brazil',
    period: 'Sep 2024 — Jan 2026',
    title: 'Senior Software Engineer',
    summary:
      'IoT platform for connected beverage dispensers across Europe and the United States.',
    points: [
      'Raised performance and efficiency by about 90% against the first version of the web app, so the new version could carry a three-month global drink-sharing campaign. No production bugs were reported.',
      'Unblocked the team during a staffing gap by taking the Next.js frontend, following the Figma designs, and shipping it outside my usual backend scope.',
      'Migrated the team applications from AWS to Azure under a new client policy. Dispensers were already running in production on Azure, with no bugs reported from the move.',
      'Led development and maintenance of an application that uses generative AI to take repetitive work out of a business process.',
      'Managed cloud infrastructure, including Amazon ECS and Lambda, and kept a path for unit tests and same-day hotfixes.',
    ],
    stack: ['NestJS', 'Next.js', 'AWS', 'Azure', 'Terraform', 'Lambda'],
  },
  {
    company: 'INO Games',
    logo: '/images/logos/ino.png',
    place: 'Hybrid · Florianópolis, Brazil',
    period: 'Jul 2022 — Aug 2024',
    title: 'Senior Software Engineer',
    summary:
      'First backend engineer at a slot studio shipping games to a global audience.',
    points: [
      'Launched more than eight casino games in C# whose math matches the models written with mathematicians in the United States and Hungary.',
      'Closed a compliance gap with PlayCheck, a round-history service that reads a play from the server and renders it with C#, Handlebars, HTML, and CSS.',
      'Set the backend up from scratch: .NET standards, a clearer internal game framework, PostgreSQL, and Docker, which made the next game faster to build.',
    ],
    stack: ['C#', '.NET', 'PostgreSQL', 'Docker', 'Handlebars'],
  },
  {
    company: 'Almaden',
    logo: '/images/logos/almaden-mark.png',
    place: 'Remote · São Paulo, Brazil',
    period: 'Aug 2022 — Mar 2024',
    title: 'Technical Lead',
    summary:
      'Technical lead on SaaS IT asset management and digital experience products used across thousands of devices in Latin America.',
    points: [
      'Raised device visibility and management by more than 90% with a SaaS view, so a customer could see the fleet and decide where to act.',
      'Improved device performance and user experience by about 80%, turning the same data into fewer hours of downtime.',
      'Led developers, split the work, and kept a biweekly release with the CTO and the engineering manager.',
    ],
    stack: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'DB2'],
  },
  {
    company: 'Almaden',
    logo: '/images/logos/almaden-mark.png',
    place: 'Remote · São Paulo, Brazil',
    period: 'May 2021 — Jul 2022',
    title: 'Software Engineer',
    summary: 'Feature development and maintenance of an IT asset management product.',
    points: [
      'Built and maintained backend APIs in Node.js and TypeScript.',
      'Shipped features from Figma and integrations against SQL and DB2.',
    ],
    stack: ['Node.js', 'TypeScript', 'SQL', 'DB2', 'React'],
  },
  {
    company: 'GA Agrosoluções',
    logo: '/images/logos/ga.png',
    place: 'On-site · Alfenas, Brazil',
    period: 'Aug 2012 — Mar 2019',
    title: 'Software Engineer',
    summary:
      'Owner of the human resources module in an agricultural ERP used by farms in Brazil.',
    points: [
      'Linked employees, products, finance, and crop cost in one application, which raised how much of the farm a producer could actually see and run.',
      'Migrated legacy systems from VB6 to .NET and led the payroll migration, improving reliability and the accuracy of the numbers.',
      'Built payroll from employee records through exports, including integrations with the Brazilian Federal Revenue and Ministry of Finance platforms.',
    ],
    stack: ['C#', 'VB.NET', 'SQL Server', '.NET'],
  },
]

export type ProjectImage = { src: string; alt: string; fit?: 'contain' }
export type ProjectLink = { label: string; href: string; image: string }

export type Project = {
  index: string
  logo: string
  kicker: string
  title: string
  summary: string
  points: string[]
  stack: string[]
  href?: string
  hrefLabel?: string
  images?: ProjectImage[]
  links?: ProjectLink[]
  linksLabel?: string
}

export const projects: Project[] = [
  {
    index: '01',
    logo: '/images/logos/taxrobot-icon.jpg',
    kicker: 'TaxRobot · 2026 — Present',
    title: 'R&D tax credit platform',
    summary:
      'TaxRobot helps businesses and tax professionals in the United States calculate the R&D tax credit. I lead the backend, the PostgreSQL database through Prisma ORM, and the AWS infrastructure.',
    points: [
      'Replaced a slow no-code tool with a NestJS product. The MVP was in use within eight months, with AI assisting the study workflow.',
      'The company adopted an ECS scaling plan so the API is not stuck on a single box.',
      'PostgreSQL holds the study data, and Prisma ORM is the layer the API uses to read and write it.',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'AWS ECS', 'Docker'],
    href: 'https://taxrobot.com/',
    hrefLabel: 'Visit TaxRobot',
    images: [
      {
        src: '/images/taxrobot.png',
        alt: 'TaxRobot sign-in and an R&D study screen with credit progress, active projects, and document requests.',
        fit: 'contain',
      },
    ],
  },
  {
    index: '02',
    logo: '/images/logos/ciandt.svg',
    kicker: 'CI&T · 2024 — 2026',
    title: 'Connected beverage dispensers',
    summary:
      'Connected dispensers across Europe and the United States. People compose a drink on the phone, share it with someone by name, and pick it up at the machine. I worked on the platform behind that flow.',
    points: [
      'The campaign web app was about 90% more efficient than the first version and ran for three months with no production bugs reported.',
      'I took the Next.js frontend during a staffing gap and shipped it from the Figma designs.',
      'The same services moved from AWS to Azure while the dispensers stayed in production.',
    ],
    stack: ['NestJS', 'Next.js', 'AWS', 'Azure', 'Terraform'],
    images: [
      {
        src: '/images/dispenser-1.png',
        alt: 'Phone showing a create-and-share screen beside a dispenser dial marked 100+ choices.',
      },
      {
        src: '/images/dispenser-2.png',
        alt: 'Hand holding a phone in front of a dispenser that is getting ready to share a personalized drink.',
      },
      {
        src: '/images/dispenser-3.png',
        alt: 'Person holding a phone while the dispenser screen creates a named drink.',
      },
      {
        src: '/images/dispenser-4.png',
        alt: 'Person photographing a dispenser screen that displays a guest name during drink creation.',
      },
    ],
  },
  {
    index: '03',
    logo: '/images/logos/ino.png',
    kicker: 'INO Games · 2022 — 2024',
    title: 'Slot games and PlayCheck',
    summary:
      'I joined as the first backend engineer, set the .NET standards, and shipped server-side math for a global slot studio. PlayCheck renders a stored round so an operator can see the game, not only a database row.',
    points: [
      'More than eight games launched with math aligned to models from the United States and Hungary.',
      'PlayCheck reads the round from the server and draws it with C#, Handlebars, HTML, and CSS.',
      'PostgreSQL, Docker, and a shared game framework made the next title faster to build.',
    ],
    stack: ['C#', '.NET', 'PostgreSQL', 'Docker', 'Handlebars'],
    images: [
      {
        src: '/images/ino-session.jpg',
        alt: 'Diego Aprigio reviewing a slot game on a laptop.',
      },
    ],
    linksLabel: 'Titles I contributed to',
    links: [
      {
        label: 'Leprechaun Strike',
        href: 'https://slotslaunch.com/ino-games/leprechaun-strike',
        image: '/images/games/leprechaun-strike.jpg',
      },
      {
        label: 'Napoleon: Conquest and Glory',
        href: 'https://slotslaunch.com/ino-games/napoleon-conquest-and-glory',
        image: '/images/games/napoleon-conquest-and-glory.jpg',
      },
      {
        label: 'Fox Fortunata: Multiplier Hunt',
        href: 'https://www.vegasslotsonline.com/ino-games/fox-fortunata-multiplier-hunt/',
        image: '/images/games/fox-fortunata-multiplier-hunt.jpg',
      },
      {
        label: 'Payout Time',
        href: 'https://www.vegasslotsonline.com/ino-games/payout-time/',
        image: '/images/games/payout-time.jpg',
      },
      {
        label: 'Fruit Blender Mania',
        href: 'https://www.vegasslotsonline.com/ino-games/fruit-blender-mania/',
        image: '/images/games/fruit-blender-mania.jpg',
      },
      {
        label: 'Bling Bling Penguin',
        href: 'https://slotslaunch.com/ino-games/bling-bling-penguin',
        image: '/images/games/bling-bling-penguin.jpg',
      },
      {
        label: 'Freya: Valhalla Queen',
        href: 'https://slotslaunch.com/ino-games/freya-valhalla-queen',
        image: '/images/games/freya-valhalla-queen.jpg',
      },
      {
        label: 'Bling Bling Penguin: Ice on the Beach',
        href: 'https://slotslaunch.com/ino-games/bling-bling-penguin-ice-on-the-beach',
        image: '/images/games/bling-bling-penguin-ice-on-the-beach.jpg',
      },
      {
        label: 'Mega Mustang',
        href: 'https://slotslaunch.com/ino-games/mega-mustang',
        image: '/images/games/mega-mustang.jpg',
      },
      {
        label: 'Monsterville Secrets',
        href: 'https://slotslaunch.com/ino-games/monsterville-secrets',
        image: '/images/games/monsterville-secrets.jpg',
      },
      {
        label: 'Electric Joker',
        href: 'https://slotslaunch.com/ino-games/electric-joker',
        image: '/images/games/electric-joker.jpg',
      },
    ],
  },
  {
    index: '04',
    logo: '/images/logos/almaden-mark.png',
    kicker: 'Almaden · 2021 — 2024',
    title: 'Collective IQ ITAM',
    summary:
      'Collective IQ ITAM is a live inventory of hardware and software: lifecycle, contracts, location, and how the machines are actually used. I joined as an API engineer and later led the team.',
    points: [
      'Customers could see the fleet in one place and choose where to act. Device visibility and management rose by more than 90%.',
      'Performance signals and the operator experience improved by about 80%, which cut downtime.',
      'Releases shipped every two weeks, scoped with the CTO and the engineering manager.',
    ],
    stack: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'DB2'],
    href: 'https://almaden.ai/br/collective-iq-itam/',
    hrefLabel: 'View Collective IQ ITAM',
    images: [
      {
        src: '/images/itam.png',
        alt: 'Laptop showing an IT asset dashboard with fleet totals, memory bands, activation years, processors, and departments.',
        fit: 'contain',
      },
    ],
  },
  {
    index: '05',
    logo: '/images/logos/ga.png',
    kicker: 'GA Agrosoluções · 2012 — 2019',
    title: 'GA Master farm ERP',
    summary:
      'GA Master is the system a farm uses from purchasing and stock through finance, fleet, harvest, and people. I owned the human resources module for seven years.',
    points: [
      'Payroll ran from the employee record to the export, including the Brazilian Federal Revenue and Ministry of Finance.',
      'The HR module moved off VB6 onto .NET, with clearer data and fewer broken pay runs.',
      'Producers could follow people, inputs, cash, and crop cost in the same product.',
    ],
    stack: ['C#', '.NET', 'SQL Server', 'VB.NET'],
    href: 'https://gaagrosolucoes.com.br/solucao-gamaster/',
    hrefLabel: 'View GA Master',
    images: [
      {
        src: '/images/ga-master.png',
        alt: 'GA Agrosoluções desktop with finance, payroll, and farm modules in the menu, and the GA logo on the home screen.',
        fit: 'contain',
      },
    ],
  },
]
