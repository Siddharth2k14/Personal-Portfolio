import { useState } from "react";
import { Button } from "../ui/Button";

function About() {
  const [showOptions, setShowOptions] = useState(false);

  const handleDownload = (resumeLink) => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = resumeLink.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="m-2.5 border-2 border-gray-100 bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] bg-fixed animate-gradient">
      <section id="about" className="p-10 text-center">
        <h2 className="font-pacifico text-3xl mb-5 text-gray-100">About Me</h2>
        <h2 className="text-3xl mb-5 text-gray-100">Hi, I'm Siddharth Singh</h2>

        <p className="text-gray-100">
          Web Developer | Designer | Problem Solver
        </p>

        <p className="text-gray-100 my-4">
          I'm a passionate web developer with experience in building responsive
          and interactive websites.
        </p>

        <p className="text-gray-100 my-4">
          Artificial Intelligence by IIT Kanpur <b>Currently Pursuing</b>
        </p>

        <p className="text-gray-100 my-4">Here is my Resume</p>

        <Button className="mt-2" onClick={() => setShowOptions(true)}>
          Select Resume to download
        </Button>

        <br />
        <Button href="#home">Back to Home</Button>
      </section>

      {/* Modal */}
      {showOptions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

          <div className="bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] 
                          bg-cover bg-center 
                          p-8 rounded-3xl border-[3px] border-white-400 
                          w-[600px] text-center shadow-xl animate-gradient">

            <h3 className="text-xl text-white mb-5">Select Resume</h3>

            <div className="space-y-4">

              <div>
                <p className="text-gray-100 mb-2">Developer Resume</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={() =>
                    handleDownload("/resume/Resume_Developer.pdf")
                  }
                >
                  Download
                </button>
              </div>

              <div>
                <p className="text-gray-100 mb-2">Data Analyst Resume</p>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  onClick={() =>
                    handleDownload("/resume/Resume_Data_Analyst.pdf")
                  }
                >
                  Download
                </button>
              </div>

            </div>

            <button
              className="px-6 py-3 text-lg rounded-lg mt-6 text-sm text-red-400 hover:bg-red-400 hover:text-white "
              onClick={() => setShowOptions(false)}
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default About;