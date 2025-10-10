// import { Header } from './components/Navigation/Header';
// import { Home } from './components/Home/Home';
// import { About } from './components/About/About';
// import { Skills } from './components/Skills/Skills';
// import { Projects } from './components/Projects/Projects';
// import { ContactForm } from './components/Contact/ContactForm';
// import Certificate from './components/Certificates/Certificate';
// import Certificates from './components/Certificates/Certificates';

import { lazy, Suspense } from 'react';
const Header = lazy(() => import("./components/Navigation/Header.jsx"));
const Home = lazy(() => import("./components/Home/Home.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const Skills = lazy(() => import("./components/Skills/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const ContactForm = lazy(() => import("./components/Contact/ContactForm.jsx"));
const Certificates = lazy(() => import("./components/Certificates/Certificates.jsx"))

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#149414] via-[#649568] to-[#2b5329] animate-gradient">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <Header />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <ContactForm />
      </Suspense>
    </div>
  );
}

export default App;