import { AnimatedText } from './AnimatedText';
import { ProfileImage } from './ProfileImage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const ANIMATED_TEXTS = [
  "Welcome to my Portfolio",
  "I Build Modern Web Apps",
];

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center p-8
                 bg-[url('/Background.webp')] bg-cover bg-fixed animate-gradient
                 rounded-3xl pt-[110px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 text-center">

        {/* Heading */}
        <h1 className="font-doto text-4xl md:text-5xl font-bold text-gray-100">
          Hi, I'm Siddharth Singh
        </h1>

        {/* Profile Image with Curved Circular Text (center) */}
        <ProfileImage src="/Siddharth.webp" alt="Profile Image" />
        {/* Animated Typing Text */}
        <AnimatedText texts={ANIMATED_TEXTS} />
        {/* Social Media */}
        <p className="text-gray-100 mt-2 text-lg">
          Feel free to connect with me on social media!
        </p>

        <div className="flex justify-center gap-6 mt-2">
          <a 
            href="https://www.linkedin.com/in/siddharth-singh-a2a822253/"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <LinkedInIcon className="text-blue-600" style={{ fontSize: 45 }} />
          </a>

          <a 
            href="https://github.com/Siddharth2k14"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <GitHubIcon className="text-gray-200" style={{ fontSize: 45 }} />
          </a>

          <a 
            href="https://x.com/Sidd_webd04"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <TwitterIcon className="text-blue-400" style={{ fontSize: 45 }} />
          </a>
        </div>

        {/* Footer line */}
        <p className="text-gray-300 text-lg">
          Passionate about creating beautiful and functional web experiences
        </p>
      </div>
    </section>
  );
}

export default Home;