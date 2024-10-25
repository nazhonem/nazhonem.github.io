// List of skills
export const allSkills = [
    {
      id: 1,
      name: 'React',
      projects: [1, 3],  // Referencing project IDs
      imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    },
    {
      id: 2,
      name: 'TypeScript',
      projects: [1, 2],
      imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    },
    {
      id: 3,
      name: 'Java',
      projects: [2, 3],
      imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    },
  ];
  
  // List of projects
  export const projects = [
    {
      id: 1,
      name: 'Project Alpha',
      skills: [1, 2],  // Referencing skill IDs
      description: 'A web application built with React and TypeScript.',
      imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
      srcLink: '',
      prjLink: '',
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
  