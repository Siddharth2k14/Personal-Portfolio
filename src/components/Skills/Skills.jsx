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
      <section id="skills" className="p-10 text-center border-2 border-gray-100">
        <h2 className="font-pacifico text-3xl mb-7 text-gray-100">Skills</h2>

        <div className="space-y-10">
          {Object.entries(SKILL_GROUPS).map(([group, skills]) => (
            <div key={group}>
              <h3 className="text-2xl font-bold text-white mb-4">
                {group}
              </h3>

              <div className="flex justify-around flex-wrap gap-4 max-h-40 pr-2">
                {skills.map((skill) => (
                  <SkillCard key={skill} title={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Button href="#home">Back to Home</Button>
      </section>
    </div>
  );
}

export default Skills;