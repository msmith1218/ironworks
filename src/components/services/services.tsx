import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GavelIcon from "@mui/icons-material/Gavel";
import PhoneIcon from "@mui/icons-material/Phone";
import ComputerIcon from "@mui/icons-material/Computer";

interface ServicesProps {
  onBack: () => void;
  onContact: () => void;
}

const servicesData = [
  {
    title: "Corporate Investigations",
    description: "Comprehensive background checks, due diligence investigations, and corporate fraud detection for businesses.",
    icon: <BusinessIcon sx={{ fontSize: 40, color: "#2E7D32" }} />, // Green for business/growth
  },
  {
    title: "Personal Security",
    description: "Personal protection services, threat assessment, and security consulting for high-profile individuals.",
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#D32F2F" }} />, // Red for security/protection
  },
  {
    title: "Missing Persons",
    description: "Professional locate services for missing persons, lost family members, and witnesses.",
    icon: <PersonSearchIcon sx={{ fontSize: 40, color: "#FF9800" }} />, // Orange for searching/finding
  },
  {
    title: "Asset Investigations",
    description: "Asset searches, financial investigations, and recovery services for legal and personal matters.",
    icon: <SearchIcon sx={{ fontSize: 40, color: "#1976D2" }} />, // Blue for investigation/search
  },
  {
    title: "Surveillance Services",
    description: "Discrete surveillance operations, evidence gathering, and monitoring services with advanced technology.",
    icon: <CameraAltIcon sx={{ fontSize: 40, color: "#7B1FA2" }} />, // Purple for surveillance/technology
  },
  {
    title: "Digital Forensics",
    description: "Computer forensics, data recovery, and cyber investigation services for legal and corporate clients.",
    icon: <ComputerIcon sx={{ fontSize: 40, color: "#00796B" }} />, // Teal for digital/technology
  },
  {
    title: "Legal Support",
    description: "Process serving, court document preparation, and litigation support for attorneys and law firms.",
    icon: <GavelIcon sx={{ fontSize: 40, color: "#5D4037" }} />, // Brown for legal/authority
  },
  {
    title: "Background Checks",
    description: "Comprehensive employment screening, tenant verification, and personal background investigations.",
    icon: <AssignmentIcon sx={{ fontSize: 40, color: "#303F9F" }} />, // Indigo for documentation/verification
  },
  {
    title: "24/7 Emergency Response",
    description: "Round-the-clock emergency investigation services for urgent matters requiring immediate attention.",
    icon: <PhoneIcon sx={{ fontSize: 40, color: "#E53935" }} />, // Bright red for emergency/urgency
  },
];

const Services = ({ onBack, onContact }: ServicesProps): JSX.Element => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fff" }}>
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
          Our Services
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
          Professional Investigation Services
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
          Comprehensive solutions for corporate, legal, and personal investigation needs with cutting-edge technology and expert analysis.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Services Grid */}
        <Grid container spacing={4}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                {/* Icon */}
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
                  {service.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#171A20",
                    mb: 2,
                    minHeight: "2.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {service.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Section */}
        <Box
          sx={{
            mt: 8,
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
            Need a Custom Investigation?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Every case is unique. Our experienced team can develop customized investigation strategies 
            tailored to your specific needs and requirements.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#171A20",
              fontWeight: 600,
              mb: 4,
            }}
          >
            Contact us today for a confidential consultation
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

export default Services;
