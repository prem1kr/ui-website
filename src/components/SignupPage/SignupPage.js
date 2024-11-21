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
            overflow: "hidden", // Prevent scrolling
            fontFamily: "Roboto, sans-serif",
          },
        }}
      />

      {/* Background Box */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8e44ad, #3498db)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Animated Circle Decorations */}
        <Box
          sx={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.2)",
            animation: "float 6s infinite ease-in-out",
            top: "10%",
            left: "20%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            animation: "float 8s infinite ease-in-out",
            bottom: "15%",
            right: "15%",
          }}
        />

        {/* Signup Form */}
        <Sheet
          sx={{
            width: "90%",
            maxWidth: 400,
            padding: 4,
            borderRadius: "md",
            boxShadow: "lg",
            backgroundColor: "background.level1",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: "center",
            animation: `${fadeInUp} 1s ease-out`,
          }}
          variant="soft"
        >
          <Typography level="h4" component="h1" sx={{ mb: 1 }}>
            Create Account
          </Typography>
          <Typography level="body-sm" sx={{ color: "text.secondary", mb: 2 }}>
            Join us to explore endless possibilities!
          </Typography>

          <FormControl>
            
          </FormControl>
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
            <FormLabel >
              <input type="checkbox"/>
              Are you agree term&conditions
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
        </Sheet>
      </Box>
    </CssVarsProvider>
  );
};

export default SignupPage;
