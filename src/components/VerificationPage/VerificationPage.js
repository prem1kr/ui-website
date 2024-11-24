import React, { useEffect } from "react";
import { Box, Typography, Button, TextField, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const navigate = useNavigate(); // Create a navigate instance

  useEffect(() => {
    // Prevent scrolling by applying overflow: hidden to both html and body
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Clean up to reset overflow style when the component is unmounted
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #ffffff, #f0f4f8)",
        overflow: "hidden", // Prevent scrolling on the page
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        {/* Left Section with Image */}
        <Grid
          item
          xs={8}
          md={5}
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allow the input fields to wrap on smaller screens
            justifyContent: "center", // Center image on mobile
            alignItems: "center",
            backgroundColor: "transparent",
            position: "relative",
            left: "15%",
            padding: { xs: "20px", sm: "20px", md: "40px" }, // Adjust padding for better spacing
          }}
        >
          <img
            src="./verification.png" // Replace with the correct path to your image
            alt="Verification"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          />
        </Grid>

        {/* Right Section with Form */}
        <Grid
          item
          xs={12}
          md={7} // Take up more space on larger screens
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1px",
            width: "60%",
            maxWidth: "600px",
            textAlign: "center",
            justifyContent: "center",
            height: "80%", // Ensure the form is vertically centered
            position: "relative",
            top: "10%",
            overflow: "hidden", // Prevent scrolling within the form area
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Verification
          </Typography>
          <Typography sx={{ mb: 4, color: "gray" }}>
            Please enter the verification code
            <br />
            Sent to <strong>Gmail</strong>
          </Typography>

          {/* Code Input */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              flexWrap: "wrap", // Allow the input fields to wrap on smaller screens
            }}
          >
            {Array(6)
              .fill("")
              .map((_, index) => (
                <TextField
                  key={index}
                  variant="outlined"
                  inputProps={{
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      width: "20px",
                      height: "20px",
                      fontSize: "15px",
                    },
                  }}
                />
              ))}
          </Box>

          {/* Verify Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002855",
              color: "#fff",
              padding: "10px 10px",
              fontSize: "16px",
              margin: "10px",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
              width: "60%", // Ensure button stretches across the form on mobile
            }}
          >
            Verify Now
          </Button>

          {/* Resend Code and Login Links */}
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Link href="#" underline="hover" sx={{ color: "#0056b3", mb: 1 }}>
              Resend code
            </Link>
            <Typography sx={{ mt: 1, color: "gray" }}>
              Already have an account?{" "}
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#0056b3" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerificationPage;
