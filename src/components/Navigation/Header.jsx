import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const NAV_ITEMS = [
    { href: "#home", title: "Home", id: "home" },
    { href: "#about", title: "About", id: "about" },
    { href: "#experience", title: "Experience", id: "experience" },
    { href: "#skills", title: "Skills", id: "skills" },
    { href: "#certificates", title: "Certificates", id: "certificates" },
    { href: "#projects", title: "Projects", id: "projects" },
    { href: "#contacts", title: "Contacts", id: "contacts" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-slate-950/80 border-b border-slate-700/40
        shadow-lg shadow-slate-900/40
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-100 tracking-wide font-doto">
          <a href="#home">Siddharth.dev</a>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`font-semibold text-lg transition-colors duration-200 pb-1
                ${activeSection === item.id
                  ? "text-slate-100 border-b-2 border-slate-300"
                  : "text-slate-300 hover:text-slate-100"
                }
              `}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-700/50 py-4">
          <nav className="flex flex-col items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-semibold transition-colors duration-200
                  ${activeSection === item.id
                    ? "text-slate-100"
                    : "text-slate-300 hover:text-slate-100"
                  }
                `}
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