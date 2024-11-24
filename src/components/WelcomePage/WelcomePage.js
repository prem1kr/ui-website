import React from 'react';
import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const WelcomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#00000040', // Light blue background
        padding: { xs: '1rem', md: '5rem' }, // Adjusted padding for smaller screens
        minHeight: '85vh',
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
              <Typography
                variant="h6"
                sx={{ marginLeft: '0.5rem', color: '#1976d2', fontSize: { xs: '1rem', md: '1.25rem' } }}
              >
                Welcome to
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                marginBottom: '1rem',
                fontSize: { xs: '2rem', md: '3rem' }, // Adjust font size for mobile
              }}
            >
              Easy Job
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                marginBottom: '2rem',
                fontSize: { xs: '0.875rem', md: '1rem' }, // Adjust font size for mobile
              }}
            >
              We bridge the gap between job seekers and recruiting companies, providing tailored
              support for both. Job seekers find ideal opportunities, while recruiters access top
              talent quickly and efficiently, making the hiring process seamless and successful for
              all.
            </Typography>
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
              <Button variant="contained" color="primary" size="large" fullWidth={false}>
                I’m a Job Seeker
              </Button>
              <Button variant="outlined" color="primary" size="large" fullWidth={false}>
                I’m Hiring
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Image */}
            <CardMedia
              component="img"
              image="welcomepage.png"
              alt="Team Meeting"
              sx={{
                borderRadius: '1rem',
                height: { xs: '250px', md: '400px' }, // Adjust height for mobile
                width: { xs: '100%', md: '400px' }, // Adjust width for mobile
                objectFit: 'cover',
                
              }}
            />
            {/* Icons */}
            <Box
              sx={{
                position: 'absolute',
                top: '20%',
                right: '70%',
                backgroundColor: '#fff',
                padding: '0.5rem',
                borderRadius: '50%',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: '65%',
                right: '20%',
                backgroundColor: '#fff',
                padding: '0.5rem',
                borderRadius: '50%',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
            </Box>
          </Box>
        </Grid>

        {/* Bottom Icons */}
        <Box
          position="relative"
          bottom="5%"
          left="5%"
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            display: { xs: 'none', sm: 'flex' }, // Only show on larger screens
          }}
        >
        </Box>
      </Grid>
    </Box>
  );
};

export default WelcomePage;
