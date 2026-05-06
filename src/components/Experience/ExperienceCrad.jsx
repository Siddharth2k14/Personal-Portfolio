import { Box, Card, CardContent, Typography } from "@mui/material";
import { Button } from "../ui/Button";

const experienceData = [
    {
        company: "Academy of Skill Development",
        logo: "https://res.cloudinary.com/dim4ekyz9/image/upload/v1778090498/asdindia_logo_ixf7g7.jpg",
        role: "Data Analyst Intern",
        duration: "Jun 2024 - Jul 2024",
        location: "Kolkata, India",
    },
    {
        company: "Tatva AI",
        logo: "https://res.cloudinary.com/dim4ekyz9/image/upload/v1778090592/tatavalogo__v2_0_dubb3o.png",
        role: "Software Developer Intern",
        duration: "May 2025 - Jul 2025",
        location: "Remote",
    },
    {
        company: "SimDaas Autonomy Pvt. Ltd.",
        logo: "https://res.cloudinary.com/dim4ekyz9/image/upload/v1778090497/download_xbaaji.png",
        role: "Adas Scenario Intern",
        duration: "Jan 2026 - Jul 2026",
        location: "Kanpur, India",
    },
    
]

export default function ExperienceCard () {
    return (
        <div className="m-2.5 bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] bg-fixed animate-gradient">
            <section id="experience" className="p-10 border-2 border-gray-100 rounded-3xl bg-slate-950/70 shadow-xl shadow-black/20">
                <div className="text-center mb-10">
                    <h2 className="font-pacifico text-3xl mb-3 text-gray-100">Experience</h2>
                    <p className="max-w-2xl mx-auto text-gray-300">
                        Experience is shown in clean slate cards with a consistent muted theme.
                    </p>
                </div>
                <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experienceData.map((experience, index) => (
                    <Card
                    key={index}
                    sx={{
                        backgroundColor: 'rgba(15,23,42,0.85)',
                        border: '1px solid rgba(148,163,184,0.25)',
                        boxShadow: '0 20px 45px rgba(0,0,0,0.2)',
                    }}
                    >
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                            {experience.logo && (
                                <Box
                                component="img"
                                src={experience.logo}
                                alt={experience.company}
                                sx={{
                                    width: 88,
                                    height: 88,
                                    objectFit: 'contain',
                                    mx: 'auto',
                                    mb: 2,
                                    borderRadius: '18px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                }}
                                />
                            )}
                            <Typography variant="h5" sx={{ color: '#f8fafc', fontWeight: 700, mb: 1 }}>
                                {experience.company}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#cbd5e1', mb: 4 }}>
                                {experience.location}
                            </Typography>
                            <Box sx={{ border: '1px solid rgba(148,163,184,0.2)', backgroundColor: 'rgba(15,23,42,0.65)', borderRadius: '24px', p: 3 }}>
                                <Typography variant="h6" sx={{ color: '#e2e8f0', fontWeight: 600, mb: 1 }}>
                                    {experience.role}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                                    {experience.duration}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
                <div className="mt-10 text-center">
                    <Button href="#home">Back to Home</Button>
                </div>
            </section>
        </div>
    )
}