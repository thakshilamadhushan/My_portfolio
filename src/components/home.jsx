import {Box} from "@mui/material";
import BackgroundVideo from "./backgroundVideo";
import Profile from "../assets/Profile_Image.png";


export default function home(){
    return(
        <>
        <BackgroundVideo/>
        <Box >

        <Box display={"flex"} flexDirection={{xs:"column-reverse", md: "row"}} alignContent={"center"} justifyContent={"center"} alignItems={"center"} gap={{md:20}}>
            
            <Box textAlign={"left"}>
                <h2>Hi, I am</h2>
                <h1>Thakshila Madhushan Ranjith</h1>
                <h3>Full-Stack Developer | Web Developer | Software • Electronics • IoT | Nature Photographer</h3>
                <button> Download CV</button>
            </Box>
            <Box
                component="img"
                src={Profile}
                alt="Profile"
                sx={{
                    width: { xs: 310, sm: 500, md: 500 },
                    height: "auto"
                }}
                />
            
        </Box>
        </Box>
        </>
    );
}