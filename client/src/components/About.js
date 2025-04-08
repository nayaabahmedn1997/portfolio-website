import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import profilePhoto from '../assets/profile.jpg';

const About = () => {
  const handleDownloadResume = () => {
    // This will be connected to the backend API
    window.open('/api/resume/download', '_blank');
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            sx={{ fontWeight: 700, mb: 6 }}
            data-aos="fade-down"
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                }}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mb: 3,
                    border: '4px solid #2196f3',
                  }}
                  alt="Your Name"
                  src={profilePhoto}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }} data-aos="fade-up" data-aos-delay="200">
                  Nayaab Ahmed N
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom data-aos="fade-up" data-aos-delay="300">
                  Full Stack Developer
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }} data-aos="fade-up" data-aos-delay="400">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon color="primary" />
                    <Typography>nayaabahmedn@gmaail.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOnIcon color="primary" />
                    <Typography>Bangalore</Typography>
                  </Box>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    onClick={handleDownloadResume}
                    sx={{ mt: 2 }}
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    Download Resume
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }} data-aos="fade-left" data-aos-delay="200">
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }} data-aos="fade-up" data-aos-delay="300">
                  Professional Summary
                </Typography>
                <Typography variant="body1" paragraph data-aos="fade-up" data-aos-delay="400">
                Full Stack MERN Developer certified from GUVI, with a strong foundation in JavaScript ecosystem (React.js, Node.js, Express.js, MongoDB). Bringing 3 years of hands-on experience in embedded systems development and 1.8 years as a Process Associate at Amazon, where I honed my problem-solving skills and process optimization abilities. Passionate about building scalable web applications, I combine technical expertise from embedded programming with operational excellence gained in a fast-paced corporate environment. Eager to leverage my unique blend of hardware and software experience to develop robust full-stack solutions.
                </Typography>
                <Typography variant="body1" paragraph data-aos="fade-up" data-aos-delay="500">
                After 4.8 years in embedded systems (3 years) and Amazon operations (1.8 years), I've successfully pivoted to web development through GUVI's intensive MERN stack program.
                <br />
                My unique background brings:
                <br />
                ✓ Embedded developer's attention to system architecture
                <br />
                ✓ Proven ability to master new technologies quickly
                <br />
                ✓ Full stack capabilities with JavaScript ecosystem
                <br />
                </Typography>
                <Typography variant="body1" paragraph data-aos="fade-up" data-aos-delay="600">
                  I am passionate about continuous learning and growth, both in my professional and personal life. 
                  I am enthusiastic about exploring new opportunities that challenge and expand my skills. The 
                  prospect of working in an environment that fosters continuous learning and skill development 
                  aligns with my belief that there is always room for improvement.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 3 }} data-aos="fade-up" data-aos-delay="700">
                  Education
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }} data-aos="fade-up" data-aos-delay="800">
                  <SchoolIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Bachelor in Electrical and Electronics Engineering
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      VTU | 2014 - 2018
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 3 }} data-aos="fade-up" data-aos-delay="900">
                  Work Experience
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }} data-aos="fade-up" data-aos-delay="1000">
                  <WorkIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Software Developer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cyient | May 2024 - Present
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                    <ul>
                      <li>Developed firmware in C using Eclipse IDE, performed unit/integration testing with LDRA, and executed Hardware-System Integration (HSI) testing via Eclipse RTT.</li>
                      <li> Gained expertise in low-level debugging, test automation, and cross-functional hardware-software validation.</li>
                    </ul>
                    </Typography>
                  </Box>

                 
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }} data-aos="fade-up" data-aos-delay="1100">
                  <WorkIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Software Developer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Aeronautical Development Agency | Feb 2022 - Feb 2024
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                    <ul>
                      <li>Developed RTOS-based embedded software for the Head-Up Display (HUD) system in the Tejas MK1A aircraft.</li>
                      <li> Performed unit testing and validation using HCL One Test to ensure reliability and compliance with avionics standards.</li>
                    </ul>
                    </Typography>
                  </Box>
                </Box>


                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }} data-aos="fade-up" data-aos-delay="1100">
                  <WorkIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Process Associate
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   Amazon | Dec 2019 - July 2021
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                    <ul>
                      <li>Worked as a Process Associate, responsible for ensuring accurate and timely product pricing across systems.</li>
                      <li>Maintained pricing consistency, performed audits, and collaborated with cross-functional teams to support business operations.</li>
                    </ul>
                    </Typography>
                  </Box>
                </Box>


                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }} data-aos="fade-up" data-aos-delay="1100">
                  <WorkIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Scada Developer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Protocol Automation Technologies Pvt. Ltd. | Dec 2018 - May 2019
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                    <ul>
                      <li> Design efficient SCADA designs using Movicon.</li>
                      
                    </ul>
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 