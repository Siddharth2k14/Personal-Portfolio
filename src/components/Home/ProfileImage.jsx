import { motion } from "framer-motion";

export function ProfileImage({ src, alt }) {
  const CIRCLE_TEXT = " FULLSTACK WEB DEVELOPER • CREATIVE CODER • MODERN UI/UX • ";

  return (
    <div className="relative flex items-center justify-center">

      {/* Rotating Curved Text Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-[330px] h-[330px] md:w-[380px] md:h-[380px]"
      >
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 
                 m -120, 0
                 a 120,120 0 1,1 240,0
                 a 120,120 0 1,1 -240,0"
            />
          </defs>

          <text
            fill="#39FF14"
            fontSize="15"
            letterSpacing="8px"
            fontWeight="bold"
          >
            <textPath xlinkHref="#circlePath" startOffset="0%">
              {CIRCLE_TEXT.repeat(4)}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Profile Image */}
      <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

    </div>
  );
}