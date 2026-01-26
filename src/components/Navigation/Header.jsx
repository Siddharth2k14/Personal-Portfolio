import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const NAV_ITEMS = [
    { href: "#home", title: "Home", id: "home" },
    { href: "#about", title: "About", id: "about" },
    { href: "#skills", title: "Skills", id: "skills" },
    { href: "#certificates", title: "Certificates", id: "certificates" },
    { href: "#projects", title: "Projects", id: "projects" },
    { href: "#contacts", title: "Contacts", id: "contacts" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

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
        threshold: 0, // 60% visible = active
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-black/30 border-b border-white/10
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#39FF14] tracking-wide font-doto">
          Siddharth.dev
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`font-semibold text-lg transition
                ${activeSection === item.id
                  ? "text-[#39FF14] border-b-2 border-[#39FF14]"
                  : "text-gray-200 hover:text-[#39FF14]"
                }
              `}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10 py-4">
          <nav className="flex flex-col items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-semibold transition
                  ${activeSection === item.id
                    ? "text-[#39FF14]"
                    : "text-gray-200 hover:text-[#39FF14]"
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