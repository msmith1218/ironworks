import styles from "./App.module.scss";
import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Outlet, useLocation, useNavigate } from "react-router";
import Contact from "./components/contact/contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#171A20",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
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

const navItems = ["Contact", "Serices", "About"];

function Header({ setShowContact }: { setShowContact: () => void }) {
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
      case "Services":
        // Handle Services click
        break;
      case "About":
        // Handle About click
        break;
      default:
        break;
    }
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
        background: "linear-gradient(180deg, #e3e3e3 0%, #fff 100%)",
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
        Experience the Future
      </Typography>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 4 }}>
        Clean. Modern. Electric.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", paddingBottom: "2em" }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          sx={{ borderRadius: 8 }}
          onClick={onOrderNow}
        >
          Order Now
        </Button>
        <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: 8 }}>
          Demo Drive
        </Button>
      </Box>
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



function App() {
  const [showContact, setShowContact] = useState(false);

  const handleOrderNow = () => {
    setShowContact(true);
  };

  const handleShowContact = () => {
    setShowContact(true);
  }

  const handleBackToMain = () => {
    setShowContact(false);
  };

  if (showContact) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Contact onBack={handleBackToMain} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setShowContact={handleShowContact} />
      <HeroSection onOrderNow={handleOrderNow} />
      <Container maxWidth="lg" sx={{ paddingTop: "1em" }}>
        {/* Placeholder for additional sections (About, Services, etc.) */}
        <Typography color="secondary" variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Discover Our Services
        </Typography>
        <Typography  variant="body1" color="secondary" sx={{ mb: 4 }}>
          Explore cutting-edge electric vehicles and energy solutions. This demo uses Material Design for a clean, modern, and accessible experience.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
          <Box sx={{ width: 280, bgcolor: "#fff", boxShadow: 2, borderRadius: 4, p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Performance</Typography>
            <Typography variant="body2" color="text.secondary">Instant torque, smooth acceleration, and a quiet ride.</Typography>
          </Box>
          <Box sx={{ width: 280, bgcolor: "#fff", boxShadow: 2, borderRadius: 4, p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Design</Typography>
            <Typography variant="body2" color="text.secondary">Minimalist interiors, advanced technology, and premium materials.</Typography>
          </Box>
          <Box sx={{ width: 280, bgcolor: "#fff", boxShadow: 2, borderRadius: 4, p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Sustainability</Typography>
            <Typography variant="body2" color="text.secondary">Zero emissions, renewable energy, and eco-friendly solutions.</Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
