import {Box, Typography, Card, CardMedia, CardContent, Chip, IconButton} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Tele from "../assets/projects/telemedicineConsultationPlatform.png";
import Travel from "../assets/projects/TourismTravelBookingSite.jpg";
import Gadget from "../assets/projects/WeatherTimeGadget.jpg";
import Portfolio from "../assets/projects/portfolio.png";
import WebServer from "../assets/projects/WebServer.jpg";

const projects = [
  {
    title: "Tourism Travel Booking Website",
    description: "A modern travel booking platform built with HTML, CSS, and JavaScript, featuring destination discovery, interactive booking forms, and a smooth, user-friendly UI for a seamless travel experience.",
    image: Travel,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/thakshilamadhushan/Travel-Booking-Site.git",
    live: "https://bestplacesinsrilanka.netlify.app/"
  },
  {
    title: "Telemedicine Consultation Platform",
    description: "A full-featured React healthcare platform with user & doctor login, patient registration, consultation booking with filters, video calls, chat, and feedback. Built with Git & GitHub for seamless collaboration, fully mobile-responsive.",
    image: Tele,
    tech: ["React", "MUI", "Git"],
    github: "https://github.com/thakshilamadhushan/Telemedicine_Consultation_Platform.git",
    live: "https://health-link-forbetterhealthcare.netlify.app/"
  },
  {
    title: "DIY Weather & Time Gadget",
    description: "DIY ESP32 Weather & Time Gadget with 1.3″ TFT display. Shows real-time clock, weather, temperature, humidity, day/date, and hourly alerts. Battery-powered, portable, and handcrafted with a copper wire frame for a futuristic look.",
    image: Gadget,
    tech: ["ESP32", "TFT LCD Display"],
    github: "https://github.com/thakshilamadhushan/-DIY-Weather-Time-Gadget.git",
    live: "https://youtu.be/ciXt4mDUitQ?si=ms59084JSGlCSVfJ"
  },
  {
    title: "Portfolio Website",
    description: "Showcasing my hands-on projects in web development, IoT, and electronics. Each project highlights real-world functionality, creative design, and modern technologies I’ve worked with.",
    image: Portfolio,
    tech: ["React", "MUI", "Framer Motion", "Git"],
    github: "https://github.com/thakshilamadhushan/My_portfolio.git",
    live: "https://thakshilamadhushan.netlify.app/"
  },
  {
    title: "ESP32 Web Server | Control Home Devices via WiFi",
    description: "Showcasing my hands-on projects in web development, IoT, and electronics. Each project highlights real-world functionality, creative design, and modern technologies I’ve worked with.",
    image: WebServer,
    tech: ["ESP32", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/thakshilamadhushan/My_portfolio.git",
    live: "https://thakshilamadhushan.netlify.app/"
  },
];

export default function Projects(){
    const containerRef = useRef(null);
    const [pause, setPause] = useState(false);

    const loopProjects = [...projects, ...projects];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const speed = 0.5;
        let rafId;

        const autoScroll = () => {
            if (!pause) {
                container.scrollLeft += speed;

                // seamless reset
                if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
                }
            }
            rafId = requestAnimationFrame(autoScroll);
            };

            autoScroll();
            return () => cancelAnimationFrame(rafId);
        }, [pause]);

    return(
        <Box>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mt={6} mb={3}>
                Projects
            </Typography>

            <Box
                ref={containerRef}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                onTouchStart={() => setPause(true)}
                onTouchEnd={() => setPause(false)}
                sx={{
                    width: {xs:310, sm: 750, md:"auto"},
                    display: "flex",
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    scrollSnapType: "x mandatory",
                    py: 2,
                    "&::-webkit-scrollbar": { display: "none" }
                }}
                >
                {loopProjects.map((project, index) => (
                    <Card
                        key={index}
                        sx={{
                            flex: "0 0 auto",
                            minWidth: {xs:290, sm:300 ,md:300},
                            maxWidth: {xs:290, sm:300 ,md:300},
                            mx: 1.5,
                            borderRadius: 3,
                            background: "rgba(0, 5, 49, 0.6)",
                            color: "#fff",
                            boxShadow: "0 5px 5px rgba(0,0,0,0.4)",
                            display: "flex",
                            flexDirection: "column",
                            height: 520, 
                        }}
                        >
                        <CardMedia
                            component="img"
                            height="200"
                            image={project.image}
                            alt={project.title}
                        />

                        <CardContent
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column"
                                }}>
                            <Typography variant="h6" fontWeight={600}>
                            {project.title}
                            </Typography>

                            <Typography variant="body2" sx={{ opacity: 0.8, my: 1 }}>
                            {project.description}
                            </Typography>

                            {/* Technologies */}
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: "auto"}}>
                            {project.tech.map((t, i) => (
                                <Chip
                                key={i}
                                label={t}
                                size="small"
                                sx={{
                                    backgroundColor: "#1976d2",
                                    color: "#fff",
                                    fontSize: "0.7rem"
                                }}
                                />
                            ))}
                            </Box>

                            {/* Links */}
                            <Box sx={{ display: "flex", justifyContent: "space-between", mt: "auto" }}>
                            <IconButton
                                component="a"
                                href={project.github}
                                target="_blank"
                                sx={{ 
                                    color: "#ffffffff",
                                    "&:hover": {
                                        color:"#0055d4ff"
                                    },
                                }}
                                
                            >
                                <GitHubIcon />
                            </IconButton>

                            <IconButton
                                component="a"
                                href={project.live}
                                target="_blank"
                                sx={{ 
                                    color: "#ffffffff",
                                    "&:hover": {
                                        color:"#0055d4ff"
                                    },
                                }}
                            >
                                <LaunchIcon />
                            </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
                </Box>
        </Box>
    );
}