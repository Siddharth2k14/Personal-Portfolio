import React from 'react';

export function SkillCard({ title, description, link }) {
  const content = (
    <h3 className="text-2xl mb-2.5 text-[#39FF14]">{title}</h3>
  );

  return (
    <div className="w-48 p-5 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-center rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1.5">
      {link ? (
        <a href={link} className="text-[#39FF14] hover:underline">
          {content}
        </a>
      ) : (
        content
      )}
      <p className="text-base text-gray-100">{description}</p>
    </div>
  );
}
