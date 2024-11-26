import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Box, GlobalStyles, keyframes } from "@mui/material";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { saveToken, saveRole } from '../Utilites/authUtils';

// Dark/Light Mode Toggle
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Select
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{
        position: "absolute",
        right: "10px",
        zIndex: 10,
        opacity: 0,
      }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

// Animation keyframes
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

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

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();
    // Mock API login
    const mockToken = "abcd1234"; // Replace with API response
    const mockRole = email === "admin@example.com" ? "admin" : "user"; // Mock role
    saveToken(mockToken);
    saveRole(mockRole);
    navigate("/dashboard");
  };

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
            overflow: "hidden", // Disable scrolling
            backgroundColor:"white"

          },
        }}
      />

      {/* Dark/Light Mode Toggle */}
      <ModeToggle />

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "300% 300%",
          animation: `${gradientShift} 8s ease infinite`,
          position: "relative",
          overflow: "hidden", // Prevent scrolling inside this container
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack form and image on small screens
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            gap: { xs: 2, sm: "5%", md: "10%" }, // Adjust gap based on screen size
            overflow: "hidden", // Prevent scrolling inside this container
          }}
        >
          {/* Left Side Image with slide-in animation */}
          <Box
            component="img"
            src="./logo.png" // Replace with your image path
            alt="Login Illustration"
            sx={{
              objectFit: "cover",
              borderRadius: "8px",
              backgroundColor: "white",
              width: { xs: "80%", sm: "400px", md: "500px", lg: "600px" }, // Responsive image width
              height: { xs: "250px", sm: "300px", md: "400px", lg: "500px" }, // Responsive image height
              maxWidth: "100%", // Prevent image overflow
              animation: `${slideInLeft} 1s ease-out`, // Apply slide-in effect
            }}
          />

          {/* Login Form with fade-in animation */}
          <Sheet
            sx={{
              width: "100%",
              maxWidth: 350,
              padding: { xs: 3, sm: 4, md: 5 }, // Responsive padding
              display: "flex",
              flexDirection: "column",
              backgroundColor: "transparent",
              gap: 2,
              textAlign: "center",
              marginTop: { xs: 2, sm: "5%" }, // Adjust margin top for smaller screens
              animation: `${fadeInUp} 1s ease-out`, // Apply fade-in effect for the form
            }}
            variant="soft"
          >
            <Typography level="h3" component="h1" sx={{ mb: 1 }}>
              Login
            </Typography>

            {/* Email Input */}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": { borderColor: "primary.solidHoverBg" },
                  transition: "transform 0.2s ease-in-out",
                  "&:focus": {
                    transform: "scale(1.05)", // Slight scale-up effect on focus
                  },
                }}
              />
            </FormControl>

            {/* Password Input */}
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": { borderColor: "primary.solidHoverBg" },
                  transition: "transform 0.2s ease-in-out",
                  "&:focus": {
                    transform: "scale(1.05)", // Slight scale-up effect on focus
                  },
                }}
              />
            </FormControl>

            {/* Login Button */}
            <Button
              sx={{
                mt: 2,
                width: "100%",
                backgroundColor: "primary.solidBg",
                "&:hover": {
                  backgroundColor: "primary.solidHoverBg",
                  transform: "scale(1.05)", // Apply scale effect on hover
                  transition: "transform 0.3s ease",
                },
              }}
              onClick={handleLogin} // Handle login on button click
            >
              Log in
            </Button>

            {/* Forgot Password and Sign Up Links */}
            <Button
              variant="text"
              sx={{
                mt: 1,
                color: "text.secondary",
                textTransform: "none",
                "&:hover": {
                  color: "primary.solidBg",
                  transition: "color 0.3s ease",
                },
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </Button>

            <Typography
              fontSize="sm"
              sx={{
                alignSelf: "center",
                mt: 1,
                color: "text.secondary",
                "&:hover": {
                  color: "primary.solidBg",
                  transition: "color 0.3s ease",
                },
              }}
            >
              Don't have an account?{" "}
              <Button
                variant="text"
                onClick={() => navigate("/signup")}
                sx={{
                  color: "primary.solidBg",
                  textTransform: "none",
                  padding: 0,
                  minWidth: 0,
                }}
              >
                Sign up
              </Button>
            </Typography>
          </Sheet>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default LoginPage;
