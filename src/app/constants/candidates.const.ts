import { AbilityTypes } from '../enums/abilityTypes';
import { ProcessStep } from '../enums/processSteps.enum';
import { Candidate } from '../models/Candidate';

export const candidates: Candidate[] = [
  {
    id: 1,
    generalInfo: {
      name: 'Victor Eyer',
      processStep: ProcessStep.AwaitingResults,
      location: 'Campos dos Goytacazes, Rio de Janeiro, Brasil',
      languages: ['Portuguese (native)', 'English (Professional Working)'],
      education: [
        {
          degree: 'Bacharelado em Engenharia',
          field: 'Engenharia de Computação',
          institution: 'IFF - Instituto Federal Fluminense',
          completionDate: '2018',
        },
        {
          degree: 'ReactJS, React Native, Node.JS',
          institution: 'Rocketseat',
          completionDate: '2020',
        },
        {
          degree: 'Bacharelado em Engenharia',
          field: 'Engenharia de Software',
          institution: 'Estácio',
          completionDate: 'Expected November 2025',
        },
      ],
      certifications: [
        '5° Edição do API Connect Conference',
        'Treinamento de Gestão de Projetos',
        'Semana Omnistack 11.0',
      ],
      professionalExperience: [
        {
          title: 'Desenvolvedor Fullstack Pleno',
          company: 'PORTAL SOLAR',
          duration: 'April 2022 - September 2024',
          responsibilities:
            'Development of API payment systems and franchise management with NodeJS, TypeScript, and React.',
        },
        {
          title: 'Desenvolvedor de software',
          company: 'AYT1.DEV',
          duration: 'September 2021 - April 2022',
          responsibilities:
            'Fullstack development in a multi-tenant API system using NodeJS, Express, and PostgreSQL.',
        },
        {
          title: 'Desenvolvedor Backend Pleno III',
          company: 'Wiser Educação',
          duration: 'March 2021 - September 2021',
          responsibilities:
            'Backend development focused on checkout and billing using NodeJS, Salesforce API, and PostgreSQL.',
        },
      ],
    },
    abilities: [
      {
        name: 'React and Node.js Development',
        score: 9,
        strongPoints: [
          'Solid experience in fullstack development using React and Node.js with TypeScript.',
          'Experience with building and maintaining APIs and dynamic UIs.',
        ],
        weakPoints: [],
        yearsOfExperience: 5,
        type: AbilityTypes.Frontend,
        pointsOfAttention: [
          'Evaluate proficiency with React hooks and performance optimization in complex UIs.',
        ],
        suggestedQuestions: [
          'Describe a complex UI you built with React and how you optimized its performance.',
          'How do you handle error management in Node.js API development?',
        ],
      },
      {
        name: 'APIs with Node.js & TypeScript',
        score: 8,
        strongPoints: [
          'Developed RESTful APIs using Node.js and TypeScript in multiple projects.',
          'Familiar with frameworks like Express and NestJS.',
        ],
        weakPoints: ['Limited experience with GraphQL APIs.'],
        yearsOfExperience: 3,
        type: AbilityTypes.Backend,
        pointsOfAttention: [
          'Check knowledge in asynchronous programming and handling large data payloads.',
        ],
        suggestedQuestions: [
          'How would you handle asynchronous tasks and error handling in Node.js?',
          'Explain how you optimize API endpoints in a high-load environment.',
        ],
      },
      {
        name: 'Clean Code and SOLID Principles',
        score: 7,
        strongPoints: [
          'Familiar with clean code practices and applying SOLID principles in development.',
          'Consistently applies refactoring techniques to improve code readability and maintainability.',
        ],
        weakPoints: [
          'Limited exposure to complex SOLID applications in large codebases.',
        ],
        yearsOfExperience: 2,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Evaluate understanding of dependency injection and interface segregation.',
        ],
        suggestedQuestions: [
          'How do you apply SOLID principles in your code?',
          'Can you describe a scenario where you used dependency injection effectively?',
        ],
      },
      {
        name: 'SQL and NoSQL Databases',
        score: 7,
        strongPoints: [
          'Experience with both SQL (PostgreSQL) and NoSQL (MongoDB) databases.',
          'Understands data modeling and query optimization.',
        ],
        weakPoints: [
          'Limited experience with complex data migrations and database tuning.',
        ],
        yearsOfExperience: 3,
        type: AbilityTypes.Database,
        pointsOfAttention: [
          'Assess experience in database design and indexing strategies.',
        ],
        suggestedQuestions: [
          'What indexing strategies have you used to improve query performance?',
          'Describe your approach to database schema design for a new project.',
        ],
      },
      {
        name: 'Automated Testing (Jest/Mocha)',
        score: 6,
        strongPoints: [
          'Familiar with writing unit tests using Jest and Mocha for JavaScript applications.',
          'Understands test-driven development practices.',
        ],
        weakPoints: [
          'Limited experience with integration tests and end-to-end tests.',
        ],
        yearsOfExperience: 2,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Evaluate knowledge in setting up test suites and CI integration for testing.',
        ],
        suggestedQuestions: [
          'How do you ensure adequate test coverage in your projects?',
          'Can you describe a scenario where test-driven development benefited your project?',
        ],
      },
      {
        name: 'DevOps & CI/CD (Jenkins/GitLab CI)',
        score: 7,
        strongPoints: [
          'Experience setting up CI/CD pipelines with GitLab CI and deploying applications using Docker.',
          'Familiar with the basics of containerization and cloud deployment.',
        ],
        weakPoints: [
          'Limited experience with advanced CI/CD features like blue-green deployments.',
        ],
        yearsOfExperience: 2,
        type: AbilityTypes.DevOps,
        pointsOfAttention: [
          'Assess knowledge in configuring Docker and automating deployment pipelines.',
        ],
        suggestedQuestions: [
          'How would you set up a CI/CD pipeline for a microservices architecture?',
          'What are some best practices you follow for Dockerizing applications?',
        ],
      },
      {
        name: 'Git Version Control',
        score: 9,
        strongPoints: [
          'Extensive experience using Git for version control, including branching and merging strategies.',
          'Understands Gitflow and is proficient with collaboration workflows.',
        ],
        weakPoints: [],
        yearsOfExperience: 5,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Evaluate proficiency with resolving complex merge conflicts and rebasing.',
        ],
        suggestedQuestions: [
          'Can you explain your approach to handling merge conflicts in Git?',
          'How do you manage feature branches in a collaborative team environment?',
        ],
      },
      {
        name: 'Agile Collaboration (Scrum/Kanban)',
        score: 8,
        strongPoints: [
          'Experienced in working within Agile environments using Scrum and Kanban methodologies.',
          'Collaborative and communicative with cross-functional teams.',
        ],
        weakPoints: [
          'Limited experience with advanced Agile roles like Scrum Master.',
        ],
        yearsOfExperience: 3,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Assess experience with sprint planning and retrospective processes.',
        ],
        suggestedQuestions: [
          'Describe your experience with sprint planning in an Agile team.',
          'How do you handle changing requirements during a sprint?',
        ],
      },
    ],
    overallScore: 8,
  },
  {
    id: 2,
    generalInfo: {
      processStep: ProcessStep.Feedback,
      name: 'Lucas Ferreira',
      location: 'Belo Horizonte, Minas Gerais, Brasil',
      languages: ['Portuguese (native)'],
      education: [
        {
          degree: 'Graduação',
          field: 'Tecnologia da Informação/Sistemas da Informação',
          institution: 'Estácio',
          completionDate: '2022',
        },
        {
          degree: 'Curso Superior de Tecnologia (CST)',
          field: 'Administração, Negócios e Marketing',
          institution: 'Arbutus College',
          completionDate: '2019',
        },
      ],
      certifications: [],
      professionalExperience: [
        {
          title: 'Analista ServiceNow',
          company: 'Stefanini Brasil',
          duration: 'julho de 2023 - agosto de 2024',
          responsibilities:
            'Development and analysis in ServiceNow solutions, focusing on ITSM modules including Client Scripts, Workflow, Flow Designer, UI Policy, SLAs/OLAs, Business Rules, Widgets, Service Portals, ACLs, Scheduled Jobs, Integrations, and APIs.',
        },
        {
          title: 'Desenvolvedor ServiceNow',
          company: 'Aoop Cloud Solutions',
          duration: 'maio de 2022 - julho de 2023',
          responsibilities:
            'Developed ServiceNow solutions with a focus on ITSM modules including Client Scripts, Workflow, Flow Designer, UI Policy, SLAs/OLAs, Business Rules, Widgets, Service Portals, and ACLs.',
        },
        {
          title: 'Desenvolvedor Full Stack',
          company: '4mti',
          duration: 'maio de 2020 - outubro de 2021',
          responsibilities:
            'Fullstack development and maintenance of web applications using HTML5, CSS3, JavaScript, and PHP with MySQL and PostgreSQL databases.',
        },
        {
          title: 'Desenvolvedor de Software',
          company: 'Teknisa',
          duration: 'agosto de 2012 - dezembro de 2015',
          responsibilities: '',
        },
      ],
    },
    abilities: [
      {
        name: 'JavaScript',
        score: 8,
        strongPoints: [
          'Experienced in JavaScript for both frontend and ServiceNow development.',
          'Used in web development with HTML5, CSS3, and integration within ServiceNow ITSM modules.',
        ],
        weakPoints: [
          'Limited exposure to JavaScript frameworks outside of ServiceNow and basic frontend.',
        ],
        yearsOfExperience: 4,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Evaluate proficiency in advanced JavaScript, particularly in frameworks and libraries.',
        ],
        suggestedQuestions: [
          'How would you handle complex JavaScript logic in a web application?',
          'Can you describe a scenario where you optimized JavaScript performance in a project?',
        ],
      },
      {
        name: 'React and Node.js Development',
        score: 6,
        strongPoints: [
          'Some experience with React.js in previous projects.',
          'General understanding of fullstack JavaScript development using JavaScript and PHP for backend.',
        ],
        weakPoints: [
          'Limited experience with advanced React patterns and state management libraries.',
        ],
        yearsOfExperience: 1,
        type: AbilityTypes.Frontend,
        pointsOfAttention: [
          'Evaluate familiarity with React component lifecycle and hooks.',
        ],
        suggestedQuestions: [
          'How do you approach component re-renders and state management in React?',
          'Describe your experience with fullstack development using Node.js and React.',
        ],
      },
      {
        name: 'SQL and NoSQL Databases',
        score: 7,
        strongPoints: [
          'Experienced with MySQL and PostgreSQL databases for web development.',
          'Capable of designing and optimizing database schemas for web applications.',
        ],
        weakPoints: [
          'No exposure to NoSQL databases beyond relational SQL databases.',
        ],
        yearsOfExperience: 3,
        type: AbilityTypes.Database,
        pointsOfAttention: [
          'Evaluate knowledge in database optimization and indexing techniques.',
        ],
        suggestedQuestions: [
          'Can you explain your approach to database normalization and optimization?',
          'Describe a scenario where you improved query performance in a SQL database.',
        ],
      },
      {
        name: 'DevOps & CI/CD (Jenkins/GitLab CI)',
        score: 5,
        strongPoints: [
          'Basic knowledge of DevOps practices, focusing on scheduled jobs and API integrations in ServiceNow.',
          'Some familiarity with deployment practices in past projects.',
        ],
        weakPoints: [
          'Limited exposure to CI/CD pipelines and advanced DevOps automation tools.',
        ],
        yearsOfExperience: 1,
        type: AbilityTypes.DevOps,
        pointsOfAttention: [
          'Evaluate understanding of CI/CD pipeline setup and automation tools.',
        ],
        suggestedQuestions: [
          'How do you approach setting up a basic CI/CD pipeline?',
          'What is your experience with managing deployments and scheduled jobs?',
        ],
      },
      {
        name: 'Agile Collaboration (Scrum/Kanban)',
        score: 7,
        strongPoints: [
          'Experienced in working within Agile environments, particularly in roles where prioritizing tasks and working with cross-functional teams was essential.',
          'Understands core Agile principles, with experience managing tasks and coordinating with teams.',
        ],
        weakPoints: [
          'Limited experience with advanced Agile roles such as Scrum Master.',
        ],
        yearsOfExperience: 3,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Evaluate understanding of Agile principles and specific contributions in past teams.',
        ],
        suggestedQuestions: [
          'How do you handle changes in requirements within an Agile sprint?',
          'Describe your experience managing tasks and priorities in a Scrum or Kanban environment.',
        ],
      },
    ],
    overallScore: 7,
  },
  {
    id: 3,
    generalInfo: {
      processStep: ProcessStep.VideoSubmited,
      name: 'Luciana Morais',
      location: 'Belo Horizonte, Minas Gerais, Brasil',
      languages: ['Portuguese (native)'],
      education: [
        {
          degree: 'Pós-graduação',
          field: 'Engenharia de Software com ênfase em métodos ágeis',
          institution: 'Universidade Cruzeiro do Sul',
          completionDate: '2020',
        },
        {
          degree: 'Bacharel',
          field: 'Sistemas de Informação',
          institution: 'Centro Universitário Anhangüera',
          completionDate: '2010',
        },
      ],
      certifications: [],
      professionalExperience: [
        {
          title: 'Java Developer',
          company: 'Prodemge',
          duration: 'June 2020 - Present',
          responsibilities:
            'Maintenance and enhancement of Java-based systems.',
        },
        {
          title: 'Project Manager / Requirements Analyst',
          company: 'Prodemge',
          duration: 'May 2014 - May 2020',
          responsibilities:
            'Led requirement gathering, task definition, sprint planning, and delivery tracking.',
        },
      ],
    },
    abilities: [
      {
        name: 'React and Node.js Development',
        score: 5,
        strongPoints: [
          'Basic experience in frontend development, with limited exposure to JavaScript and web frameworks.',
        ],
        weakPoints: [
          'Limited or no direct experience with React and Node.js development.',
        ],
        yearsOfExperience: 1,
        type: AbilityTypes.Frontend,
        pointsOfAttention: ['Confirm familiarity with JavaScript frameworks.'],
        suggestedQuestions: [
          'How would you approach a React project if assigned?',
          'Describe any recent experience you have with JavaScript development.',
        ],
      },
      {
        name: 'APIs with Node.js & TypeScript',
        score: 4,
        strongPoints: [
          'Experienced in backend API development with Java, familiar with API integration.',
        ],
        weakPoints: [
          'No documented experience with Node.js or TypeScript for API development.',
        ],
        yearsOfExperience: 0,
        type: AbilityTypes.Backend,
        pointsOfAttention: [
          'Evaluate knowledge of API design principles in Java versus Node.js.',
        ],
        suggestedQuestions: [
          'How would you approach learning Node.js and TypeScript for backend APIs?',
          'What are some best practices you use in Java API development?',
        ],
      },
      {
        name: 'Clean Code and SOLID Principles',
        score: 7,
        strongPoints: [
          'Experienced in clean coding practices and applying SOLID principles within Java projects.',
        ],
        weakPoints: [
          'Less exposure to advanced application of SOLID principles beyond Java.',
        ],
        yearsOfExperience: 6,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Confirm understanding of SOLID principles in a JavaScript context.',
        ],
        suggestedQuestions: [
          'How do you implement SOLID principles in your code?',
          'Can you describe a time you refactored code to improve its clarity and maintainability?',
        ],
      },
      {
        name: 'SQL and NoSQL Databases',
        score: 6,
        strongPoints: [
          'Experienced with SQL databases for data management, supporting application development.',
        ],
        weakPoints: ['Limited exposure to NoSQL databases.'],
        yearsOfExperience: 2,
        type: AbilityTypes.Database,
        pointsOfAttention: [
          'Assess depth of SQL knowledge and understanding of NoSQL concepts.',
        ],
        suggestedQuestions: [
          'How would you handle data storage in a NoSQL database?',
          'What indexing strategies do you use to optimize SQL queries?',
        ],
      },
      {
        name: 'Automated Testing (Jest/Mocha)',
        score: 5,
        strongPoints: [
          'Basic understanding of testing principles and creating test cases.',
        ],
        weakPoints: [
          'Limited experience with Jest or Mocha for automated testing.',
        ],
        yearsOfExperience: 1,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Assess familiarity with automated testing practices and tools beyond Java.',
        ],
        suggestedQuestions: [
          'What is your approach to testing in software development?',
          'How would you incorporate Jest or Mocha into your workflow?',
        ],
      },
      {
        name: 'DevOps & CI/CD (Jenkins/GitLab CI)',
        score: 4,
        strongPoints: [
          'Experience with project management, task scheduling, and basic CI/CD principles.',
        ],
        weakPoints: [
          'Limited hands-on experience with Jenkins or GitLab CI for CI/CD pipelines.',
        ],
        yearsOfExperience: 1,
        type: AbilityTypes.DevOps,
        pointsOfAttention: [
          'Evaluate knowledge in setting up CI/CD workflows and deployment practices.',
        ],
        suggestedQuestions: [
          'Describe any experience you have with CI/CD practices.',
          'How would you approach automating deployment in Jenkins or GitLab?',
        ],
      },
      {
        name: 'Git Version Control',
        score: 8,
        strongPoints: [
          'Proficient with Git for version control and collaborative workflows.',
        ],
        weakPoints: ['Limited experience with complex branching strategies.'],
        yearsOfExperience: 5,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Confirm experience with Git best practices in team settings.',
        ],
        suggestedQuestions: [
          'How do you handle branching and merging in Git?',
          'Can you describe a challenging Git conflict you resolved?',
        ],
      },
      {
        name: 'Problem Solving',
        score: 8,
        strongPoints: [
          'Strong analytical skills, particularly in software requirements and project management.',
        ],
        weakPoints: [],
        yearsOfExperience: 10,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Evaluate approach to solving technical challenges and system optimization.',
        ],
        suggestedQuestions: [
          'Describe a time when you solved a complex problem in a project.',
          'What is your approach to troubleshooting and debugging?',
        ],
      },
      {
        name: 'Agile Collaboration (Scrum/Kanban)',
        score: 7,
        strongPoints: [
          'Extensive experience in Agile methodologies, particularly in project management and requirements.',
        ],
        weakPoints: ['Limited experience as a Scrum Master.'],
        yearsOfExperience: 5,
        type: AbilityTypes.Programming,
        pointsOfAttention: [
          'Confirm experience with Agile ceremonies and team management.',
        ],
        suggestedQuestions: [
          'How do you manage priorities in an Agile environment?',
          'What is your approach to Agile sprint planning and retrospectives?',
        ],
      },
      {
        name: 'Docker & Kubernetes',
        score: 3,
        strongPoints: ['Basic knowledge of containerization concepts.'],
        weakPoints: ['No hands-on experience with Docker or Kubernetes.'],
        yearsOfExperience: 0,
        type: AbilityTypes.DevOps,
        pointsOfAttention: [
          'Evaluate familiarity with Docker/Kubernetes for containerization.',
        ],
        suggestedQuestions: [
          'How would you approach learning Docker and Kubernetes?',
          'What do you know about containerization and its benefits?',
        ],
      },
      {
        name: 'Microservices Architecture',
        score: 4,
        strongPoints: [
          'Familiarity with service-oriented approaches in project management.',
        ],
        weakPoints: [
          'No practical experience with microservices architecture.',
        ],
        yearsOfExperience: 0,
        type: AbilityTypes.Backend,
        pointsOfAttention: [
          'Assess understanding of microservices principles and benefits.',
        ],
        suggestedQuestions: [
          'What do you understand about microservices architecture?',
          'How would you implement a basic microservice?',
        ],
      },
    ],
    overallScore: 6,
  },
];
