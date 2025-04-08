import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: <CodeIcon fontSize="large" color="primary" />,
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 90 },
      { name: 'React Native', level: 85 },
      { name: 'Material-UI', level: 80 },
      { name: 'Redux', level: 75 },
    ],
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: <StorageIcon fontSize="large" color="primary" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'JWT Authentication', level: 80 },
      { name: 'C', level: 80 }
    ],
  },
  
  {
    id: 4,
    title: 'DevOps & Tools',
    icon: <BuildIcon fontSize="large" color="primary" />,
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 65 },
      { name: 'Webpack', level: 70 },
      { name: 'NPM/Yarn', level: 85 },
    ],
  },
  {
    id: 5,
    title: 'Cloud Services',
    icon: <CloudIcon fontSize="large" color="primary" />,
    skills: [
      


      { name: 'Netlify', level: 80 },

    ],
  },
  
];

const Skills = () => {
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
            sx={{ fontWeight: 700, mb: 2 }}
            data-aos="fade-down"
          >
            My Skills
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Here are my technical skills and proficiency levels. I'm constantly learning and improving my skills.
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={index} data-aos="fade-up" data-aos-delay={200 + (index * 100)}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {category.icon}
                    <Typography variant="h5" sx={{ ml: 2, fontWeight: 600 }}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 3 }} data-aos="fade-right" data-aos-delay={300 + (skillIndex * 50)}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1">{skill.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(33, 150, 243, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 