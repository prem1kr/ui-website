import React from 'react';
import { Container, Grid, Typography, Box, Paper, Avatar } from '@mui/material';

const clients = [
  { name: 'Tech Mahindra', logo: '/path/to/tech-mahindra.png' },
  { name: 'Abacus', logo: '/path/to/abacus.png' },
  { name: 'DortexAI', logo: '/path/to/dortexai.png' },
  { name: 'Webtoks', logo: '/path/to/webtoks.png' },
  { name: 'Webtuks', logo: '/path/to/webtuks.png' },
  { name: 'Local Konnect', logo: '/path/to/local-konnect.png' }
];

const testimonial = {
  text: `I love how intuitive and efficient the platform is. We get access to a wide range of talented professionals, and the matching system helps us find the right fit for each role. It's become an essential part of our hiring strategy!`,
  author: 'Sophia L., Founder of CareerWave Partners',
  image: '/path/to/sophia-l.png'
};

const App = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
        Our Clients
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {clients.map((client, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src={client.logo} alt={client.name} style={{ maxWidth: '100%', height: 'auto' }} />
              <Typography variant="subtitle1" align="center">
                {client.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
        Client Testimonials
      </Typography>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={2}>
            <Avatar src={testimonial.image} alt="Sophia L." sx={{ width: 100, height: 100, margin: '0 auto' }} />
          </Grid>
          <Grid item xs={12} sm={8} md={10}>
            <Typography variant="h6">
              {testimonial.author}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              {testimonial.text}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
