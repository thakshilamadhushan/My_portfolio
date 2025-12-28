import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const navItems = ["Home", "About me", "Journey", "Skills", "Projects", "Lense", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Top App Bar */}
      <AppBar position="fixed" elevation={1}
       sx={{
            backgroundColor: "rgba(29, 29, 29, 0.7)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)", // Safari
        }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Logo */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ cursor: "none" }}
          >
            Thakshila<span style={{ color: "#1976d2" }}>.</span>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: "white",
                  fontWeight: 500,
                  "&:hover": { color: "#1976d2" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" }}}
        PaperProps={{sx: {backgroundColor: "rgba(29, 29, 29, 0.7)",},backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)"}}
        
      >
        <Box sx={{ width: 250, color:"white" }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${item.toLowerCase()}`}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
}
