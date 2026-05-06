import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import DownloadIcon from '@mui/icons-material/Download';

const Certificate = ({ certificateFile,
    certificateTitle,
    isBlurred = false,
    onHover,
    onLeave,
    certificateImage }) => {
    // console.log("Certificate props:", props);

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        if (onHover) onHover();
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (onLeave) onLeave();
    };

    return (
        <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                position: 'relative',
                minHeight: 320,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                filter: isBlurred ? "blur(4px)" : "none",
                transition: "filter 0.3s, transform 0.3s",
                backgroundColor: 'rgba(15, 23, 42, 0.90)',
                color: '#fff',
                borderRadius: 24,
                border: '1px solid rgba(148, 163, 184, 0.2)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.25)',
                '&:hover': {
                    transform: 'translateY(-6px)',
                },
            }}
            elevation={0}
        >
            {/* Certificate Image */}
            <img
                src={certificateImage}
                alt={certificateTitle}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    filter: isBlurred ? "blur(4px) brightness(0.7)" : "brightness(0.7)",
                    transition: "filter 0.3s",
                    borderRadius: "12px",
                }}
            />
            {/* Download button */}
            {hovered && (
                <IconButton
                    component="a"
                    href={certificateFile}
                    download
                    sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        zIndex: 2,
                        bgcolor: "rgba(148, 163, 184, 0.9)",
                        color: '#0f172a',
                        '&:hover': { bgcolor: 'rgba(148, 163, 184, 1)' },
                    }}
                >
                    <DownloadIcon sx={{ color: '#0f172a' }} />
                </IconButton>
            )}
            {/* CardHeader at the bottom */}
            <CardHeader
                sx={{
                    position: "relative",
                    zIndex: 2,
                    bgcolor: "rgba(15, 23, 42, 0.92)",
                    color: "#e2e8f0",
                    textAlign: "center",
                    padding: "20px 0 16px 0",
                    backdropFilter: "blur(10px)",
                    mt: "auto",
                    borderTop: '1px solid rgba(148, 163, 184, 0.2)',
                }}
                title={
                    <Typography variant="h6" sx={{ color: '#e2e8f0', fontWeight: 600 }}>
                        {certificateTitle}
                    </Typography>
                }
            />
        </Card>
    );
};

export default Certificate;