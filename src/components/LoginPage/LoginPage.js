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
        top: "10px",
        right: "10px",
        zIndex: 10,
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

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
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
          background: "linear-gradient(135deg, #8e44ad, #3498db, #1abc9c, #f39c12)",
          backgroundSize: "300% 300%",
          animation: `${gradientShift} 8s ease infinite`, // Gradient animation
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Circles */}
        <Box
          sx={{
            position: "absolute",
            width: 150,
            height: 150,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            top: "20%",
            left: "10%",
            animation: `${float} 4s ease-in-out infinite`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            bottom: "15%",
            right: "10%",
            animation: `${float} 6s ease-in-out infinite`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            bottom: "30%",
            left: "20%",
            animation: `${float} 5s ease-in-out infinite`,
          }}
        />

        {/* Login Form */}
        <Sheet
          sx={{
            width: "100%",
            maxWidth: 400,
            padding: 4,
            borderRadius: "md",
            boxShadow: "lg",
            backgroundColor: "background.level1",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: "center",
          }}
          variant="soft"
        >
          <Typography level="h4" component="h1" sx={{ mb: 1 }}>
            Welcome!
          </Typography>
          <Typography level="body-sm" sx={{ color: "text.secondary", mb: 2 }}>
            Sign in to continue.
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

          {/* Forgot Password Button */}
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
              mt: 2,
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
    </CssVarsProvider>
  );
};

export default LoginPage;
