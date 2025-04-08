# Portfolio Website

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- Responsive design that works on all devices
- Modern UI with Material-UI components
- Animated transitions with Framer Motion
- Contact form with email functionality
- Resume download feature
- Project showcase with filtering
- Skills section with visual representation
- About section with professional information

## Technologies Used

### Frontend
- React.js
- Material-UI
- Framer Motion
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Nodemailer
- Express Validator

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Gmail account (for contact form)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install backend dependencies:
   ```
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd client
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_app_password
   ```

   Note: For Gmail, you'll need to use an App Password. Follow [these instructions](https://support.google.com/accounts/answer/185833?hl=en) to create one.

5. Add your resume PDF file to the `assets` folder:
   ```
   assets/resume.pdf
   ```

## Running the Application

### Development Mode

1. Start the backend server:
   ```
   npm run server
   ```

2. In a new terminal, start the frontend:
   ```
   npm run client
   ```

3. Or run both concurrently:
   ```
   npm run dev
   ```

### Production Mode

1. Build the frontend:
   ```
   npm run build
   ```

2. Start the server:
   ```
   npm start
   ```

## Customization

### Personal Information

Update the following files with your personal information:

- `client/src/components/Home.js`: Update your name, title, and bio
- `client/src/components/About.js`: Update your professional summary, education, and work experience
- `client/src/components/Projects.js`: Add your own projects
- `client/src/components/Skills.js`: Update your skills and proficiency levels
- `client/src/components/Contact.js`: Update your contact information and social media links
- `client/src/components/Footer.js`: Update your name and social media links

### Styling

The theme can be customized in `client/src/App.js`. The current theme uses Material-UI's default blue color scheme, but you can change it to match your personal brand.

## Deployment

### Backend Deployment

1. Create a MongoDB Atlas account and get your connection string
2. Deploy to Heroku, Vercel, or any other hosting service
3. Set the environment variables in your hosting platform

### Frontend Deployment

1. Build the frontend:
   ```
   npm run build
   ```

2. Deploy the `client/build` folder to Netlify, Vercel, or any other static hosting service

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Material-UI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) 