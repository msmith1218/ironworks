import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import BadgeIcon from '@mui/icons-material/Badge';

interface AboutProps {
  onBack: () => void;
}

const About = ({ onBack }: AboutProps): JSX.Element => {
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
      description: "Extensive experience in criminal investigations, surveillance operations, and evidence collection with local and federal law enforcement agencies.",
      icon: <BadgeIcon sx={{ fontSize: 40, color: "#1565C0" }} /> // Blue for law enforcement/authority
    },
    {
      title: "Private Investigation",
      years: "10+ Years",
      description: "Specialized expertise in corporate investigations, background checks, and domestic relations cases with a proven track record of successful outcomes.",
      icon: <WorkIcon sx={{ fontSize: 40, color: "#E65100" }} /> // Orange for professional work/career
    },
    {
      title: "Corporate Security",
      years: "8+ Years",
      description: "Comprehensive experience in corporate fraud detection, internal investigations, and risk assessment for Fortune 500 companies.",
      icon: <SecurityIcon sx={{ fontSize: 40, color: "#C62828" }} /> // Red for security/protection
    }
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
            p: 6,
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
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              mb: 3,
              fontSize: "1.1rem",
            }}
          >
            Ironworks Investigations was established with a clear mission: to provide uncompromising 
            investigative services built on a foundation of integrity and expertise. Our name reflects 
            our commitment to strength, reliability, and the solid foundation of trust we build with every client.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              mb: 3,
              fontSize: "1.1rem",
            }}
          >
            Led by experienced investigators with extensive backgrounds in law enforcement and corporate security, 
            we understand the sensitive nature of investigative work and the importance of discretion, accuracy, 
            and ethical conduct in every case we handle.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            Whether you're an individual seeking peace of mind, a business protecting its interests, or an 
            attorney building a case, Ironworks Investigations has the experience, resources, and dedication 
            to deliver the truth you need.
          </Typography>
        </Paper>

        {/* Experience Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#171A20",
            mb: 4,
            textAlign: "center",
          }}
        >
          Our Experience
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {experience.map((exp, index) => (
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
                  {exp.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#171A20", mb: 1 }}
                >
                  {exp.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#171A20", mb: 2 }}
                >
                  {exp.years}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6, flexGrow: 1 }}
                >
                  {exp.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

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
          <Typography
            variant="h6"
            sx={{
              color: "#171A20",
              fontWeight: 600,
            }}
          >
            Available 24/7 for Emergency Cases
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
