import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

const DownloadPage = () => {
  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px" },
        backgroundColor: "#f9f9f9",
        minHeight: "50vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
          backgroundColor: "#D9D9D9",
          marginBottom: "20px",
          gap: { xs: "20px", md: "0" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: "20px", md: "32px" } }}
          >
            Download Easy Job App
          </Typography>
          <Typography
            variant="body1"
            mb={2}
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            - Resume Build assistance
            <br />
            - Training for Interviews
            <br />
            - Direct Contact to Company HRs
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src="playstore-.png"
              alt="Google Play"
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "120px",
              }}
            />
            <img
              src="appstore-.png"
              alt="App Store"
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "120px",
              }}
            />
          </Box>
        </Box>

        {/* QR Code Section */}
        <Box
          sx={{
            textAlign: "center",
            flex: 1,
          }}
        >
          <img
            src="Qr.png"
            alt="QR Code"
            style={{
              width: "150px",
              height: "150px",
              marginBottom: "20px",
              backgroundColor: "transparent",
              borderRadius: "20px",
            }}
          />
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "12px", md: "14px" } }}
          >
            Scan QR to download App
          </Typography>
        </Box>

        {/* Phone Image */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: "200px", md: "300px" },
            height: { xs: "200px", md: "300px" },
            objectFit: "contain",
            backgroundColor: "transparent",
            borderRadius: "40px",
          }}
          image="phoneimage.png"
          alt="App Screenshots"
        />
      </Card>
    </Box>
  );
};

export default DownloadPage;
