import { Button } from '../ui/Button';
import { ProjectCard } from './ProjectCard';

const PROJECTS = [
  {
    title: 'Project 1',
    description: 'Personal Task Manager',
    link: 'https://personal-task-manager-one.vercel.app/',
  },
  {
    title: 'Project 2',
    description: 'Paste App',
    link: 'https://paste-app-chi.vercel.app/',
  },
  {
    title: 'Project 3',
    description: 'Diabetes Prediction Model',
    link: 'https://github.com/Siddharth2k14/Projects-on-Machine-Learning-in-Python',
  },
];

export function Projects() {
  return (
    <section id="projects" className="p-10 m-2.5 bg-[url('/Background.png')] bg-fixed animate-gradient text-center border-2 border-gray-100">
      <h2 className="text-3xl mb-7 text-gray-100">Projects</h2>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
      <Button href="#home">Back to Home</Button>
    </section>
  );
}