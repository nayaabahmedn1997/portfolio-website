import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {currentYear} Nayaab Ahmed N. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              color="inherit"
              aria-label="GitHub"
              href="https://github.com/nayaabahmedn1997"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/nayaab-ahmed-n-22a329173/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <LinkedInIcon />
            </IconButton>
          
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 