import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from './logo.png';  // Import the logo file

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
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation

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
  const [marginTop, setMarginTop] = useState(64); // Default AppBar height for small screens
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  useEffect(() => {
    // Adjust margin-top dynamically based on AppBar height
    const appBarElement = document.querySelector(".MuiAppBar-root");
    if (appBarElement) {
      setMarginTop(appBarElement.offsetHeight);
    }
  }, []);

  // Menu items with paths
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Clients", path: "/clients" },
    { label: "Contact Us", path: "/contact" },
  ];

  // Filter out the Home button if on the Home page
  const filteredMenuItems =
    location.pathname === "/"
      ? menuItems.filter((item) => item.label !== "Home")
      : menuItems;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="default"
          sx={{
            backgroundColor: "#ffffff",
            boxShadow: "none",
            padding: 0,
            zIndex: 1300,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
            {/* Logo */}
            <Box
              component="img"
              src={logo}  // Use the imported logo variable

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
              {filteredMenuItems.map((item) => (
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
                onClick={() => navigate("/login")}
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
          {filteredMenuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
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

      {/* Main content with dynamic margin */}
      <Box
        sx={{
          marginTop: location.pathname === "/" ? 0 : `${marginTop}px`, // No margin for Home
          padding: 2, // Add some padding for content
        }}
      >
        {/* Add your page content here */}
      </Box>
    </>
  );
};

export default Navbar;
