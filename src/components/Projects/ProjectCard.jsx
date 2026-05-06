export function ProjectCard({ title, description, link, techStack }) {
  return (
    <div className="w-full max-w-md mx-auto my-2.5 p-6 rounded-3xl border border-slate-700/80 bg-slate-950/80 shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1.5">
      <h3 className="text-2xl mb-3 text-gray-100 font-semibold">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-6">{description}</p>
      <h6 className="mb-4 text-slate-300 text-sm">Tech Stack: {techStack}</h6>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-700 text-white rounded-full shadow-sm transition-colors duration-200 hover:bg-slate-600"
      >
        View
      </a>
    </div>
  );
}