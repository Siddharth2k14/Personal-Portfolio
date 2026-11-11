import { Button } from '../ui/Button';
import { SkillCard } from './SkillCard';

const SKILL_GROUPS = {
  "Frontend": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Material UI",
  ],
  "Backend": [
    "Node JS",
    "Express JS",
    "MongoDB",
    "Firebase",
    "PostgreSQL",
    "SQL",
  ],
  "Tools & Platforms": [
    "Git",
    "Github",
    "Postman",
    "VS Code",
    "Vercel",
    "Render",
    "MongoDB Atlas",
    "PgAdmin",
    "Antigravity",
  ],
  "Programming & CS": [
    "C++",
    "DSA",
    "Problem Solving",
  ],
  "AI / ML": [
    "Machine Learning",
    "Python",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Scikit-Learn",
    "Keras",
    "Seaborn",
  ],

  "Monitoring": [
    "Uptime Robot",
    "Sentry",
  ]
};

function Skills() {
  return (
    <div className="m-2.5 bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] bg-fixed animate-gradient">
      <section id="skills" className="p-10 border-2 border-gray-100 rounded-3xl bg-slate-950/70 shadow-xl shadow-black/20">
        <div className="text-center mb-10">
          <h2 className="font-pacifico text-3xl mb-3 text-gray-100">Skills</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Organized skill groups make it easy to understand my strengths at a glance.
            Each section is arranged in a clean card layout with consistent spacing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(SKILL_GROUPS).map(([group, skills]) => (
            <div key={group} className="rounded-3xl border border-slate-700/80 bg-slate-950/70 p-6 shadow-xl shadow-black/20">
              <h3 className="font-codystar text-2xl font-bold text-gray-100 mb-5">
                {group}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <SkillCard key={skill} title={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="#home">Back to Home</Button>
        </div>
      </section>
    </div>
  );
}

export default Skills;