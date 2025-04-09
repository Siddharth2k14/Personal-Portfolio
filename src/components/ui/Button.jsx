import React from 'react';

export function Button({ children, onClick, href, type = 'button' }) {
  if (href) {
    return (
      <a href={href}>
        <button
          type={type}
          onClick={onClick}
          className="mt-5 px-5 py-2.5 bg-[#ff4500] text-white border-none cursor-pointer hover:bg-[#ff6347] rounded"
        >
          {children}
        </button>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-5 px-5 py-2.5 bg-[#ff4500] text-white border-none cursor-pointer hover:bg-[#ff6347] rounded"
    >
      {children}
    </button>
  );
}