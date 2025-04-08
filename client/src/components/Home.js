import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile.jpg';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import ApiIcon from '@mui/icons-material/Api';

const Home = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Redux', level: 80 },
    { name: 'Material-UI', level: 85 },
    { name: 'C', level: 85 },
  ];

  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React.js and modern frameworks.'
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Node.js and Express.js.'
    },
    {
      icon: <ApiIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'API Development',
      description: 'Creating RESTful APIs and integrating third-party services.'
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Full Stack Solutions',
      description: 'End-to-end development of web applications using the MERN stack.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: (theme) => 
            theme.palette.mode === 'dark' 
              ? 'linear-gradient(135deg, #0a1929 0%, #001e3c 100%)'
              : 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                data-aos="fade-right"
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Nayaab Ahmed N
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 500,
                  }}
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  Full Stack Developer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    maxWidth: '600px',
                  }}
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Passionate about creating efficient, scalable, and user-friendly applications.
                  Specialized in MERN stack development with a focus on delivering high-quality solutions.
                </Typography>
                <Box
                  sx={{ display: 'flex', gap: 2 }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Button
                    component={Link}
                    to="/projects"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Avatar
                  src={profilePhoto}
                  alt="Profile"
                  sx={{
                    width: { xs: 250, md: 350 },
                    height: { xs: 250, md: 350 },
                    border: '4px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, fontWeight: 700 }}
            data-aos="fade-down"
          >
            Technical Skills
          </Typography>
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={skill.name}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.level}%
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, fontWeight: 700 }}
            data-aos="fade-down"
          >
            What I Do
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={service.title}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {service.icon}
                  <Typography variant="h6" sx={{ my: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          background: (theme) => 
            theme.palette.mode === 'dark' 
              ? 'linear-gradient(135deg, #0a1929 0%, #001e3c 100%)'
              : 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
        }}
      >
        <Container>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
            }}
            data-aos="fade-up"
          >
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Let's Work Together
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 