export function ProjectCard({ title, description, link }) {
  return (
    <div className="w-72 mx-auto my-2.5 p-5 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-center rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1.5">
      <h3 className="text-2xl mb-2.5 text-[#39FF14]">{title}</h3>
      <button className="px-4 py-2 bg-[#149414] text-[#39FF14] rounded">
        <a href={link} target="_blank" rel="noopener noreferrer">View</a>
      </button>
      <p className="text-base text-white mt-2">{description}</p>
    </div>
  );
}