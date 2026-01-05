import {Box, Grid, Typography, Card} from "@mui/material";
import Profile from "../assets/about.png";
import { FaLaptopCode, FaMicrochip, FaBolt, FaCameraRetro, } from "react-icons/fa";
import { keyframes } from "@mui/system";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const skills = [
  { label: "Full-Stack", icon: <FaLaptopCode /> },
  { label: "IoT", icon: <FaBolt /> },
  { label: "Electronics", icon: <FaMicrochip /> },
  { label: "Photography", icon: <FaCameraRetro /> },
];

export default function about(){
    return(
        <>
        <Box>
            <h3>About me</h3>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} gap={{md:20}}>
            <Box
                component="img"
                src={Profile}
                alt="Profile"
                sx={{
                    display: { xs: "none", md: "flex" },
                    width: 300,
                    height: "auto",
                    borderRadius:"50%",
                    objectFit:"cover",
                    filter: "drop-shadow(0 18px 25px rgba(0, 150, 255, 0.35))",
                    animation: "float 4s ease-in-out infinite",
                            "@keyframes float": {
                            "0%": { transform: "translateY(0px)" },
                            "50%": { transform: "translateY(-15px)" },
                            "100%": { transform: "translateY(0px)" }
                            }
                }}
                />
            <Box>
                <Box textAlign={"justify"}>
                    <p>I’m a passionate <span style={{fontWeight:700, color:"#38bdf8"}}>Full-Stack and Web Developer</span> who enjoys building modern, responsive, and user-friendly web applications. I focus on creating clean UI, efficient backend systems, and scalable solutions using modern web technologies.
                        Beyond web development, I have a strong interest in <span style={{fontWeight:700, color:"#38bdf8"}}>electronics and IoT</span>, where I enjoy working with <span style={{fontWeight:700, color:"#38bdf8"}}>ESP32 and Arduino</span> to build smart, connected systems that interact with real-world data.
                        When I’m not coding or building circuits, I enjoy <span style={{fontWeight:700, color:"#38bdf8"}}>nature photography</span>, capturing landscapes and moments that inspire creativity and attention to detail—skills that also influence my design and development work.</p>
                </Box>
                <Box>
                    <Grid container spacing={3} mt={3}>
                        {skills.map((skill, index) => (
                            <Grid item xs={6} sm={3} key={skill.label}>
                            <Card
                                sx={{
                                width: 110,
                                textAlign: "center",
                                p: 2,
                                borderRadius: "16px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                animation: `${float} 3s ease-in-out infinite`,
                                cursor: "default",
                                }}
                            >
                                <Box
                                sx={{
                                    fontSize: "3rem",
                                    color: "#38bdf8",
                                    mb: 1,
                                }}
                                >
                                {skill.icon}
                                </Box>
                                <Typography variant="subtitle1" fontWeight={600} color="white">
                                {skill.label}
                                </Typography>
                            </Card>
                            </Grid>
                        ))}
                        </Grid>
                </Box>
            </Box>   
        </Box>
        </>
    );
}