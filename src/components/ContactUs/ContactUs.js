import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Phone, Email, Business, Message } from "@mui/icons-material";

const CombinedContactPage = () => {
  return (
    <Box
      id="contact" // ID to scroll to this section
      sx={{
        padding: { xs: "20px", sm: "30px", md: "40px" },
        backgroundColor: "#C2E4FD2E",
      }}
    >
      <Grid container spacing={4}>
        {/* Contact Info */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "transparent",
              padding: { xs: "10px", sm: "20px", md: "40px" },
              borderRadius: "8px",
              marginTop: { xs: "0", md: "5%" },
              textAlign: { xs: "center", md: "left" },
              position:"relative",
              top:"-15%"
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginBottom: "15px",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              mb={2}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Feel free to contact us anytime, Easy Job will always love to
              hear from you.
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <strong>General Enquiry:</strong>{" "}
              <a href="tel:+918945671230">
                <Phone sx={{ fontSize: 18, marginRight: 1 }} />
                +91-8945671230
              </a>
              <br />
              <strong>HR & Recruitment:</strong>{" "}
              <a href="tel:+918945671230">
                <Phone sx={{ fontSize: 18, marginRight: 1 }} />
                +91-8945671230
              </a>
              <br />
              <strong>SMS, Voice Call, WhatsApp, Ads:</strong>{" "}
              <a href="tel:+918945671230">
                <Phone sx={{ fontSize: 18, marginRight: 1 }} />
                +91-8945671230
              </a>
              <br />
            </Typography>
            <Typography
              variant="body2"
              mt={2}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <strong>Send Email:</strong>{" "}
              <a href="mailto:info@dortexai.com">
                <Email sx={{ fontSize: 18, marginRight: 1 }} />
                info@dortexai.com
              </a>{" "}
              /{" "}
              <a href="mailto:hr@dortexai.com">
                <Email sx={{ fontSize: 18, marginRight: 1 }} />
                hr@dortexai.com
              </a>
              <br />
              <strong>Address:</strong> SECTOR 112, LANDRAN, KHARAR BANUR HWY,
              SAHIBZADA AJIT SINGH NAGAR, PUNJAB 140307
              <br />
              Phone:{" "}
              <a href="tel:18002003575">
                <Phone sx={{ fontSize: 18, marginRight: 1 }} />
                1800 200 3575
              </a>
            </Typography>
          </Box>
        </Grid>

        {/* Enquiry Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: { xs: "15px", sm: "20px", md: "30px" },
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              For Any Query
            </Typography>
            <Typography
              variant="body2"
              mb={2}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Reach us by filling out the form below:
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Business sx={{ fontSize: 20, marginRight: 1 }} /> Full
                        Name
                      </>
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Email sx={{ fontSize: 20, marginRight: 1 }} /> Email
                      </>
                    }
                    type="email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Phone sx={{ fontSize: 20, marginRight: 1 }} /> Phone
                      </>
                    }
                    type="tel"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Business sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Company
                      </>
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ backgroundColor: "#F5F5F5", width: "100%" }}
                    label={
                      <>
                        <Message sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Message
                      </>
                    }
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: "10px",
                  display: "block",
                  marginLeft: "auto",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CombinedContactPage;
