import { Box } from "@mui/material";
import Video from "../assets/ElectronicCircuit.mp4";

const BackgroundVideo = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none"
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15, // 👈 low opacity
        }}
      >
        <source src={Video} type="video/mp4" />
      </Box>
    </Box>
  );
};

export default BackgroundVideo;
