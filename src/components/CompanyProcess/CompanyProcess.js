import React from 'react';
import { Box, Typography, Grid, Paper, Step, StepLabel, Stepper} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DoneIcon from '@mui/icons-material/Done';

const steps = [
  { label: 'Job Posting', icon: <WorkIcon />, color: '#8BC34A' },
  { label: 'Recruitment Specialist', icon: <PersonSearchIcon />, color: '#2196F3' },
  { label: 'Candidate Sourcing', icon: <GroupAddIcon />, color: '#616161' },
  { label: 'Final Hiring', icon: <DoneIcon />, color: '#FF9800' },
];

const CompanyProcess = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#F9FAFC', minHeight: '50vh' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Process for Companies Using a Recruitment Platform
      </Typography>

      {/* Stepper Section */}
      <Box sx={{ margin: '0 auto', maxWidth: 1200, padding: 2 }}>
        <Stepper alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    sx={{
                      backgroundColor: step.color,
                      borderRadius: '50%',
                      padding: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      color: 'white',
                    }}
                  >
                    {step.icon}
                  </Box>
                )}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Content Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, backgroundColor: '#E3F2FD' }}>
            <Typography variant="h6" gutterBottom>
              Registration
            </Typography>
            <AccountCircleIcon color="primary" fontSize="large" />
            <Typography variant="body2" mt={1}>
              Register your company and provide essential details to get started.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, backgroundColor: '#C8E6C9' }}>
            <Typography variant="h6" gutterBottom>
              Profile Completion
            </Typography>
            <WorkIcon color="success" fontSize="large" />
            <Typography variant="body2" mt={1}>
              Complete your company profile for better visibility to candidates.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, backgroundColor: '#FFCCBC' }}>
            <Typography variant="h6" gutterBottom>
              Interview Coordination
            </Typography>
            <GroupAddIcon color="warning" fontSize="large" />
            <Typography variant="body2" mt={1}>
              Coordinate interviews seamlessly with our integrated tools.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyProcess;
