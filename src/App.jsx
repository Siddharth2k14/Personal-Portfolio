import Header from './components/Navigation/Header';
import  Home  from './components/Home/Home';
import  About  from './components/About/About';
import  Skills  from './components/Skills/Skills';
import  Projects  from './components/Projects/Projects';
import  ContactForm  from './components/Contact/ContactForm';
// import Certificate from './components/Certificates/Certificate';
import Certificates from './components/Certificates/Certificates';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 animate-gradient">
        <Header />
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <ContactForm />
    </div>
  );
}

export default App;