import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface ContactProps {
  onBack: () => void;
}

function Contact({ onBack }: ContactProps) {
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
          Contact Us
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              color: "#666",
              mb: 4,
            }}
          >
            Ready to kick-start your investigation? Let's connect.
          </Typography>
        </Box>

        {/* Contact Information - Centered */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ maxWidth: "600px", width: "100%" }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: "#171A20", textAlign: "center" }}>
              Contact Information
            </Typography>

            {/* Contact Items */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: "center" }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                  }}
                >
                  <EmailIcon sx={{ color: "#171A20" }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#171A20" }}>
                    Email
                  </Typography>
                  <Link 
                    href="mailto:info@ironworksinvestigations.com"
                    sx={{ 
                      textDecoration: "none",
                      color: "text.secondary",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#171A20",
                      },
                      cursor: "pointer"
                    }}
                  >
                    <Typography variant="body1" sx={{ minWidth: "250px" }}>
                      info@ironworksinvestigations.com
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: "center" }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                  }}
                >
                  <PhoneIcon sx={{ color: "#171A20" }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#171A20" }}>
                    Phone
                  </Typography>
                  <Link 
                    href="tel:+13852831222"
                    sx={{ 
                      textDecoration: "none",
                      color: "text.secondary",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#171A20",
                      },
                      cursor: "pointer"
                    }}
                  >
                    <Typography variant="body1" sx={{ minWidth: "250px" }}>
                      385-283-1222
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: "center" }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                  }}
                >
                  <LocationOnIcon sx={{ color: "#171A20" }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#171A20" }}>
                    Address
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{minWidth: "250px" }}>
                    P.O. Box 135<br />
                    Springville, UT 84663
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
