import React from "react";
import { Box, Grid,  CardMedia } from "@mui/material";

const Process = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: { xs: "1rem", sm: "4rem", md: "6rem" },
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4}>
        
        {/* Left Section - Image */}
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 1 }}>
        Process Flow for Recruiting companies
          <CardMedia
        
            component="img"
            image="cproceess.png" // Replace with your left image URL
            alt="Process Step 1"
            sx={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
             background:"transparent",
             color:"green"

            }}
          />
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2  }}>
        Process Flow for Canidates
          <CardMedia
            component="img"
            image="cpocess1.png" // Replace with your right image URL
            alt="Process Step 2"
            sx={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
              

            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Process;
