import React from 'react';

export function SkillCard({ title, link }) {
  const content = (
    <span className="font-codystar text-sm font-semibold text-gray-100">
      {title}
    </span>
  );

  return (
    <div className="w-full rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-center shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1.5">
      {link ? (
        <a href={link} className="text-gray-100 hover:underline">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}