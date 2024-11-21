import React, { useState } from "react";
import './Navbar.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Hide AppBar on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Menu items with paths
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Clients", path: "/clients" },
    { label: "Contact Us", path: "/contact" },
  ];

  // Handle drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="default"
          sx={{
            backgroundColor: "#ffffff", // Set background to white
            boxShadow: "none",
            padding: 0,
            zIndex: 1300,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
            {/* Logo */}
            <Box
              component="img"
              src="https://s3-alpha-sig.figma.com/img/93ff/7624/fed4a22252b20edf845883d254431e04?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvfOh~JFg3WG7r0JLerFJTLC36rvOEGqzjmL7B-0ZCFjmyBClPZKUUAQe4RK960Rfkd9bRFriN8GH-~HNnh~lPCZ1Kq0i5xSFuuF-KqxybV49yT2QrUhLe2uVFM17~cihLo6vJmpyZcKLiaZQ6kCyT~E6OC1MfnBuej-qXZz4s~hN8i1WSTd3ZymUDasMqPFkNs~tcPl3dXYFwU3kwE7IJkoU~SpkgjsMY8uxpbCoTecsqJtqZRz1qpnG9XanWQlLPeCJqR-RrVxUMbCSKWMO6rgITgHTww6HmBIjfRCQLWa88Tc0BHCscCtlkRpzdhARLGT-GMzre8c8Ggrzd9xDg__"
              alt="Logo"
              sx={{ width: 50, height: 50, marginRight: 1 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }} className="navbar-name">
              EASY JOB
            </Typography>

            {/* Center menu links for desktop */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                justifyContent: "center",
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: "black",
                    fontWeight: "500",
                    "&:hover": {
                      color: "#007BFF",
                      transform: "scale(1.1)",
                      transition: "all 0.3s",
                    },
                  }}
                  onClick={() => navigate(item.path)} // Navigate to respective path
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Social Media and Login */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                color: "blue",
              }}
            >
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  backgroundColor: "#007BFF",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                  },
                }}
                onClick={() => navigate("/login")} // Navigate to LoginPage
              >
                Login
              </Button>
            </Box>

            {/* Hamburger menu for mobile */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#f4f4f4",
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path); // Navigate to respective path
                  handleDrawerToggle(); // Close the drawer
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#007BFF",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
