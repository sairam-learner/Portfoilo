import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Box, Button, Card, Paper, Typography } from '@mui/material';

import powerBiImg from '../assets/certificates/Basics of Microsoft Power BI.jpg';
import genAiImg from '../assets/certificates/GenAI Job Simulation.jpg';
import accentureSoftEngImg from '../assets/certificates/Software Engineering Job Simulation.jpg';
import awsArchImg from '../assets/certificates/Solutions Architecture Job Simulation.jpg';
import ibmAdobeTrustImg from '../assets/certificates/Trust What You Create - IBM Adobe.jpg';
import vivaSparcImg from '../assets/certificates/VivaSPARC Campus Ambassador.jpg';

// Certificate images and PDFs
import iotImg from '../assets/certificates/Internet of Things.jpg';
//import iotPdf from '../assets/certificates/Internet of Things.pdf';

import salesforceCatalystImg from '../assets/certificates/Salesforce Developer Catalyst.jpg';
//import salesforceCatalystPdf from '../assets/certificates/Salesforce Developer Catalyst.pdf';

import unnatBharatImg from '../assets/certificates/Unnat Bharat Abhiyan.jpg';
//import unnatBharatPdf from '../assets/certificates/Unnat Bharat Abhiyan.pdf';

import dukeProgrammingImg from '../assets/certificates/Programming Fundamentals - Duke.jpg';
//import dukeProgrammingPdf from '../assets/certificates/Programming Fundamentals - Duke.pdf';

import michiganPythonImg from '../assets/certificates/Python Functions Files - Michigan.jpg';
//import michiganPythonPdf from '../assets/certificates/Python Functions Files - Michigan.pdf';

import timeManagementImg from '../assets/certificates/Time and Stress Management.jpg';
//import timeManagementPdf from '../assets/certificates/Time and Stress Management.pdf';

import leadershipTeamsImg from '../assets/certificates/Leadership and Teams.jpg';
//import leadershipTeamsPdf from '../assets/certificates/Leadership and Teams.pdf';

import deloitteCyberImg from '../assets/certificates/Deloitte Cyber Job Simulation.jpg';
//import deloitteCyberPdf from '../assets/certificates/Deloitte Cyber Job Simulation.pdf';

// Certificate list
const certifications = [
  {
    title: 'Introduction to Internet of Things',
    organization: 'NPTEL - IIT Kharagpur',
    issue_date: 'October 2024',
    image: iotImg,
    //file: iotPdf,
  },
  {
    title: 'Salesforce Developer Catalyst Program',
    organization: 'FutureSkills Prime (MeitY-NASSCOM)',
    issue_date: 'January 2024',
    image: salesforceCatalystImg,
    //file: salesforceCatalystPdf,
  },
  {
    title: 'Unnat Bharat Abhiyan Participation',
    organization: 'Malla Reddy University',
    issue_date: 'December 2022',
    image: unnatBharatImg,
    //file: unnatBharatPdf,
  },
  {
    title: 'Programming Fundamentals',
    organization: 'Duke University via Coursera',
    issue_date: 'October 2023',
    image: dukeProgrammingImg,
    //file: dukeProgrammingPdf,
  },
  {
    title: 'Python Functions, Files, and Dictionaries',
    organization: 'University of Michigan via Coursera',
    issue_date: 'May 2023',
    image: michiganPythonImg,
    //file: michiganPythonPdf,
  },
  {
    title: 'Time and Stress Management (PRDV005)',
    organization: 'Saylor Academy',
    issue_date: 'April 2024',
    image: timeManagementImg,
    //file: timeManagementPdf,
  },
  {
    title: 'Leadership and Teams (PRDV224)',
    organization: 'Saylor Academy',
    issue_date: 'April 2024',
    image: leadershipTeamsImg,
    //file: leadershipTeamsPdf,
  },
  {
    title: 'Cyber Job Simulation',
    organization: 'Deloitte via Forage',
    issue_date: 'May 2025',
    image: deloitteCyberImg,
    //file: deloitteCyberPdf,
  },
  {
    title: 'Solutions Architecture Job Simulation',
    organization: 'AWS via Forage',
    issue_date: 'May 2025',
    image: awsArchImg,
    file: null, // or awsArchPdf if available
  },
  {
    title: 'Basics of Microsoft Power BI',
    organization: 'UniAthena in partnership with CIQ, UK',
    issue_date: 'May 2025',
    image: powerBiImg,
    file: null,
  },
  {
    title: 'Software Engineering Job Simulation',
    organization: 'Accenture via Forage',
    issue_date: 'May 2025',
    image: accentureSoftEngImg,
    file: null,
  },
  {
    title: 'Trust What You Create – IBM & Adobe',
    organization: 'IBM SkillsBuild',
    issue_date: 'May 2025',
    image: ibmAdobeTrustImg,
    file: null,
  },
  {
    title: 'GenAI Job Simulation',
    organization: 'BCG X via Forage',
    issue_date: 'May 2025',
    image: genAiImg,
    file: null,
  },
  {
    title: 'Campus Ambassador – VivaSPARC',
    organization: 'Ministry of Corporate Affairs',
    issue_date: 'May 2025',
    image: vivaSparcImg,
    file: null,
  },
];

const Certifications = () => {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, my: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Certifications
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {certifications.map((cert) => (
          <Card key={cert.title} sx={{ display: 'flex', p: 2, gap: 2 }}>
            <Box
              component="img"
              src={cert.image}
              alt={cert.title}
              sx={{ width: 200, height: 'auto', objectFit: 'contain' }}
            />
            <Box>
              <Typography variant="h5">{cert.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {cert.organization}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Issued: {cert.issue_date}
              </Typography>
              {cert.file && (
                <Button
                  variant="outlined"
                  href={cert.file}
                  target="_blank"
                  startIcon={<PictureAsPdfIcon />}
                  sx={{ mt: 1 }}
                >
                  View PDF
                </Button>
              )}
            </Box>
          </Card>
        ))}
      </Box>
    </Paper>
  );
};

export default Certifications;
