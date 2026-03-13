import { Button } from '../ui/Button';

function About() {
  const handleDownload = () => {
    return (
      <div>
        
      </div>
    )
  };

  return (
    <div className="m-2.5 border-2 border-gray-100 bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] bg-fixed animate-gradient">
      <section id="about" className="p-10 text-center">
        <h2 className="font-pacifico text-3xl mb-5 text-gray-100">About Me</h2>
        <h2 className="text-3xl mb-5 text-gray-100">Hi, I'm Siddharth Singh</h2>
        <p className="text-gray-100">Web Developer | Designer | Problem Solver</p>
        <p className="text-gray-100 my-4">
          I'm a passionate web developer with experience in building responsive and interactive websites.
        </p>
        <p className="text-gray-100 my-4">
          Artificial Intelligence by IIT Kanpur <b>Currently Pursuing</b>
        </p>
        <p className="text-gray-100 my-4">Here is my Resume</p>
        <Button className="mt-2" onClick={handleDownload}>Download Resume</Button>
        <br/>
        <Button href="#home">Back to Home</Button>
      </section>
    </div>
  );
}

export default About;