import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const Testimonials = () => {
  // Data for testimonials and stats
  const testimonials = [
    {
      name: 'Sarah K.',
      title: 'Marketing Specialist',
      text: "This platform made my job search so much easier! The matching feature connected me with roles that perfectly fit my skills and experience. I found my dream job within weeks of signing up!",
      avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    },
    {
      name: 'Sarah T.',
      title: 'Graphic Designer',
      text: "I love how user-friendly the platform is. The resume builder and job recommendations were incredibly helpful, and I could easily track my applications. It’s the best tool I’ve used for job searching!",
      avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    },
    {
      name: 'John S.',
      title: 'Software Developer',
      text: "Thanks to this platform, I found a role that aligns perfectly with my career goals. The process was smooth, from setting up my profile to getting interview notifications. It took a lot of stress out of the job search!",
      avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Candidates', icon: '👩‍💼' },
    { number: '15,000+', label: 'Happy Users', icon: '😊' },
    { number: '500+', label: 'Companies', icon: '🏢' },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Candidate Testimonials
      </Typography>

      {/* Testimonials Section */}
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: 'center', padding: '20px' }}>
              <Avatar
                alt={testimonial.name}
                src={testimonial.avatar}
                sx={{ width: 80, height: 80, margin: '0 auto 10px' }}
              />
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {testimonial.title}
                </Typography>
                <Typography variant="body2" mt={2}>
                  {testimonial.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Stats Section */}
      <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
        <Typography variant="h5" mb={2}>
          "Trusted by Over"
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ textAlign: 'center', padding: '20px' }}>
                <Typography variant="h3" component="div">
                  {stat.icon}
                </Typography>
                <Typography variant="h4">{stat.number}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" mt={3}>
          and Growing Every Day!
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonials;
