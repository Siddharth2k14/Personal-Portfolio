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
    <div className="m-2.5 bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] bg-fixed animate-gradient">
      <section id="about" className="p-10 border-2 border-gray-100 rounded-3xl bg-slate-950/70 shadow-xl shadow-black/20 text-center">
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
          <b>Currently Working</b> at <b>SimDaas Autonomy Pvt. Ltd.</b>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

          <div className="bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] 
                          bg-cover bg-center bg-fixed 
                          p-10 rounded-3xl border-2 border-gray-100
                          w-[600px] text-center shadow-xl shadow-black/30 animate-gradient
                          bg-slate-950/85">

            <h3 className="text-2xl text-slate-100 font-semibold mb-6">Select Resume</h3>

            <div className="space-y-4">

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/50">
                <p className="text-slate-300 mb-3 font-medium">Developer Resume</p>
                <Button onClick={() => handleDownload("/resume/Resume_Developer.pdf")}>Download</Button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/50">
                <p className="text-slate-300 mb-3 font-medium">Data Analyst Resume</p>
                <Button onClick={() => handleDownload("/resume/Resume_Data_Analyst.pdf")}>Download</Button>
              </div>

            </div>

            <Button className="mt-6" onClick={() => setShowOptions(false)}>
              Close
            </Button>

          </div>
        </div>
      )}
    </div>
  );
}

export default About;