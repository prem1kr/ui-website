import React from 'react';
import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PercentIcon from '@mui/icons-material/Percent';

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#E6F1FC', // Light blue background
        padding: '4rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Box display="flex" alignItems="center" mb={2}>
              <SearchIcon sx={{ fontSize: '2rem', color: '#1976d2' }} />
              <Typography variant="h6" sx={{ marginLeft: '0.5rem', color: '#1976d2' }}>
                Welcome to
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '1rem' }}
            >
              Easy Job
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', marginBottom: '2rem' }}>
              We bridge the gap between job seekers and recruiting companies, providing tailored
              support for both. Job seekers find ideal opportunities, while recruiters access top
              talent quickly and efficiently, making the hiring process seamless and successful for
              all.
            </Typography>
            <Box display="flex" gap={2}>
              <Button variant="contained" color="primary" size="large">
                I’m a Job Seeker
              </Button>
              <Button variant="outlined" color="primary" size="large">
                I’m Hiring
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box position="relative">
            {/* Image */}
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1573497019765-4ac6e6c462e2"
              alt="Team Meeting"
              sx={{
                borderRadius: '1rem',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '300px',
                width: '100%',
              }}
            />
            {/* Icons */}
            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                backgroundColor: '#fff',
                padding: '0.5rem',
                borderRadius: '50%',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <InsertDriveFileIcon color="success" />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                backgroundColor: '#fff',
                padding: '0.5rem',
                borderRadius: '50%',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <PercentIcon color="success" />
            </Box>
          </Box>
        </Grid>

        {/* Bottom Icons */}
        <Box
          position="absolute"
          bottom="5%"
          left="5%"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <BusinessIcon sx={{ fontSize: '2rem', color: 'red' }} />
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutUs;
