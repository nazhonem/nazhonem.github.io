import { FaAtom, FaJava } from 'react-icons/fa';

// List of skills
export const allSkills = [
    {
      id: 1,
      name: 'React',
      projects: [1, 3],  // Referencing project IDs
      imageURL: <FaAtom />,
    },
    {
      id: 2,
      name: 'TypeScript',
      projects: [1, 2],
      imageURL: <FaAtom />,
    },
    {
      id: 3,
      name: 'Java',
      projects: [2, 3],
      imageURL: <FaJava />,
    },
  ];
  
  // List of projects
  export const projects = [
    {
      id: 1,
      name: 'The Wedding Seamstress',
      skills: [1, 2],  // Referencing skill IDs
      description: 'I led a full redesign of a Kajabi-based website, enhancing its user experience with a modern layout, optimized navigation, and a fresh visual style. The project included migrating content to a new platform, incorporating SEO best practices, and adding new features like a blog and podcast.',
      imageURL: '/TWS.png',
      srcLink: '',
      prjLink: 'https://theweddingseamstress.mykajabi.com/',
    },
    {
      id: 2,
      name: 'Project Beta',
      skills: [2, 3],
      description: 'An API built with TypeScript and Java.',
      imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
      srcLink: '',
      prjLink: '',
    },
    {
      id: 3,
      name: 'Project Gamma',
      skills: [1, 3],
      description: 'A full-stack application with React and Java backend.',
      imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
      srcLink: '',
      prjLink: '',
    },
  ];
  