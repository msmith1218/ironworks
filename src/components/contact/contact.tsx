import React, { useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface ContactProps {
  onBack: () => void;
}

function Contact({ onBack }: ContactProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

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

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "linear-gradient(180deg, #f9f9f9 0%, #fff 100%)",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: "#171A20" }}>
                Send us a message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
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
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box sx={{ pl: { md: 2 } }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: "#171A20" }}>
                Contact Information
              </Typography>

              {/* Contact Items */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
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
                    <Typography variant="body1" color="text.secondary">
                      contact@ironworks.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
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
                    <Typography variant="body1" color="text.secondary">
                      +1 (555) 555-5555
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
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
                    <Typography variant="body1" color="text.secondary">
                      123 Innovation Drive<br />
                      Future City, FC 12345
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Additional Info */}
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#f9f9f9",
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#171A20" }}>
                  Business Hours
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Monday - Friday: 9:00 AM - 6:00 PM
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Saturday: 10:00 AM - 4:00 PM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sunday: Closed
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
