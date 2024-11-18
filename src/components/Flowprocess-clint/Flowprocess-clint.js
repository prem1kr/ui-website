import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SendIcon from '@mui/icons-material/Send';
import EventIcon from '@mui/icons-material/Event';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const steps = [
  {
    icon: <AccountCircleIcon style={{ fontSize: 50 }} />,
    title: 'Profile Registration',
    nextStep: 'Profile Creation'
  },
  {
    icon: <CreateIcon style={{ fontSize: 50 }} />,
    title: 'Resume Building',
    nextStep: 'Resume Creation'
  },
  {
    icon: <SchoolIcon style={{ fontSize: 50 }} />,
    title: 'Job Discovery',
    nextStep: 'Interview'
  },
  {
    icon: <WorkIcon style={{ fontSize: 50 }} />,
    title: 'Application Submission',
    nextStep: 'Job Offer'
  },
  {
    icon: <SendIcon style={{ fontSize: 50 }} />,
    title: 'Job Scheduling',
    nextStep: 'Career Support'
  },
];

const finalSteps = [
  {
    icon: <CreateIcon style={{ fontSize: 50 }} />,
    title: 'Profile Creation'
  },
  {
    icon: <EmojiPeopleIcon style={{ fontSize: 50 }} />,
    title: 'Career Creation'
  },
  {
    icon: <CreateIcon style={{ fontSize: 50 }} />,
    title: 'Resume Creation'
  },
  {
    icon: <SendIcon style={{ fontSize: 50 }} />,
    title: 'Application Submission'
  },
  {
    icon: <EventIcon style={{ fontSize: 50 }} />,
    title: 'Interview'
  },
  {
    icon: <WorkIcon style={{ fontSize: 50 }} />,
    title: 'Job Offer'
  },
  {
    icon: <SchoolIcon style={{ fontSize: 50 }} />,
    title: 'Career Support'
  }
]

const App = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
        Process Flow for Candidates
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

      <Typography variant="h6" gutterBottom align="center" sx={{ marginTop: 4 }}>
        Detailed Steps
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {finalSteps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {step.icon}
                <Typography variant="h6" align="center">
                  {step.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
