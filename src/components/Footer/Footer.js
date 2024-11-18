import React from "react";
import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", padding: "40px 20px", borderTop: "1px solid #ddd" }}>
      <Grid container spacing={4}>
        {/* Quick Links */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Typography>
            <Link href="#" underline="hover" color="inherit">Home</Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" color="inherit">About Us</Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" color="inherit">Services</Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" color="inherit">Clients</Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" color="inherit">Contact Us</Link>
          </Typography>
        </Grid>

        {/* Partners */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Partners
          </Typography>
          <Typography>DortexAI Pvt Ltd</Typography>
          <Typography>Webtoks IT Solutions</Typography>
          <Typography>Webtuks IT Solutions</Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Stay Connected
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "10px" }}>
            <Facebook fontSize="large" sx={{ cursor: "pointer" }} />
            <Twitter fontSize="large" sx={{ cursor: "pointer" }} />
            <Email fontSize="large" sx={{ cursor: "pointer" }} />
            <Instagram fontSize="large" sx={{ cursor: "pointer" }} />
            <LinkedIn fontSize="large" sx={{ cursor: "pointer" }} />
          </Box>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            For latest news and updates
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            Stay updated with our latest job opportunities, recruitment tips, and career insights. 
            Subscribe to our newsletter and never miss an update on your job search journey!
          </Typography>
          <Box component="form" sx={{ display: "flex", gap: "10px" }}>
            <TextField
              label="Enter your mail here"
              variant="outlined"
              size="small"
              fullWidth
            />
            <Button variant="contained" color="primary" size="small">
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ marginTop: "40px", textAlign: "center", borderTop: "1px solid #ddd", paddingTop: "20px" }}>
        <Typography variant="body2" color="textSecondary">
          Terms Of Use | Privacy Policy | Accessibility
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Copyright © DortexAI Pvt Ltd 2024. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
