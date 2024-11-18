import React from 'react';
import { Box, Grid, Typography, TextField, Button, Card, CardMedia} from '@mui/material';

const DownloadPage = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      {/* Download Section */}
      <Card sx={{ display: 'flex', padding: '20px', backgroundColor: '#e0e0e0', marginBottom: '20px' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            Download Easy Job App
          </Typography>
          <Typography variant="body1" mb={2}>
            - Resume Build assistance<br />
            - Training for Interviews<br />
            - Direct Contact to Company HRs
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <img
              src="https://via.placeholder.com/120x40.png?text=Google+Play"
              alt="Google Play"
              style={{ cursor: 'pointer' }}
            />
            <img
              src="https://via.placeholder.com/120x40.png?text=App+Store"
              alt="App Store"
              style={{ cursor: 'pointer' }}
            />
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <img
            src="https://via.placeholder.com/150"
            alt="QR Code"
            style={{ width: '150px', height: '150px', marginBottom: '10px' }}
          />
          <Typography variant="body2">Scan QR to download App</Typography>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: '250px', objectFit: 'contain', marginLeft: '20px' }}
          image="https://via.placeholder.com/250"
          alt="App Screenshots"
        />
      </Card>

      {/* Contact Us Section */}
      <Grid container spacing={4}>
        {/* Contact Info */}
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: '#eef4ff', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" mb={2}>
              Feel free to contact us any time, Easy Job will always love to hear from you.
            </Typography>
            <Typography variant="body2">
              <strong>General Enquiry:</strong> <a href="tel:+918945671230">+91-8945671230</a><br />
              <strong>HR & Recruitment:</strong> <a href="tel:+918945671230">+91-8945671230</a><br />
              <strong>SMS, Voice Call, WhatsApp, Ads:</strong> <a href="tel:+918945671230">+91-8945671230</a><br />
            </Typography>
            <Typography variant="body2" mt={2}>
              <strong>Send Email:</strong> info@dortexai.com / hr@dortexai.com<br />
              <strong>Address:</strong> SECTOR 112, LANDRAN, KHARAR BANUR HWY, SAHIBZADA AJIT SINGH NAGAR, PUNJAB 140307<br />
              Phone: <a href="tel:18002003575">1800 200 3575</a>
            </Typography>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <Typography variant="h5" gutterBottom>
              For any query
            </Typography>
            <Typography variant="body2" mb={2}>
              Reach us
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Full Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Email" type="email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Phone" type="tel" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Company" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
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
                sx={{ marginTop: '10px', display: 'block', marginLeft: 'auto' }}
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

export default DownloadPage;
