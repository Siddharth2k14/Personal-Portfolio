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
                minHeight: 300,
                width: 350,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                filter: isBlurred ? "blur(4px)" : "none",
                transition: "filter 0.3s",
                background: "transparent",
                color: "#fff",
                borderRadius: 3,
                boxShadow: 6,
            }}
            elevation={hovered ? 8 : 2}
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
                        bgcolor: "rgba(255,255,255,0.8)",
                        "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                    }}
                >
                    <DownloadIcon sx={{ color: "#222" }} />
                </IconButton>
            )}
            {/* CardHeader at the bottom */}
            <CardHeader
                sx={{
                    position: "relative",
                    zIndex: 2,
                    bgcolor: "rgba(0, 0, 0, 0.85)", // more opaque for better contrast
                    color: "white",
                    textAlign: "center",
                    padding: "20px 0 16px 0",
                    backdropFilter: "blur(10px)",
                    mt: "auto",
                }}
                title={
                    <Typography variant="h6" color="white">
                        {certificateTitle}
                    </Typography>
                }
            />
        </Card>
    );
};

export default Certificate;