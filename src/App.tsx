import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  useMediaQuery,
  Menu,
  MenuItem,
  CssBaseline,
  Grid,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SearchIcon from '@mui/icons-material/Search';
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contact from "./components/contact/contact";
import About from "./components/about/about";

const theme = createTheme({
  palette: {
    primary: {
      main: "#171A20",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      letterSpacing: "-1px",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
    },
  },
});

const servicesData = [
  {
    title: "Corporate",
    description: "Comprehensive background checks and due diligence investigations.",
    icon: <BusinessIcon sx={{ fontSize: 40, color: "#2E7D32" }} />,
  },
  {
    title: "Personal",
    description: "Home security assessments, Infidelity cases",
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#D32F2F" }} />,
  },
  {
    title: "Surveillance",
    description: "Discrete surveillance operations, evidence gathering, and monitoring services with advanced technology.",
    icon: <CameraAltIcon sx={{ fontSize: 40, color: "#7B1FA2" }} />,
  },
  {
    title: "Asset Investigations",
    description: "Asset searches, financial investigations",
    icon: <SearchIcon sx={{ fontSize: 40, color: "#1976D2" }} />,
  },
  {
    title: "Legal Support",
    description: "Criminal case review, police procedure review",
    icon: <GavelIcon sx={{ fontSize: 40, color: "#5D4037" }} />,
  },
  {
    title: "Background Checks",
    description: "Employment screening, certified public safety background reports",
    icon: <AssignmentIcon sx={{ fontSize: 40, color: "#303F9F" }} />,
  },
  {
    title: "3rd Party Internal Affairs/EEO Investigations",
    description: "Who Should Investigate Police Misconduct? Can law enforcement objectively investigate itself? Under most circumstances, 'Yes'. But there comes a time when the answer is a resounding 'No'. Too many potential conflicts of interest… Independent EEO investigations for small businesses.",
    icon: <PersonSearchIcon sx={{ fontSize: 40, color: "#FF9800" }} />,
  },
];

const navItems = ["Contact", "About"];

