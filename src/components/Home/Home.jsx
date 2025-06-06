import { AnimatedText } from './AnimatedText';
import { ProfileImage } from './ProfileImage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter'; // <-- Correct import

const ANIMATED_TEXTS = [
  "Welcome to my Portfolio",
  "I'm a Frontend Web Developer",
  "I Build Modern Web Apps",
  "Let's Create Something Amazing"
];

export function Home() {
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-around items-center p-8 
                  bg-[url('/Background.png')]
                  bg-fixed bg-cover animate-gradient 
                  border-gray-200 rounded-3xl`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-1">
          <ProfileImage
            src="/Siddharth.jpg"
            alt="Profile Image"
            className="w-64 h-64 rounded-full border-4 border-[#39FF14] shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Text Area */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-doto text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Hi, I'm Siddharth Singh
          </h1>
          <AnimatedText texts={ANIMATED_TEXTS} />
          <p className="text-gray-100 mt-4">Feel free to connect with me on social media!</p>
          <div className="flex justify-center mt-4">
            <a href="https://www.linkedin.com/in/siddharth-singh-a2a822253/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <LinkedInIcon className="w-20 h-20 text-blue-600" />
            </a>
            <a href="https://github.com/Siddharth2k14" target="_blank" rel="noopener noreferrer" className="mx-2">
              <GitHubIcon className="w-20 h-20 text-gray-800" />
            </a>
            <a href="https://x.com/Sidd_webd04" target="_blank" rel="noopener noreferrer" className="mx-2">
              <TwitterIcon className="w-20 h-20 text-blue-400" />
            </a>
          </div>
          <p className="text-gray-300 text-lg">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>
      </div>
    </section>
  );
}
