import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Admin Viz Project',
      description: 'A comprehensive admin dashboard with data visualization capabilities. Features include real-time analytics, user management, and interactive charts. Built with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js', 'Material-UI'],
      github: 'https://github.com/nayaabahmedn1997/viz_project',
      demo: 'https://admin-viz-project-demo.com',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Discord Clone',
      description: 'A real-time chat application inspired by Discord. Features include text channels, voice chat, user authentication, and server management. Built with React, Node.js, Socket.io, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux', 'Material-UI'],
      github: 'https://github.com/nayaabahmedn1997/discord_clone',
      demo: 'https://discord-clone-demo.com',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing. Built with React, Node.js, Express, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      github: 'https://github.com/nayaabahmedn1997/ecommerce',
      demo: 'https://ecommerce-website-demo.com',
      category: 'fullstack'
    }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 2, fontWeight: 700 }}
          data-aos="fade-down"
        >
          My Projects
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 6, maxWidth: '800px', mx: 'auto', color: 'text.secondary' }}
          data-aos="fade-up"
        >
          Here are some of my full-stack projects that showcase my skills in web development.
          Each project demonstrates my ability to build complete, production-ready applications.
        </Typography>

        <Box sx={{ mb: 4 }} data-aos="fade-up">
          <Tabs
            value={filter}
            onChange={(e, newValue) => setFilter(newValue)}
            centered
            sx={{
              '& .MuiTab-root': {
                fontSize: '1rem',
                fontWeight: 500,
              },
            }}
          >
            <Tab label="All Projects" value="all" />
            <Tab label="Full Stack" value="fullstack" />
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-5px)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
                data-aos="fade-up"
                data-aos-delay={project.id * 100}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: 'primary.light',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'primary.main',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                  >
                    Code
                  </Button>
                  <Button
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="small"
                    sx={{ ml: 1 }}
                  >
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 