import { useState } from "react";
import { NavCard } from "./NavCard";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [open, setOpen] = useState(false);

  const NAV_ITEMS = [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#skills", title: "Skills" },
    { href: "#certificates", title: "Certificates" },
    { href: "#projects", title: "Projects" },
    { href: "#contacts", title: "Contacts" },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-black/30 border-b border-white/10
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-[#39FF14] tracking-wide font-doto">
          Siddharth.dev
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-gray-200 hover:text-[#39FF14] transition font-semibold text-lg"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10 py-4">
          <nav className="flex flex-col items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-200 hover:text-[#39FF14] text-lg font-semibold transition"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}