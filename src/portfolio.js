const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'AK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Andreas Karlsson',
  role: 'full stack developer',
  description:
    "A creative glorified amateur cyclist who's either in front the computer, by a racing track, or in front of a Youtube marathon with my little family.",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/andreas-karlsson-48902249/',
    github: 'https://github.com/andreas-ka',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Leeds United quiz',
    description:
      'My portfolio 2 project from Code Institute. A interactive quiz made with JavaScript, let users play and see correct and incorrect answers, time limit on each question.',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/andreas-ka/leeds-quiz',
    livePreview: 'https://andreas-ka.github.io/leeds-quiz/',
  },
  {
    name: 'Show you keyboard',
    description:
      "Portfolio project 4 i've done at Code Institute. This project was made with Python and is a social meeting site for those who have or getting into the hobby of custom mechanical keyboards. Comment, like and share your keyboards. Full CRUD operations.",
    stack: ['Python', 'Javascript', 'HTML', 'CSS', 'Django-frameworks'],
    sourceCode: 'https://github.com/andreas-ka/show-your-keyboard',
    livePreview: 'https://show-your-keyboard.herokuapp.com/',
  },
  {
    name: 'Explore STHLM',
    description:
      "Last project that i have done. A fully operational website with it's own backend. Frontend with CRUD functionality made with React, backend API is Django framworks. The website is aimed towards people living or visiting Stockholm. Share and find events to attend.",
    stack: ['HTML', 'CSS', 'Javascript', 'React', 'Django-Frameworks API'],
    sourceCode: 'https://github.com/andreas-ka/explore-sthlm-react-frontend',
    livePreview:
      'https://explore-sthlm-react-frontend-8d2a7c7c328e.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'MySQL',
  'Django',
  'React',
  'Redux',
  'Material UI',
  'Bootstrap',
  'Git',
  'Docker',
  'Heroku',
]

const experience = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Leeds quiz',
    description: 'Description....',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/andreas-ka/leeds-quiz',
    livePreview: 'https://andreas-ka.github.io/leeds-quiz/',
  },
  {
    name: 'Show you keyboard',
    description: 'Description....',
    stack: ['Python', 'Javascript', 'HTML', 'CSS', 'Django-frameworks'],
    sourceCode: 'https://github.com/andreas-ka/show-your-keyboard',
    livePreview: 'https://show-your-keyboard.herokuapp.com/',
  },
  {
    name: 'Explore STHLM',
    description: 'Description',
    stack: ['HTML', 'CSS', 'Javascript', 'React', 'Django-Frameworks API'],
    sourceCode: 'https://github.com/andreas-ka/explore-sthlm-react-frontend',
    livePreview:
      'https://explore-sthlm-react-frontend-8d2a7c7c328e.herokuapp.com/',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hello@andreas-k.com',
}

export { header, about, projects, skills, experience, contact }
