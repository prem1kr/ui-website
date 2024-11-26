import React, { useState, useEffect } from "react";
import logo from "./logo.png"; // Import the logo file
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
import { useNavigate, useLocation } from "react-router-dom";

// Hide AppBar on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="scrolldown" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [marginTop, setMarginTop] = useState(64); // Default AppBar height for small screens
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Adjust margin-top dynamically based on AppBar height
    const appBarElement = document.querySelector(".MuiAppBar-root");
    if (appBarElement) {
      setMarginTop(appBarElement.offsetHeight);
    }
  }, []);

  // Menu items with IDs
  const menuItems = [
    { label: "Home", id: "/" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Clients", id: "clients" },
    { label: "Contact Us", id: "contact" },
    { label: "Testimonial", id: "testimonial" },
  ];

  // Filter out the Home button if on the Home page
  const filteredMenuItems =
    location.pathname === "/"
      ? menuItems.filter((item) => item.label !== "Home")
      : menuItems;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleHomeClick = () => {
    // Navigate to the home page directly
    navigate("/");
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="default"
          sx={{
            backgroundColor: "#ffffff",
            boxShadow: "none",
            zIndex: 1300,
            padding: { xs: "0 8px", md: "0 16px" },
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
                marginRight: 1,
                cursor: "pointer", // Makes the logo clickable
              }}
              onClick={handleHomeClick} // Navigate to Home when clicked
            />

            {/* "EASY JOB" Text */}
            <Typography
              variant={{ xs: "subtitle1", md: "h6" }}
              sx={{
                fontWeight: "bold",
                cursor: "pointer", // Makes the text clickable
              }}
              onClick={handleHomeClick} // Navigate to Home when clicked
            >
              EASY JOB
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                justifyContent: "center",
              }}
            >
              {filteredMenuItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#007BFF",
                      transform: "scale(1.1)",
                      transition: "all 0.3s",
                    },
                  }}
                  onClick={() => {
                    if (item.label === "Home") {
                      handleHomeClick(); // Navigate to home if Home is clicked
                    } else {
                      scrollToSection(item.id); // Scroll to other sections
                    }
                  }}
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
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#007BFF",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                  },
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Box>

            {/* Hamburger Menu */}
            <IconButton
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {filteredMenuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.label === "Home") {
                    handleHomeClick(); // Navigate to home if Home is clicked
                  } else {
                    scrollToSection(item.id); // Scroll to other sections
                  }
                  handleDrawerToggle();
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

      {/* Margin to prevent content overlap */}
      <Box sx={{ marginTop: `${marginTop}px`, display: "none" }}></Box>
    </>
  );
};

export default Navbar;
