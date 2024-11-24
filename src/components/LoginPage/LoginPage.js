import React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box, GlobalStyles, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

const LoginPage = () => {
  const navigate = useNavigate();

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
          {/* Left Side Image */}
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
            }}
          />

          {/* Login Form */}
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
            }}
            variant="soft"
          >
            <Typography level="h3" component="h1" sx={{ mb: 1 }}>
              Login
            </Typography>

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
                placeholder="password"
                sx={{
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": { borderColor: "primary.solidHoverBg" },
                }}
              />
            </FormControl>

            <Button
              sx={{
                mt: 2,
                width: "100%",
                backgroundColor: "primary.solidBg",
                "&:hover": {
                  backgroundColor: "primary.solidHoverBg",
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              Log in
            </Button>

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
