import { Button } from '../ui/Button';
import { ProjectCard } from './ProjectCard';

const PROJECTS = [
  {
    title: 'Online Exam Portal (ExamMaster)',
    description: 'ExamMaster is an online exam portal that allows the teacher to create and manages exams, and the student can take the exam and get the score instantly.',
    link: 'https://online-exam-portal-client.vercel.app/',
    techStack: 'ReactJS, NodeJS, ExpressJS, MongoDB, Material-UI',
  },
  {
    title: 'Personal Task Manager',
    description: 'Personal task manager is a web app that allows the user to manage their tasks in a single place.',
    link: 'https://personal-task-manager-one.vercel.app/',
    techStack: 'ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS',
  },
  {
    title: 'Paste App',
    description: 'Paste App is a web app that allows the user to store or save thier text or code snippets in a single place.',
    link: 'https://paste-app-chi.vercel.app/',
    techStack: 'ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS',
  },
  {
    title: 'Diabetes Prediction Model',
    description: 'In this project, I have built a diabetes prediction model using machine learning having predictions for some of algorithms. The model is tuned 60% accurately.',
    link: 'https://github.com/Siddharth2k14/Projects-on-Machine-Learning-in-Python',
    techStack: 'Python, Scikit-learn, Pandas, NumPy',
  },
];

function Projects() {
  return (
    <div className="m-2.5 bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] bg-fixed animate-gradient">
      <section id="projects" className="p-10 border-2 border-gray-100 rounded-3xl bg-slate-950/70 shadow-xl shadow-black/20 text-center">
        <div className="text-center mb-8">
          <h2 className="font-pacifico text-3xl mb-2 text-gray-100">Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Projects are arranged in a balanced grid using the same muted slate styling as the Skills section.
          </p>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="#home">Back to Home</Button>
      </div>
    </section>
    </div>
  );
}

export default Projects;