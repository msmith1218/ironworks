import { Typography, Grid, Box, Chip } from "@mui/material";
import { Card, CardContent } from "@mui/joy";
import styles from "./about.module.scss";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';

const About = (): JSX.Element => {
  const credentials = [
    "Licensed Private Investigator",
    "Former Law Enforcement",
    "Certified Fraud Examiner",
    "Background Screening Specialist",
    "Court Testimony Expert",
    "Digital Forensics Certified"
  ];

  const experience = [
    {
      title: "Law Enforcement Background",
      years: "15+ Years",
      description: "Extensive experience in criminal investigations, surveillance operations, and evidence collection with local and federal law enforcement agencies."
    },
    {
      title: "Private Investigation",
      years: "10+ Years",
      description: "Specialized expertise in corporate investigations, background checks, and domestic relations cases with a proven track record of successful outcomes."
    },
    {
      title: "Corporate Security",
      years: "8+ Years",
      description: "Comprehensive experience in corporate fraud detection, internal investigations, and risk assessment for Fortune 500 companies."
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We conduct all investigations with the highest ethical standards and complete honesty in our reporting.",
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#64b5f6' }} />
    },
    {
      title: "Discretion",
      description: "Absolute confidentiality is maintained throughout every investigation. Your privacy is our priority.",
      icon: <StarIcon sx={{ fontSize: 40, color: '#81c784' }} />
    },
    {
      title: "Professionalism",
      description: "Licensed, bonded, and insured investigators delivering results with the highest professional standards.",
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#f06292' }} />
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <Box sx={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            color: '#ffffff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          About Ironworks Investigations
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: '#bbdefb',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Founded on principles of integrity, discretion, and excellence, Ironworks Investigations 
          is your trusted partner for professional private investigation services. With decades of 
          combined experience in law enforcement and private investigation, we deliver results you can count on.
        </Typography>
      </Box>

      {/* Company Story */}
      <Box sx={{ padding: '0 2rem 3rem 2rem' }}>
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            color: '#ffffff',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <CardContent sx={{ padding: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'bold',
                marginBottom: 3,
                textAlign: 'center',
                color: '#ffffff'
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#e3f2fd',
                lineHeight: 1.8,
                marginBottom: 2,
                fontSize: '1.1rem'
              }}
            >
              Ironworks Investigations was established with a clear mission: to provide uncompromising 
              investigative services built on a foundation of integrity and expertise. Our name reflects 
              our commitment to strength, reliability, and the solid foundation of trust we build with every client.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#e3f2fd',
                lineHeight: 1.8,
                marginBottom: 2,
                fontSize: '1.1rem'
              }}
            >
              Led by experienced investigators with extensive backgrounds in law enforcement and corporate security, 
              we understand the sensitive nature of investigative work and the importance of discretion, accuracy, 
              and ethical conduct in every case we handle.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#e3f2fd',
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}
            >
              Whether you're an individual seeking peace of mind, a business protecting its interests, or an 
              attorney building a case, Ironworks Investigations has the experience, resources, and dedication 
              to deliver the truth you need.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Experience Section */}
      <Box sx={{ padding: '0 2rem 3rem 2rem' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            marginBottom: 3,
            textAlign: 'center',
            color: '#ffffff'
          }}
        >
          Our Experience
        </Typography>
        <Grid container spacing={3}>
          {experience.map((exp, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  color: '#ffffff',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent sx={{ padding: 3, textAlign: 'center' }}>
                  <Box sx={{ marginBottom: 2 }}>
                    <WorkIcon sx={{ fontSize: 48, color: '#64b5f6' }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', marginBottom: 1, color: '#64b5f6' }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', marginBottom: 2, color: '#ffffff' }}
                  >
                    {exp.years}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#bbdefb', lineHeight: 1.6 }}
                  >
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Credentials */}
      <Box sx={{ padding: '0 2rem 3rem 2rem' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            marginBottom: 3,
            textAlign: 'center',
            color: '#ffffff'
          }}
        >
          Credentials & Certifications
        </Typography>
        <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {credentials.map((credential, index) => (
              <Chip
                key={index}
                label={credential}
                sx={{
                  background: 'rgba(100, 181, 246, 0.2)',
                  color: '#64b5f6',
                  border: '1px solid rgba(100, 181, 246, 0.3)',
                  fontWeight: 'bold',
                  padding: '0.5rem',
                  margin: '0.25rem'
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Values */}
      <Box sx={{ padding: '0 2rem 3rem 2rem' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            marginBottom: 3,
            textAlign: 'center',
            color: '#ffffff'
          }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={3}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  color: '#ffffff',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent sx={{ padding: 3, textAlign: 'center' }}>
                  <Box sx={{ marginBottom: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', marginBottom: 2, color: '#ffffff' }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: '#bbdefb', lineHeight: 1.6 }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact CTA */}
      <Box sx={{ padding: '2rem', textAlign: 'center' }}>
        <Card
          sx={{
            background: 'rgba(100, 181, 246, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 181, 246, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            color: '#ffffff',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <CardContent sx={{ padding: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', marginBottom: 2, color: '#ffffff' }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#bbdefb', marginBottom: 2, lineHeight: 1.6 }}
            >
              Contact us today for a confidential consultation. We're here to help you uncover the truth 
              with professionalism, discretion, and integrity.
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#64b5f6', fontWeight: 'bold' }}
            >
              Available 24/7 for Emergency Cases
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default About;
