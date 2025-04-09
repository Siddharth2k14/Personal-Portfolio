import { Button } from '../ui/Button';
import { ProjectCard } from './ProjectCard';

const PROJECTS = [
  {
    title: 'Personal Task Manager',
    description: 'Personal task manager is a web app that allows the user to manage their tasks in a single place.',
    link: 'https://personal-task-manager-one.vercel.app/',
  },
  {
    title: 'Paste App',
    description: 'Paste App is a web app that allows the user to store or save thier text or code snippets in a single place.',
    link: 'https://paste-app-chi.vercel.app/',
  },
  {
    title: 'Diabetes Prediction Model',
    description: 'In this project, I have built a diabetes prediction model using machine learning having predictions for some of algorithms. The model is tuned 60% accurately.',
    link: 'https://github.com/Siddharth2k14/Projects-on-Machine-Learning-in-Python',
  },
];

export function Projects() {
  return (
    <section id="projects" className="p-10 m-2.5 bg-[url('/Background.png')] bg-fixed animate-gradient text-center border-2 border-gray-100">
      <h2 className="font-doto text-3xl mb-7 text-gray-100">Projects</h2>
      <div className='flex justify-around flex-wrap gap-4'>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <Button href="#home">Back to Home</Button>
    </section>
  );
}