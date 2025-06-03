import { NavCard } from './NavCard';

export function Header() {
  return (
    <header className="header">
      <section id="home" />
      <div className="h-screen flex flex-col justify-around items-center gap-4 m-2.5 border-2 border-gray-200 rounded-lg bg-[url('/Background.png')] bg-fixed animate-gradient">
        {[
          { href: '#home', title: 'Home', description: 'Redirect to Home Section' },
          { href: '#about', title: 'About', description: 'Redirect to About Section' },
          { href: '#skills', title: 'Skills', description: 'Redirect to Skills Section' },
          { href: '#certificates', title: 'Certificates', description: 'Redirect to Certificates Section' },
          { href: '#projects', title: 'Projects', description: 'Redirect to Project Section' },
          { href: '#contacts', title: 'Contacts', description: 'Redirect to Contacts Section' }
        ].map((item) => (
          <NavCard
            key={item.title}
            color=""
            href={item.href}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </header>
  );
}