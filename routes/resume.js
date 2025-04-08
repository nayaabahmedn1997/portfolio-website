const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Resume download route
router.get('/download', (req, res) => {
  try {
    // Path to your resume file
    const resumePath = path.join(__dirname, '../assets/resume.pdf');
    
    // Check if file exists
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({ message: 'Resume file not found' });
    }
    
    // Set headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    
    // Stream the file to the response
    const fileStream = fs.createReadStream(resumePath);
    fileStream.pipe(res);
    
    // Handle errors
    fileStream.on('error', (error) => {
      console.error('Error streaming resume file:', error);
      res.status(500).json({ message: 'Error downloading resume' });
    });
  } catch (error) {
    console.error('Error in resume download:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 