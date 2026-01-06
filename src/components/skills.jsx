import {Box, Typography, Grid, Card} from "@mui/material";
import { styled } from "@mui/system";

import Python from "../assets/skills/Python.png";
import Html from "../assets/skills/HTML.png";
import Css from "../assets/skills/CSS.png";
import JavaScript from "../assets/skills/JavaScript.png";
import Php from "../assets/skills/PHP.png";
import MySQL from "../assets/skills/MySQL.png";
import Java from "../assets/skills/Java.png";
import CLogo from "../assets/skills/C.png";
import Word from "../assets/skills/Word.png";
import Excel from "../assets/skills/Excel.png";
import PowerPoint from "../assets/skills/PowerPoint.png";
import Visio from "../assets/skills/Visio.png";
import Photoshop from "../assets/skills/Photoshop.ico";
import Illustrator from "../assets/skills/Illustrator.ico";
import PremierePro from "../assets/skills/PremierePro.ico";
import Figma from "../assets/skills/Figma.ico";
import Arduino from "../assets/skills/Arduino.png";
import EasyEDA from "../assets/skills/EasyEDA.png";
import Proteus from "../assets/skills/Proteus.png";
import PacketTracer from "../assets/skills/CiscoPacketTracer.png";
import React from "../assets/skills/React.png";
import Nodejs from "../assets/skills/NodeJS.png";
import Firebase from "../assets/skills/Firebase.png";
import Angular from "../assets/skills/Angular.png";
import Git from "../assets/skills/Git.png";
import GitHub from "../assets/skills/GitHub.png";
import Npm from "../assets/skills/npm.png";
import VSCode from "../assets/skills/VSCode.png";

const skillLogos = {
  Python: Python,
  HTML: Html,
  CSS: Css,
  JavaScript: JavaScript,
  PHP: Php,
  MySQL: MySQL,
  Java: Java,
  C: CLogo,
  Word: Word,
  Excel: Excel,
  PowerPoint: PowerPoint,
  Visio: Visio,
  Photoshop: Photoshop,
  Illustrator: Illustrator,
  PremierePro: PremierePro,
  Figma: Figma,
  Arduino: Arduino,
  EasyEDA : EasyEDA,
  Proteus : Proteus,
  PacketTracer: PacketTracer,
  React: React,
  Nodejs: Nodejs,
  Firebase: Firebase,
  Angular : Angular,
  Git: Git,
  GitHub: GitHub,
  NPM: Npm,
  VSCode: VSCode,
};

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    category: "Office & Productivity",
    skills: ["Word", "Excel", "PowerPoint", "Visio"],
  },
  {
    category: "Design & Creative",
    skills: ["Photoshop", "Illustrator", "PremierePro", "Figma"],
  },
  {
    category: "Hardware & Networking",
    skills: ["Arduino", "EasyEDA", "Proteus", "PacketTracer"],
  },
  {
    category: "Web Development / Frameworks",
    skills: ["React", "Angular", "Nodejs", "Firebase"],
  },

  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "NPM", "VSCode"],
  },
];

const SkillCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  width: 60,
  height: 60,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
  borderRadius: 16,
  transition: "transform 0.3s",
}));

export default function Skills(){
    return(
        <Box>
            <Typography variant="h4" fontWeight="bold" textAlign="center" my={6}>
                Skills
            </Typography>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 10 }} justifyContent={"center"}>
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
            </Grid>
        </Box>
    );
}