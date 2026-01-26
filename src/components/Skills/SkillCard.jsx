import React from 'react';

export function SkillCard({ title, link }) {
  const content = (
    <h3 className="font-codystar text-2xl mb-2.5 font-bold text-[#39FF14]">{title}</h3>
  );

  return (
    <div className="w-48 p-5 bg-center rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1.5 flex items-center justify-center hover: underline-offset-auto">
      {link ? (
        <a href={link} className="text-[#39FF14] hover:underline">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}