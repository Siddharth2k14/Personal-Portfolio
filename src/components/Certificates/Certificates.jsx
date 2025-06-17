import React, { useState } from "react";
import Certificate from "./Certificate";
import { div, image } from "framer-motion/client";
import { Button } from "../ui/Button";

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

];

export default function Certificates() {
	const [hoveredIdx, setHoveredIdx] = useState(null);

	return (
		<section id="certificates" className="p-10 m-2.5 bg-[url('/Background.png')] bg-fixed animate-gradient text-center border-2 border-gray-100">
			<h2 className="font-pacifico text-3xl mb-7 text-gray-100">Certificates</h2>
			<div className='flex justify-around flex-wrap gap-4'>
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
			<Button href="#home">Back to Home</Button>
		</section>
	);
}