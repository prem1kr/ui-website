import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const CanidateProcess = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#F9FAFC",
        minHeight: "75vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#4CAF50" }}
      >
        Process flow for Candidates
      </Typography>

      {/* Main Grid */}
      <Grid container spacing={4} justifyContent="center">
        {/* Left Panel */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Paper elevation={3} sx={{ padding: 2, display: "flex", alignItems: "center" }}>
              <PersonAddAltIcon fontSize="large" color="primary" sx={{ marginRight: 2 }} />
              <Typography variant="h6">Profile Registration</Typography>
            </Paper>
            <Paper elevation={3} sx={{ padding: 2, display: "flex", alignItems: "center" }}>
              <DescriptionIcon fontSize="large" color="success" sx={{ marginRight: 2 }} />
              <Typography variant="h6">Resume Building</Typography>
            </Paper>
            <Paper elevation={3} sx={{ padding: 2, display: "flex", alignItems: "center" }}>
              <SearchIcon fontSize="large" color="action" sx={{ marginRight: 2 }} />
              <Typography variant="h6">Job Discovery</Typography>
            </Paper>
            <Paper elevation={3} sx={{ padding: 2, display: "flex", alignItems: "center" }}>
              <SendIcon fontSize="large" color="warning" sx={{ marginRight: 2 }} />
              <Typography variant="h6">Application Submission</Typography>
            </Paper>
            <Paper elevation={3} sx={{ padding: 2, display: "flex", alignItems: "center" }}>
              <ScheduleIcon fontSize="large" color="secondary" sx={{ marginRight: 2 }} />
              <Typography variant="h6">Job Scheduling</Typography>
            </Paper>
          </Stack>
        </Grid>

        {/* Right Panel - Process */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <DescriptionIcon fontSize="large" color="primary" />
                <Typography variant="h6">Profile Creation</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <WorkIcon fontSize="large" color="success" />
                <Typography variant="h6">Career Creation</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <DescriptionIcon fontSize="large" color="warning" />
                <Typography variant="h6">Resume Creation</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <SendIcon fontSize="large" color="info" />
                <Typography variant="h6">Application Submission</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <WorkIcon fontSize="large" color="success" />
                <Typography variant="h6">Interview</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <AssignmentTurnedInIcon fontSize="large" color="primary" />
                <Typography variant="h6">Job Offer</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <SupportAgentIcon fontSize="large" color="secondary" />
                <Typography variant="h6">Career Support</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};



export default CanidateProcess;
