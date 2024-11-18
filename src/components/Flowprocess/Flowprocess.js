import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const steps = [
  {
    icon: <AssignmentIcon style={{ fontSize: 50 }} />,
    title: 'Registration',
  },
  {
    icon: <PersonIcon style={{ fontSize: 50 }} />,
    title: 'Profile Creation',
  },
  {
    icon: <PostAddIcon style={{ fontSize: 50 }} />,
    title: 'Job Posting',
    description: ['Post Requirements', 'Real-time Dashboard'],
  },
  {
    icon: <GroupIcon style={{ fontSize: 50 }} />,
    title: 'Recruitment Specialist',
    description: ['Dedicated Support', 'Requirement Refinement'],
  },
  {
    icon: <SearchIcon style={{ fontSize: 50 }} />,
    title: 'Candidate Sourcing',
    description: ['Candidate Search', 'Screening'],
  },
  {
    icon: <HowToRegIcon style={{ fontSize: 50 }} />,
    title: 'Final Hiring',
    description: ['Final Shortlist'],
  },
  {
    icon: <EventNoteIcon style={{ fontSize: 50 }} />,
    title: 'Interview Coordination',
    description: ['Regular updates', 'Interview Coordination'],
  },
];

const Flowprocess = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
        Process Flow for Recruiting Companies
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  {step.icon}
                  <Typography variant="h6" align="center">
                    {step.title}
                  </Typography>
                  {step.description &&
                    step.description.map((desc, idx) => (
                      <Typography key={idx} variant="body2" align="center">
                        {desc}
                      </Typography>
                    ))}
                </Box>
              </Paper>
            </Grid>
            {index < steps.length - 1 && (
              <Grid item xs={12} sm={1} md={1} display="flex" justifyContent="center">
                <ArrowForwardIcon style={{ fontSize: 30 }} />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Flowprocess;
