import Certificate from "./Certificate";
import { Button } from "../ui/Button";
import { useState } from "react";

// Certificate data (update image and file paths as needed)
const CERTIFICATES = [
	{
		title: "Cognifyz Offer Letter",
		image: "/certificates/Cognifyz_Offer_Letter_page-0001.jpg",
		file: "/certificates/Cognifyz_Offer_Letter.pdf",
	},
	{
		title: "Internship Completion Certificate Cognifyz",
		image: "/certificates/Internship_completion_certficate_Cognifyz_page-0001.jpg",
		file: "/certificates/Internship completion certficate Cognifyz.pdf",
	},
	{
		title: "TatvaAI Offer Letter",
		image: "/certificates/tatvaAI-Offer_Letter_Siddharth_page-0001.jpg",
		file: "/certificates/tatvaAI-Offer_Letter_Siddharth.pdf",
	},
	{
		title: "TatvaAI Internship Completion Certificate",
		image: '/certificates/TatvaAI Internship Completion Certificate_Siddarth Singh (1)_page-0001.jpg',
		file: '/certificates/TatvaAI Internship Completion Certificate_Siddarth Singh (1).pdf',
	},
	{
		title: "Deloitte Australia - Data Analytics Job Simulation",
		image: "/certificates/Screenshot 2025-06-25 185440.png",
		file: "/certificates/Data_Analytics_completion_certificate.pdf",
	},
	{
		title: "Cyber Security - Ethical Hacking | Summer Training Program 2025",
		image: "/certificates/Cyber_Security.jpg",
		file: "/certificates/Cyber_Security.pdf",
	},
	{
		title: "Artificial Intelligence | Summer Training Program 2025",
		image: "/certificates/Artificial_Intelligence.jpg",
		file: "/certificates/Artificial_Intelligence.pdf",
	},
];

function Certificates() {
	const [hoveredIdx, setHoveredIdx] = useState(null);

	return (
		<div className="m-2.5 bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] bg-fixed animate-gradient">
			<section
				id="certificates"
				className="min-h-screen p-10 border-2 border-gray-100 rounded-3xl bg-slate-950/70 shadow-xl shadow-black/20 text-center"
			>
			<div className="text-center mb-8">
				<h2 className="font-pacifico text-3xl mb-2 text-gray-100">Certificates</h2>
				<p className="max-w-2xl mx-auto text-gray-300">
					Certificates are presented in a neat grid with the same muted slate theme used throughout the site.
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
				{CERTIFICATES.map((cert, index) => (
					<Certificate
						key={index}
						certificateTitle={cert.title}
						certificateFile={cert.file}
						certificateImage={cert.image}
						isBlurred={hoveredIdx !== null && hoveredIdx !== index}
						onHover={() => { setHoveredIdx(index) }}
						onLeave={() => { setHoveredIdx(null) }}
						{...cert}
					/>
				))}
			</div>
			<div className="mt-10 text-center">
				<Button href="#home">Back to Home</Button>
			</div>
		</section>
	</div>
	);
}

export default Certificates;