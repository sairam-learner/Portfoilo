import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import amazonCloneImg from '../assets/projects/Amazona_Dashboard.png';
import cropAdvisorImg from '../assets/projects/Crop_Advisor.png';
import Librarymanagementimg from '../assets/projects/Library_management.png';
//import studentManagementImg from '../assets/projects/Student_Mangement_System.png';
import AmazonsalesdataImg from '../assets/projects/Amazon_sales_data.png';
import IotImg from '../assets/projects/Iot.png';
import Spaceimg from '../assets/projects/space.png'; // Assuming you have a Space News image
import Carousel from './Carousel';

const projectsData = [
  {
    id: 1,
    title: 'Crop Advisor',
    description:
      'Built an ML-powered agriculture assistant using a Random Forest model to recommend crops based on soil and climate data. Integrated image-based plant disease detection and real-time data visualizations to help farmers make informed decisions through an intuitive Streamlit interface. ',
    image: cropAdvisorImg,
    link: 'https://github.com/sairam-learner/Agri-Smart--Deep-Learning-',
  },
  {
    id: 2,
    title: 'Amazon_sales_dataAnalytics',
    description:
      'The Amazon Sales Data Analysis project is an interactive dashboard that leverages data visualization and predictive analytics to analyze Amazon sales trends. Developed using Dash, Plotly, Pandas, and Machine Learning algorithms,the application provides insights into revenue, profit, units sold, product performance, and regional sales variations. ',
    image: AmazonsalesdataImg,
    link: 'https://github.com/sairam-learner/E-commerce-Sales-Dashboard--DataAnalyticsproject',
  },
  {
    id: 3,
    title: 'SMART HOME AUTOMATION',
    description:
      'This project is a Smart Home Automation system developed using Raspberry Pi Pico W, various sensors, and Bluetooth + WiFi connectivity to provide real-time control and monitoring of home appliances and environmental conditions. ',
    image: IotImg,
    link: 'https://github.com/sairam-learner/SmartHomeAutomation-IOT-Project',
  },
  {
    id: 4,
    title: 'Amazon Clone',
    description:
      'Amazona is a full-stack e-commerce web application inspired by Amazon. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and designed to provide a dynamic and engaging online shopping experience.',
    image: amazonCloneImg,
    link: 'https://github.com/sairam-learner/amazon-clone-mern-stack/tree/main',
  },
  {
    id: 5,
    title: 'Library Management System',
    description:
      'LibraSys is a robust Library Management System designed to optimize library operations through an intuitive Java Swing-based graphical user interface. It provides essential functionalities for efficient book and student record management, aimed at enhancing the overall library experience for both librarians and users.',
    image: Librarymanagementimg,
    link: 'https://github.com/sairam-learner/library-management-using-java',
  },
  {
    id: 6,
    title: 'Space News',
    description:
      'SpaceNews is a mobile application developed using Android (Java) that displays the latest news related to space missions, satellites, and space exploration. It uses the public API provided by Spaceflight News API to fetch real-time articles and display them dynamically in a user-friendly list format.',
    image: Spaceimg,
    link: 'https://github.com/sairam-learner/SpaceNews',
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [expanded, setExpanded] = useState({});

  const handleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  let carouselHeight;

  if (isMdUp) {
    carouselHeight = 670;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 4 },
        my: 4,
        background: 'transparent',
        border: 'none',
      }}
    >
      <Typography variant="h2" component="h2" gutterBottom align="center">
        My Projects
      </Typography>
      {isMdUp ? (
        <Box
          sx={{
            mt: 4,
            maxWidth: { md: 800 },
            mx: 'auto',
          }}
        >
          <Carousel items={projectsData} baseHeight={carouselHeight} />
        </Box>
      ) : (
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 500,
            mx: 'auto',
          }}
        >
          {projectsData.map((project) => (
            <Card
              key={project.id}
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                background:
                  theme.palette.mode === 'dark' ? '#232b3b' : '#f8fafc',
                border: (theme) =>
                  `1.5px solid ${
                    theme.palette.mode === 'dark'
                      ? theme.palette.primary.main
                      : '#e0e7ef'
                  }`,
                overflow: 'hidden',
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  width: '100%',
                  height: 140,
                  objectFit: 'contain',
                  background: '#fff',
                  cursor: 'pointer',
                }}
                onClick={() => handleExpand(project.id)}
              />
              <CardContent
                sx={{ pb: 1, pt: 2, textAlign: 'center', cursor: 'pointer' }}
                onClick={() => handleExpand(project.id)}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {project.title}
                </Typography>
              </CardContent>
              <Collapse
                in={!!expanded[project.id]}
                timeout="auto"
                unmountOnExit
              >
                <CardContent sx={{ pt: 0, textAlign: 'center' }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      size="small"
                      href={project.link}
                      target="_blank"
                      startIcon={<FaGithub />}
                      variant="outlined"
                      color="primary"
                    >
                      View Project
                    </Button>
                  </CardActions>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default Projects;
