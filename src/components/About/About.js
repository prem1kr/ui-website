import React from "react";
import { Box, Grid, Typography, CardMedia } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: "2rem", md: "4rem" },
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Section - Image */}
        <Grid item xs={12} md={6}>
          <CardMedia 
            component="img"
            image='about.png' // Replace with your image URL
            alt="Who are we?"
            sx={{
              borderRadius: "1rem",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>

        {/* Right Section - Text Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" }, 
            }} 
          >
            Who are we?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            "We are a modern recruitment platform dedicated to bridging the gap
            between job seekers and recruiters. Our mission is to simplify the
            hiring process by providing tools and support to help companies
            find top talent and candidates achieve their career goals."
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "0.5rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            For Companies
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            "For companies, we offer an end-to-end hiring solution that
            includes candidate sourcing, pre-screening, and interview
            coordination. With advanced filters and tailored recruitment
            support, we ensure you connect with the right professionals quickly
            and efficiently."
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "0.5rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            For Candidates
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            "For job seekers, our platform provides personalized job
            recommendations, resume-building tools, and career guidance to help
            you land your dream job. Whether you’re just starting or looking to
            advance, we’ve got you covered."
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "0.5rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: "1.8",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            "With our innovative approach, we aim to create a seamless
            experience for both employers and candidates, making recruitment
            faster, smarter, and stress-free."
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
