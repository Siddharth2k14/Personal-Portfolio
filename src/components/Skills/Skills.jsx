import { Button } from '../ui/Button';
import { SkillCard } from './SkillCard';

const SKILLS = [
  {
    title: 'HTML',
    description: 'Experienced in creating semantic, accessible web pages.',
  },
  {
    title: 'CSS',
    description: 'Proficient in responsive design, animations, and layouts.',
  },
  {
    title: 'JavaScript',
    description: 'Skilled in adding interactivity, API integrations, and more.',
  },
  {
    title: 'React',
    description: 'Experienced in building modern web apps with React.',
  },
  {
    title: 'Python',
    description: 'Experienced in Machine Learning in Python',
  },
  {
    title: 'Express JS',
    description: "Managed server-side logic and API development.",
  },
  {
    title: 'Node JS',
    description: "Built scalable applications using Node.js.",
  },
  {
    title: 'MongoDB',
    description: "Managed NoSQL databases for dynamic data storage.",
  },
  {
    title: 'Tailwind CSS',
    description: "Styled components with utility-first CSS framework.",
  },
  {
    title: 'Git',
    description: "Version control for collaborative development.",
  },
  {
    title: 'Postman',
    description: "API testing and documentation.",
  },
  {
    title: 'VS Code',
    description: "Used as primary code editor with extensions.",
  },
  {
    title: 'Github',
    description: "Version control and collaboration platform.",
  },
  {
    title: 'Vercel',
    description: "Deployed web applications seamlessly.",
  },
  {
    title: 'C++',
    description: "Proficient in C++ programming language.",
  },
  {
    title: 'DSA',
    description: "Experienced in Data Structures and Algorithms.",
  },
  {
    title: 'Machine Learning',
    description: "Experienced in Machine Learning algorithms.",
  },
  {
    title: 'Problem Solving',
    description: "Skilled in solving complex problems efficiently.",
  },
  {
    title: 'Firebase',
    description: "Used for authentication, database, and hosting.",
  },
  {
    title: 'Material UI',
    description: "Styled components with Material Design framework.",
  }
];

export function Skills() {
  return (
    <div className="m-2.5 bg-[url('/Background.png')] bg-fixed animate-gradient">
      <section id="skills" className="p-10 text-center border-2 border-gray-100">
        <h2 className="font-bold text-3xl mb-7 text-gray-100">Skills</h2>
        <div className="flex justify-around flex-wrap gap-4">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
        <Button href="#home">Back to Home</Button>
      </section>
    </div>
  );
}