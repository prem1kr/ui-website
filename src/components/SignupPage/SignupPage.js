import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Box, GlobalStyles, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Animation keyframes for the form appearance
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SignupPage = () => {
  const navigate = useNavigate(); // Create a navigate instance

  return (
    <CssVarsProvider>
      {/* Global styles */}
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
            fontFamily: "Roboto, sans-serif",
            overflow: "hidden", // Prevent scrolling on the page
          },
        }}
      />

      {/* Background Box */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack form and image on mobile, side by side on larger screens
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden", // Prevent scrolling within this container
          gap: { xs: 2, sm: "5%", md: "10%" }, // Adjust gap between image and form based on screen size
        }}
      >
        {/* Left Image */}
        <Box
          component="img"
          src="./logo.png" // Replace with your image path
          alt="Signup Illustration"
          sx={{
            objectFit: "cover",
            borderRadius: "8px",
            backgroundColor: "white",
            width: { xs: "80%", sm: "450px", md: "500px", lg: "600px" }, // Responsive image width
            height: { xs: "250px", sm: "300px", md: "400px", lg: "500px" }, // Responsive image height
            maxWidth: "100%", // Prevent image overflow
          }}
        />

        {/* Signup Form */}
        <Sheet
          sx={{
            width: "100%",
            maxWidth: 350,
            padding: { xs: 4, sm: 4, md: 5 }, // Responsive padding
            display: "flex",
            flexDirection: "column",
            backgroundColor: "transparent",
            gap: 2,
            textAlign: "center",
            animation: `${fadeInUp} 1s ease-out`,
            marginTop: { xs: 2, sm: 0 }, // Adjust margin top on smaller screens
          }}
          variant="soft"
        >
          {/* Signup Form Content */}
          <Box sx={{ flex: 1 }}>
            <Typography level="h3" component="h1" sx={{ mb: 1 }}>
              Sign Up
            </Typography>
            <Typography level="body-sm" sx={{ color: "text.secondary", mb: 2 }}></Typography>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                sx={{
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": { borderColor: "primary.solidHoverBg" },
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Create a password"
                sx={{
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": { borderColor: "primary.solidHoverBg" },
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                <input type="checkbox" /> I agree to the terms and conditions
              </FormLabel>
            </FormControl>
            <Button
              sx={{
                mt: 2,
                width: "100%",
                backgroundColor: "primary.solidBg",
                "&:hover": { backgroundColor: "primary.solidHoverBg" },
              }}
              onClick={() => navigate("/verification")} // Navigate to VerificationPage
            >
              Sign Up
            </Button>
            <Typography
              fontSize="sm"
              sx={{ alignSelf: "center", mt: 2, color: "text.secondary" }}
            >
              Already have an account?{" "}
              <Button
                variant="text"
                onClick={() => navigate("/login")} // Navigate to LoginPage
                sx={{
                  color: "primary.solidBg",
                  textTransform: "none",
                  padding: 0,
                  minWidth: 0,
                }}
              >
                Log in
              </Button>
            </Typography>
          </Box>
        </Sheet>
      </Box>
    </CssVarsProvider>
  );
};

export default SignupPage;
