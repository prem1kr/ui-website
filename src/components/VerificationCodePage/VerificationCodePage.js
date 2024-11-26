import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@mui/system";

// Animation keyframes
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const scaleOnFocus = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const VerificationCodePage= () => {
  const [code, setCode] = useState(""); // State to hold the verification code
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    // Mock verification process
    console.log("Code verified:", code);
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor:"white",
        overflow: "hidden",
        animation: `${fadeIn} 1s ease-out`, // Page fade-in effect
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
         
          animation: `${fadeIn} 1.5s ease-out`, // Grid fade-in effect
        }}
      >
        {/* Left Section with Image */}
        <Grid
          item
          xs={8}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "20px", sm: "20px", md: "40px" },
            animation: `${slideInLeft} 1s ease-out`, // Image slide-in effect
          }}
        >
          <img
            src="./verification.png"
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
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1px",
            width: "60%",
            maxWidth: "600px",
            textAlign: "center",
            justifyContent: "center",
            height: "80%",
            position: "relative",
            top: "10%",
            overflow: "hidden",
            animation: `${fadeIn} 1.5s ease-out`, // Form fade-in effect
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
              flexWrap: "wrap",
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
                  value={code[index] || ""}
                  onChange={(e) => {
                    const newCode = [...code];
                    newCode[index] = e.target.value;
                    setCode(newCode.join(""));
                  }}
                  sx={{
                    "&:focus": {
                      animation: `${scaleOnFocus} 0.2s forwards`, // Focus animation
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
                transform: "scale(1.05)", // Button scale effect
                transition: "transform 0.2s ease",
              },
              width: "60%",
            }}
            onClick={handleVerify} // Handle verification on button click
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

export default VerificationCodePage;
