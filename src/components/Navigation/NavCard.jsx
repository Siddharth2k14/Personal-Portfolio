export function NavCard({ color, href, title, description }) {
  return (
    <div
      className={`flex flex-col items-center justify-center h-24 w-60 rounded-lg border-2 border-[#39FF14] text-white cursor-pointer transition-all duration-400 hover:scale-110 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-center group`}
    >
      <a href={href}>
        <p className="text-2xl font-bold text-[#39FF14]">{title}</p>
      </a>
      <p className="text-sm text-yellow-50">{description}</p>
    </div>
  );
}