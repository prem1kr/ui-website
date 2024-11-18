import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Menu items
  const menuItems = ["Home", "About Us", "Services", "Clients", "Contact Us"];

  // Handle drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" color="default" sx={{ boxShadow: "none" }}>
        <Toolbar>
          {  }
          <Box
            component="img"
            src="https://s3-alpha-sig.figma.com/img/93ff/7624/fed4a22252b20edf845883d254431e04?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvfOh~JFg3WG7r0JLerFJTLC36rvOEGqzjmL7B-0ZCFjmyBClPZKUUAQe4RK960Rfkd9bRFriN8GH-~HNnh~lPCZ1Kq0i5xSFuuF-KqxybV49yT2QrUhLe2uVFM17~cihLo6vJmpyZcKLiaZQ6kCyT~E6OC1MfnBuej-qXZz4s~hN8i1WSTd3ZymUDasMqPFkNs~tcPl3dXYFwU3kwE7IJkoU~SpkgjsMY8uxpbCoTecsqJtqZRz1qpnG9XanWQlLPeCJqR-RrVxUMbCSKWMO6rgITgHTww6HmBIjfRCQLWa88Tc0BHCscCtlkRpzdhARLGT-GMzre8c8Ggrzd9xDg__" // Replace with your logo path
            alt="Logo"
            sx={{ width: 50, height: 50, marginRight: 1 }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginRight: "auto" }}
          >
            EASY JOB
          </Typography>

          {/* Center menu links for desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => (
              <Button key={item} sx={{ color: "black", fontWeight: "500" }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Social Media Icons */}
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
          </Box>

          {/* Hamburger menu for mobile */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
