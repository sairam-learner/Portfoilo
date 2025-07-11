import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import './App.css';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#43a047' }, // light green
          secondary: { main: '#a5d6a7' }, // lighter green
          background: { default: '#e8f5e9', paper: '#ffffff' }, // very light green background
          text: { primary: '#1b3c1b', secondary: '#4e684e' }, // dark green text for readability
        }
      : {
          primary: { main: '#14532d' }, // dark green
          secondary: { main: '#388e3c' }, // medium dark green
          background: { default: '#10281a', paper: '#1b3c26' }, // very dark green background
          text: { primary: '#e6f4ea', secondary: '#a5d6a7' }, // light greenish text for readability
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.01562em' },
    h2: { fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.00833em' },
    h3: { fontSize: '2rem', fontWeight: 600, letterSpacing: '0em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid',
          borderColor: mode === 'light' ? '#a5d6a7' : '#808000',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderColor: mode === 'light' ? '#a5d6a7' : '#808000',
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar toggleTheme={toggleTheme} mode={mode} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3, md: 4 },
            pl: { sm: '96px' },
          }}
        >
          <div id="hero">
            <Hero />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="certifications">
            <Certifications />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
