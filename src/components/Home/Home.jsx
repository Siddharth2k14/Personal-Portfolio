import { AnimatedText } from './AnimatedText';
import { ProfileImage } from './ProfileImage';

const ANIMATED_TEXTS = [
  "Welcome to my Portfolio",
  "I'm a Full Stack Developer",
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
            // src="/1734288082087.jpg"
            src="/Siddharth.jpg" 
            alt="Profile Image"
            className="w-64 h-64 rounded-full border-4 border-[#39FF14] shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Text Area */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Hi, I'm Siddharth Singh
          </h1>
          <AnimatedText texts={ANIMATED_TEXTS} />
          <p className="text-gray-300 text-lg">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>
      </div>
    </section>
  );
}
