import React from 'react';

const baseButtonClasses =
  'mt-5 inline-flex items-center justify-center px-5 py-2.5 bg-slate-700 text-white border border-transparent rounded-full shadow-sm transition-colors duration-200 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2';

export function Button({ children, onClick, href, type = 'button', className = '' }) {
  const buttonClasses = `${baseButtonClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href}>
        <button type={type} onClick={onClick} className={buttonClasses}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

