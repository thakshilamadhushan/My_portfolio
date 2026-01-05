import {Box, Button, Typography, IconButton, Link} from "@mui/material";
import BackgroundVideo from "./backgroundVideo";
import Profile from "../assets/Profile_Image.png";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';


function useInView(options = { threshold: 0.5 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function useTyping(text, speed, active) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!active) return;

    setDisplayText(""); // reset
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, active]);

  return displayText;
}


export default function home(){
    const [ref, inView] = useInView();
    const name = useTyping("Thakshila Madhushan", 100, inView);
    const [showTagline, setShowTagline] = useState(false);

    // trigger tagline after typing finishes
    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => setShowTagline(true), 100);
            return () => clearTimeout(timer);
        } else {
            setShowTagline(false);
        }
    }, [inView, name]);


    return(
        <>
        <BackgroundVideo/>
        <Box alignItems={"center"}>

        <Box display={"flex"} flexDirection={{xs:"column-reverse", md: "row"}} alignContent={"center"} justifyContent={"center"} alignItems={"center"} gap={{md:20}}>
            
            <Box ref={ref} textAlign={{ xs: "center", md: "left" }}>
                {/* Intro */}
                <Typography variant="h5" sx={{ opacity: 0.8 }}>Hi, I am</Typography>

                {/* Typing Name */}
                <Typography
                    variant="h3"
                    sx={{
                    fontWeight: "bold",
                    minHeight: "48px",
                    background: "linear-gradient(270deg, #00e5ff, #2979ff, #7c4dff)",
                    backgroundSize: "400% 400%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    borderRight: "3px solid #00e5ff",
                    display: "inline-block",
                    pr: 1,
                    animation: "gradientMove 6s ease infinite, blink 1s infinite",
                    "@keyframes blink": {
                        "0%, 100%": { borderColor: "transparent" },
                        "50%": { borderColor: "#00e5ff" }
                    },
                    "@keyframes gradientMove": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                        "100%": { backgroundPosition: "0% 50%" }
                    }
                    }}
                >
                    {name}
                </Typography>

                {/* Tagline */}
                <Typography
                    variant="h6"
                    sx={{
                    mt: 2,
                    color: "rgba(255,255,255,0.75)",
                    opacity: showTagline ? 1 : 0,
                    transform: showTagline ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.8s ease", // smooth fade + slide
                    }}
                >
                    Full-Stack Developer | Web Developer | Electronics & IOT Enthusiast | Nature Photographer
                </Typography>

                {/* Button */}
                <Button
                    sx={{
                    mt: 4,
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#00e5ff",
                    border: "2px solid #00e5ff",
                    borderRadius: "30px",
                    background: "transparent",
                    transition: "all 0.4s ease",
                    boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                    "&:hover": {
                        background: "#00e5ff",
                        color: "#000",
                        boxShadow: "0 0 40px rgba(0,229,255,0.8)",
                        transform: "translateY(-3px)"
                    }
                    }}
                >
                    Download CV
                </Button>
                <Box mt={3} display={"flex"}>
                    <Link href="https://linkedin.com/in/thakshila-madhushan-834457336" target="_blank" rel="noopener">
                        <IconButton
                            sx={{
                            color: "#ffffffff",          
                            "&:hover": {
                                color: "#0055d4ff",      
                                transform: "scale(1.2)",
                            },
                            transition: "0.3s",
                            }}
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="1x" />
                        </IconButton>
                    </Link>

                    <Link href="https://github.com/thakshilamadhushan" target="_blank" rel="noopener">
                        <IconButton
                            sx={{
                            color: "#ffffffff",          
                            "&:hover": {
                                color: "#0055d4ff",      
                                transform: "scale(1.2)",
                            },
                            transition: "0.3s",
                            }}
                        >
                            <FontAwesomeIcon icon={faGithub} size="1x" />
                        </IconButton>
                    </Link>

                    <Link href="https://x.com/thakshila000" target="_blank" rel="noopener">
                        <IconButton
                            sx={{
                            color: "#ffffffff",          
                            "&:hover": {
                                color: "#0055d4ff",      
                                transform: "scale(1.2)",
                            },
                            transition: "0.3s",
                            }}
                        >
                            <FontAwesomeIcon icon={faXTwitter} size="1x" />
                        </IconButton>
                    </Link>

                    <Link href="https://youtube.com/@codeandcurrentelectronics" target="_blank" rel="noopener">
                        <IconButton
                            sx={{
                            color: "#ffffffff",          
                            "&:hover": {
                                color: "#0055d4ff",      
                                transform: "scale(1.2)",
                            },
                            transition: "0.3s",
                            }}
                        >
                            <FontAwesomeIcon icon={faYoutube} size="1x" />
                        </IconButton>
                    </Link>

                    <Link href="https://facebook.com/thakshila.madushan.73/" target="_blank" rel="noopener">
                        <IconButton
                            sx={{
                            color: "#ffffffff",          
                            "&:hover": {
                                color: "#0055d4ff",      
                                transform: "scale(1.2)",
                            },
                            transition: "0.3s",
                            }}
                        >
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </IconButton>
                    </Link>

                    <Link href="https://instagram.com/_thakshila_madushan_/" target="_blank" rel="noopener">
                        <IconButton
                            sx={{
                            color: "#ffffffff",          
                            "&:hover": {
                                color: "#0055d4ff",      
                                transform: "scale(1.2)",
                            },
                            transition: "0.3s",
                            }}
                        >
                            <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </IconButton>
                    </Link>
                </Box>
            </Box>
            <Box
                component="img"
                src={Profile}
                alt="Profile"
                sx={{
                    width: { xs: 310, sm: 500, md: 500 },
                    height: "auto",
                    filter: "drop-shadow(0 18px 25px rgba(0, 150, 255, 0.35))",
                    animation: "float 4s ease-in-out infinite",
                            "@keyframes float": {
                            "0%": { transform: "translateY(0px)" },
                            "50%": { transform: "translateY(-15px)" },
                            "100%": { transform: "translateY(0px)" }
                            }
                }}
                />
            
          </Box>
        </Box>
        </>
    );
}