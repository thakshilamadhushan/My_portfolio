import {Box,Typography, Card, CardContent, CardMedia, Grid} from "@mui/material";

import OLSchoolImg from "../assets/MyJourney/seelananda_m.v.png";
import ALSchoolImg from "../assets/MyJourney/rajasinghe_central.jpg";
import Supervisor from "../assets/MyJourney/kelanivalley.jpg";
import UniversityImg from "../assets/MyJourney/university.jpg";
import TASLogo from "../assets/MyJourney/TAS_logo.jpg";
import PythonBeg from "../assets/MyJourney/PythonForBeginners.jpg";
import WebDesignBeg from "../assets/MyJourney/WebDesignForBeginners.jpg";
import FrontEndWebDesign from "../assets/MyJourney/FrontEndWebDevelopment.jpg";
import AICertificate from "../assets/MyJourney/Coursera_Google_AI_Essentials.jpg";

const journeyData = [
  {
    title: "Kg/ Dehi Sri Seelananda M.V.",
    role: "G.C.E. Ordinary Level (O/ L)",
    year: "2009 – 2019",
    image: OLSchoolImg,
    description: ["A - 4", "B - 5", "C - 1"]
  },
  {
    title: "Rajasinghe Central College - Ruwanwella",
    role: "G.C.E. Advanced Lvel (A/ L), Engineering Technology",
    year: "2020 – 2022",
    image: ALSchoolImg,
    description:["Engineering Technology - C", "Science for Technology - C", "Information & Communication Technology - A",]
  },
  {
    title: "Kelani Estate | KelaniValley Plantations PLC",
    role: "Supervisor",
    year: "2023 – 2024",
    image: Supervisor,
    description:["Prepared GMR documentation, managed tea holder location data, created land polygons using Google Earth, and organized operational records using Excel."]
  },
  {
    title: "Gampaha Wickramarachchi University of Indigenous Medicine",
    role: "BHSc (Hons) Health Information & Communication Technology",
    year: "2024 – Present",
    image: UniversityImg,
    description:["Focused on full-stack development, health information systems, database management, and modern web technologies."]
  },
  {
    title: "Technological Advancement Society (TAS)",
    role: "Vice President",
    year: "2025 – Present",
    image: TASLogo,
    description:["Leading technical initiatives, organizing workshops, competitions and mentoring junior members."]
  },
  {
    title: "Python for Beginners",
    role: "University of Moratuwa",
    year: "2025 - March",
    image: PythonBeg,
    description:["Completed a Python for Beginners course at the University of Moratuwa, learning fundamentals of Python programming, problem-solving, and scripting."]
  },
  {
    title: "Web Design For Beginners",
    role: "University of Moratuwa",
    year: "2025 - August",
    image: WebDesignBeg,
    description:["Completed a Web Design for Beginners course at the University of Moratuwa, learning fundamentals of HTML, CSS, and responsive design."]
  },
  {
    title: "Front-End Web Development",
    role: "University of Moratuwa",
    year: "2025 - October",
    image: FrontEndWebDesign,
    description:["Completed a Front-End Web Development course at the University of Moratuwa, learning HTML, CSS, JavaScript, and Angular for building interactive web interfaces."]
  },
  {
    title: "Google AI Essentials",
    role: "Coursera",
    year: "2025 - October",
    image: AICertificate,
    description:["This course provided a strong foundation in understanding and applying Artificial Intelligence in everyday work."]
  },
];

export default function journey(){
    return(
        <>
       <Box >
            <Typography variant="h4" fontWeight="bold" textAlign="center" my={6}>
                My Journey
            </Typography>

            <Grid container spacing={5} justifyContent={"center"}>
                {journeyData.map((item, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                    <Card
                    sx={{
                        width: {md: 300},
                        height: "100%",
                        backgroundColor: "rgba(26, 26, 26, 0.75)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "18px",
                        boxShadow: "0 0 25px rgba(0,194,255,0.15)",
                        transition: "0.4s",
                        "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 0 35px rgba(0,194,255,0.3)",
                        },
                    }}
                    >
                    {/* Image */}
                    <CardMedia
                        component="img"
                        height="200"
                        image={item.image}
                        alt={item.title}
                        sx={{
                        objectFit: "cover",
                        }}
                    />

                    {/* Content */}
                    <CardContent>
                        <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="#00C2FF"
                        >
                        {item.title}
                        </Typography>

                        <Typography variant="body2" color="#B0C7E6">
                        {item.role}
                        </Typography>

                        <Typography
                        variant="caption"
                        display="block"
                        color="#7FA6D6"
                        mb={1}
                        >
                        {item.year}
                        </Typography>
                        {item.description?.map((desc, i) => (
                            <Typography key={i} variant="body2" color="#D6E4FF" sx={{ fontSize: 13,display: "block"}}>
                            {desc}
                            </Typography>
                        ))}
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Box> 
        </>

    );
}