import {Box, Typography, Grid, Card} from "@mui/material";
import { styled } from "@mui/system";

import Word from "../assets/skills/Word.png";
import Excel from "../assets/skills/Excel.png";
import PowerPoint from "../assets/skills/PowerPoint.png";
import Visio from "../assets/skills/Visio.png";
import Photoshop from "../assets/skills/Photoshop.png";
import Illustrator from "../assets/skills/Illustrator.png";
import PremierePro from "../assets/skills/PremierPro.png";
import Figma from "../assets/skills/Figma.png";
import Python from "../assets/skills/Python.png";
import Html from "../assets/skills/HTML.png";
import Css from "../assets/skills/CSS.png";
import JavaScript from "../assets/skills/JavaScript.png";
import Php from "../assets/skills/PHP.png";
import MySQL from "../assets/skills/MySQL.png";
import Java from "../assets/skills/Java.png";
import CLogo from "../assets/skills/C.png";
import Arduino from "../assets/skills/Arduino.png";
import PacketTracer from "../assets/skills/CiscoPacketTracer.png";
import React from "../assets/skills/React.png";
import Nodejs from "../assets/skills/NodeJS.png";

const skillLogos = {
  Word: Word,
  Excel: Excel,
  PowerPoint: PowerPoint,
  Visio: Visio,
  Photoshop: Photoshop,
  Illustrator: Illustrator,
  PremierePro: PremierePro,
  Figma: Figma,
  Python: Python,
  HTML: Html,
  CSS: Css,
  JavaScript: JavaScript,
  PHP: Php,
  MySQL: MySQL,
  Java: Java,
  C: CLogo,
  Arduino: Arduino,
  PacketTracer: PacketTracer,
  React: React,
  Nodejs: Nodejs,
};

const skillsData = [
  {
    category: "Office & Productivity",
    skills: ["Word", "Excel", "PowerPoint", "Visio"],
  },
  {
    category: "Design & Creative",
    skills: ["Photoshop", "Illustrator", "PremierePro", "Figma"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Java", "C"],
  },
  {
    category: "Hardware & Networking",
    skills: ["Arduino", "PacketTracer"],
  },
  {
    category: "Web Development / Frameworks",
    skills: ["React", "Nodejs"],
  },
];

const SkillCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  width: 50,
  height: 50,
  backgroundColor: "rgba(48, 48, 48, 0.5)",
  color: "white",
  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
  borderRadius: 16,
  transition: "transform 0.3s",
}));

export default function Skills(){
    return(
        <Box sx={{ py: 8, px: 4 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" my={6}>
                Skills
            </Typography>

            {skillsData.map((category) => (
                <Box key={category.category} sx={{ mb: 6 }}>
                <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
                    {category.category}
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                    {category.skills.map((skill) => (
                    <Grid item key={skill}>
                        <SkillCard>
                        <img
                            src={skillLogos[skill]}
                            alt={skill}
                            style={{ width: 50, height: 50, objectFit: "contain", marginBottom: 10 }}
                        />
                        <Typography variant="subtitle2">{skill}</Typography>
                        </SkillCard>
                    </Grid>
                    ))}
                </Grid>
                </Box>
            ))}
        </Box>
    );
}