function Header({ setShowContact, setShowAbout }: { setShowContact: () => void, setShowAbout: () => void }) {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const onNavItemClick = (item:string) => {
    switch (item) {
      case "Contact":
        setShowContact();
        break;
      case "About":
        setShowAbout();
        break;
      default:
        break;
    }
    handleMenuClose();
  }
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="secondary" sx={{ fontWeight: 500, letterSpacing: 2 }}>
          IRONWORKS
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="secondary" edge="end" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {navItems.map((item) => (
                <MenuItem key={item} onClick={() => onNavItemClick(item)}>{item}</MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {navItems.map((item) => (
              <Button onClick={() => onNavItemClick(item)} key={item} color="secondary" sx={{ fontWeight: 500 }}>
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

function HeroSection({ onOrderNow }: { onOrderNow: () => void }) {
  return (
    <Box
      sx={{
        minHeight: { xs: "60vh", md: "80vh" },
        background: "linear-gradient(180deg, #e3e3e3 20%, #fff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        pt: 8,
        paddingTop: 0
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}IMG_2688.png`}
        alt="Logo Placeholder"
        style={{  maxWidth: 700, maxHeight: "50vh", borderRadius: 16, }}
      />
      <Typography variant="h2" color="primary">
        Private Investigative Services
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", paddingBottom: "2em", marginTop: "2em" }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          sx={{ borderRadius: 8 }}
          onClick={onOrderNow}
        >
          Contact Us
        </Button>
      </Box>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, px: { xs: 3, sm: 4 } }}>
        <Paper
          elevation={1}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            background: "linear-gradient(180deg, #f9f9f9 0%, #fff 100%)",
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#555",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              textAlign: "center",
              mb: 2
            }}
          >
            At Ironworks Investigations, our team brings years of proven expertise from a law enforcement background. We don't just investigate – we dig deep, uncovering the truth with precision and professionalism.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#555",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              textAlign: "center"
            }}
          >
            From straightforward fact-finding to advanced, highly technical cases, we tailor our approach to your unique needs. Whether you need a fresh investigation or a second look at a previously closed matter, we're ready to deliver results you can trust.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 3, textAlign: "center", mt: 8 }}>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Ironworks investigations. All rights reserved.
      </Typography>
    </Box>
  );
}

// SEO Structured Data Component
function StructuredData() {
  useEffect(() => {
    // Business structured data
    const businessData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Ironworks Investigations",
      "description": "Licensed private investigator with 30 years law enforcement experience providing corporate investigations, background checks, surveillance, legal support, and asset investigations.",
      "url": "https://msmith1218.github.io/ironworks/",
      "telephone": "+1-385-283-1222",
      "email": "info@ironworksinvestigations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.O. Box 135",
        "addressLocality": "Springville",
        "addressRegion": "UT",
        "postalCode": "84663",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.1652",
        "longitude": "-111.6108"
      },
      "serviceArea": {
        "@type": "State",
        "name": "Utah"
      },
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Check"],
      "currenciesAccepted": "USD",
      "openingHours": "Mo-Fr 09:00-17:00",
      "founder": {
        "@type": "Person",
        "name": "Retired Police Sergeant",
        "description": "Retired Police Sergeant with nearly 30 years of dedicated service in law enforcement"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Investigation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Investigations",
              "description": "Comprehensive background checks and due diligence investigations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Investigations",
              "description": "Home security assessments, Infidelity cases"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Surveillance",
              "description": "Discrete surveillance operations, evidence gathering, and monitoring services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Asset Investigations",
              "description": "Asset searches, financial investigations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Legal Support",
              "description": "Criminal case review, police procedure review"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Background Checks",
              "description": "Employment screening, certified public safety background reports"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "1"
      }
    };

    // Local business structured data
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ironworks Investigations",
      "image": "https://msmith1218.github.io/ironworks/IMG_2688.png",
      "telephone": "+1-385-283-1222",
      "email": "info@ironworksinvestigations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.O. Box 135",
        "addressLocality": "Springville",
        "addressRegion": "UT",
        "postalCode": "84663",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.1652",
        "longitude": "-111.6108"
      },
      "url": "https://msmith1218.github.io/ironworks/",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    };

    // WebSite structured data
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ironworks Investigations",
      "url": "https://msmith1218.github.io/ironworks/",
      "description": "Professional private investigation services in Utah",
      "publisher": {
        "@type": "Organization",
        "name": "Ironworks Investigations"
      }
    };

    // Create and append structured data scripts
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.textContent = JSON.stringify(businessData);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.textContent = JSON.stringify(localBusinessData);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.textContent = JSON.stringify(websiteData);
    document.head.appendChild(script3);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return null;
}



function App() {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleOrderNow = () => {
    setShowContact(true);
  };

  const handleShowContact = () => {
    setShowContact(true);
  }

  const handleShowAbout = () => {
    setShowAbout(true);
  }

  const handleBackToMain = () => {
    setShowContact(false);
    setShowAbout(false);
  };

  if (showContact) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Contact onBack={handleBackToMain} />
      </ThemeProvider>
    );
  }

  if (showAbout) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <About onBack={handleBackToMain} onContact={handleShowContact} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StructuredData />
      <Header setShowContact={handleShowContact} setShowAbout={handleShowAbout} />
      <HeroSection onOrderNow={handleOrderNow} />
      <Container maxWidth="lg" sx={{ paddingTop: "1em" }}>
        {/* Services Section */}
        <Typography color="secondary" variant="h4" sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}>
          Discover Our Services
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
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
                    minHeight: "3rem",
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
        
        {/* Bottom Contact Us Button */}
        <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ borderRadius: 8 }}
            onClick={handleOrderNow}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
