import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SchoolIcon from '@mui/icons-material/School';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';

interface AboutProps {
  onBack: () => void;
  onContact: () => void;
}

const About = ({ onBack, onContact }: AboutProps): JSX.Element => {

  // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const credentials = [
    "Licensed Private Investigator",
    "Former Law Enforcement",
    "Background Screening Specialist",
    "Court Testimony Expert"
  ];

  const values = [
    {
      title: "Integrity",
      description: "We conduct all investigations with the highest ethical standards and complete honesty in our reporting.",
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: "#2E7D32" }} /> // Green for trust/verification
    },
    {
      title: "Discretion",
      description: "Absolute confidentiality is maintained throughout every investigation. Your privacy is our priority.",
      icon: <StarIcon sx={{ fontSize: 40, color: "#F57C00" }} /> // Amber for excellence/premium service
    },
    {
      title: "Professionalism",
      description: "Licensed, bonded, and insured investigators delivering results with the highest professional standards.",
      icon: <SchoolIcon sx={{ fontSize: 40, color: "#5E35B1" }} /> // Purple for education/expertise
    }
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      {/* Header with back button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <IconButton onClick={onBack} sx={{ mr: 2, color: "#171A20" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#171A20" }}>
          About Us
        </Typography>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "40vh",
          background: "linear-gradient(180deg, #e3e3e3 0%, #fff 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 6,
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-1px",
            color: "#171A20",
            mb: 2,
          }}
        >
          About Ironworks Investigations
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            color: "#666",
            mb: 4,
            maxWidth: "800px",
          }}
        >
          Founded on principles of integrity, discretion, and excellence. Your trusted partner for professional private investigation services.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Company Story */}
        <Paper
          elevation={2}
          sx={{
            p: "1em",
            borderRadius: 4,
            background: "linear-gradient(180deg, #f9f9f9 0%, #fff 100%)",
            mb: 6,
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#171A20",
              mb: 4,
              textAlign: "center",
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              mb: 3,
              fontSize: "1.1rem",
              textIndent: "2rem",
            }}
          >
            I am a retired Police Sergeant with nearly 30 years of dedicated service in law enforcement. Throughout my career, I focused on public safety, community engagement, and creating innovative programs that built stronger relationships and trust between law enforcement and the community. Above all, I have always been committed to ensuring people are treated with fairness, respect, and given the opportunity to be heard.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              mb: 3,
              fontSize: "1.1rem",
              textIndent: "2rem",
            }}
          >
            My experience spans from frontline patrol – responding to countless emergencies – to serving as a detective investigating crimes against persons, including sex crimes, child abuse, domestic violence, assaults, homicides, and death investigations.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              mb: 3,
              fontSize: "1.1rem",
              textIndent: "2rem",
            }}
          >
            As a Sergeant, I oversaw patrol operations, jail management, and multiple specialty programs such as the Peer Support/Trauma Support Team and SWAT Crisis Negotiations. I also led the Professional Standards Unit, where I supervised internal affairs investigations, reviewed all use-of-force incidents and citizen complaints, directed recruitment and background investigations, and coordinated department-wide training.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              fontSize: "1.1rem",
              textIndent: "2rem",
            }}
          >
            This breadth of experience allows me to bring a unique blend of investigative skill, leadership, and integrity to every case I take on with Ironworks Investigations.
          </Typography>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <img
              src={`${import.meta.env.BASE_URL}about-picture.jpg`}
              alt="Img Placeholder"
              style={{  
                width: "100%",
                maxWidth: "700px", 
                height: "auto",
                maxHeight: "50vh", 
                borderRadius: 16,
                objectFit: "cover"
              }}
            />
          </Box>
        </Paper>

              

        {/* Credentials */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#171A20",
            mb: 4,
            textAlign: "center",
          }}
        >
          Credentials & Certifications
        </Typography>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {credentials.map((credential, index) => (
              <Chip
                key={index}
                label={credential}
                sx={{
                  bgcolor: "#f5f5f5",
                  color: "#171A20",
                  border: "1px solid #e0e0e0",
                  fontWeight: 600,
                  py: 1,
                  px: 2,
                  fontSize: "0.9rem",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Values */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#171A20",
            mb: 4,
            textAlign: "center",
          }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  bgcolor: "#fff",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  {value.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: "#171A20", mb: 2 }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6, flexGrow: 1 }}
                >
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Contact CTA */}
        <Box
          sx={{
            p: 6,
            borderRadius: 4,
            background: "linear-gradient(180deg, #f9f9f9 0%, #fff 100%)",
            textAlign: "center",
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#171A20",
              mb: 2,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: "1.1rem",
            }}
          >
            Contact us today for a confidential consultation. We're here to help you uncover the truth 
            with professionalism, discretion, and integrity.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={onContact}
            sx={{
              bgcolor: "#171A20",
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#2c2f36",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
