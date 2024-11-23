import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { keyframes } from '@mui/system';

// Keyframe animation for fading in
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframe animation for background gradient
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const VerificationPage = () => {
  const [otp, setOtp] = useState(""); // To store OTP input
  const [timer, setTimer] = useState(60); // Timer countdown
  const [resendDisabled, setResendDisabled] = useState(true); // Disable resend initially

  // Handle OTP input
  const handleChange = (event) => {
    const { value } = event.target;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  // Handle OTP submission
  const handleVerify = () => {
    if (otp.length === 6) {
      console.log("Verifying OTP:", otp);
      // Add verification logic here (e.g., API call)
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  // Handle resend OTP
  const handleResend = () => {
    console.log("Resending OTP...");
    setTimer(60);
    setResendDisabled(true);
  };

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }

    // Prevent scrolling on the body and html elements
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // Restore scroll on cleanup
      document.documentElement.style.overflow = "auto";
    };
  }, [timer]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        height: "100vh",
        background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
        backgroundSize: "400% 400%",
        animation: `${gradientAnimation} 15s ease infinite`, // Apply background animation
        overflow: "hidden", // Prevent scrolling on the page
      }}
    >
      <Card
        sx={{
          width: 400,
          padding: 3,
          boxShadow: 3,
          animation: `${fadeIn} 0.8s ease-out`,
          overflow: "hidden", // Prevent scroll within the card
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 2, textAlign: "center", color: "#333" }}
          >
            Verify Your Account
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "center", color: "#555" }}
          >
            Please enter the 6-digit OTP sent to your registered email or phone number.
          </Typography>

          {/* OTP Input */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 2 }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleChange}
              inputProps={{
                maxLength: 6,
                style: {
                  textAlign: "center",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5rem",
                  padding: "10px",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease-in-out",
                },
                "& .MuiOutlinedInput-root:focus": {
                  boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)", // Focus shadow effect
                },
              }}
            />
          </Stack>

          {/* Verify Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleVerify}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              mb: 2,
              width: "100%",

              padding: "12px",
              backgroundColor: "#007BFF",
              boxShadow: "0 4px 15px rgba(0, 123, 255, 0.2)",
              "&:hover": {
                backgroundColor: "#0056b3",
                boxShadow: "0 6px 20px rgba(0, 123, 255, 0.3)",
              },
            }}
          >
            Verify
          </Button>

          {/* Timer and Resend Section */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, color: "#555"  }}
          >
            {timer > 0
              ? `Resend OTP in ${timer} seconds`
              : "Didn't receive the OTP?"}
          </Typography>

          <Button
            variant="text"
            color="primary"
            disabled={resendDisabled}
            onClick={handleResend}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: resendDisabled ? "#bbb" : "#007BFF",
              "&:hover": {
                color: resendDisabled ? "#bbb" : "#0056b3",
              },
            }}
          >
            Resend OTP
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VerificationPage;
