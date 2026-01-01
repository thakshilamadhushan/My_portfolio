import {Box} from "@mui/material";
import BackgroundVideo from "./backgroundVideo";
import Profile from "../assets/Profile_Image.png";


export default function home(){
    return(
        <>
        <BackgroundVideo/>
        <Box sx={{
            scrollMarginTop: "50px",
            paddingY: 5,
        }}>

        <Box display={"flex"} flexDirection={{xs:"column", md: "row"}} alignContent={"center"} justifyContent={"center"} alignItems={"center"} gap={{md:20}}>
            
            <Box textAlign={"left"}>
                <h3>Hi, I am Thakshila Madhushan</h3>
                <h1>Fullstack Developer</h1>
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