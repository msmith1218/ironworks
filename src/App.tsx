import styles from "./App.module.scss";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Button } from "@mui/joy";

function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState("Home");
  const [isNavigatingToContact, setIsNavigatingToContact] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") setCurrentPage("Home");
    if (location.pathname === "/services") setCurrentPage("Services");
    if (location.pathname === "/about") setCurrentPage("About");
  }, [location.pathname]);

  // Scroll to top on route change (but not when navigating to contact)
  useEffect(() => {
    // Skip scroll to top if we're navigating to contact
    if (isNavigatingToContact) {
      setIsNavigatingToContact(false);
      return;
    }

    const scrollToTop = () => {
      // Try multiple scroll targets and methods
      try {
        // Method 1: Standard window scroll
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
        
        // Method 2: Document element scroll
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
          document.documentElement.scrollLeft = 0;
        }
        
        // Method 3: Body scroll
        if (document.body) {
          document.body.scrollTop = 0;
          document.body.scrollLeft = 0;
        }
        
        // Method 4: Try to find scrollable containers
        const scrollableElements = document.querySelectorAll('[data-scroll-container], .scrollable, main');
        scrollableElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.scrollTop = 0;
            element.scrollLeft = 0;
          }
        });
      } catch (error) {
        console.log('Scroll error:', error);
      }
    };

    // Immediate scroll
    scrollToTop();
    
    // Also try after component renders
    const timeoutId = setTimeout(scrollToTop, 50);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname, isNavigatingToContact]);



  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleContactClick = () => {
    // First navigate to home if not already there
    if (location.pathname !== "/" && location.pathname !== "/home") {
      setIsNavigatingToContact(true); // Set flag to prevent scroll to top
      navigate("/home");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToContact();
      }, 150); // Increased timeout to ensure navigation completes
    } else {
      scrollToContact();
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-contact-section]');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleMenuItemClick = (page: string, path: string) => {
    setCurrentPage(page);
    navigate(path);
    handleMenuClose();
  };

  return (
    <>
      <div className={styles.app} data-scroll-container>
        <Box padding={"0"} sx={{ width: "100%" }}>
          <Box
            data-sticky-header
            sx={{
              borderBottom: 1,
              borderColor: "rgba(255, 255, 255, 0.2)",
              position: "sticky",
              top: 0,
              zIndex: 1000,
              background: "rgba(26, 26, 46, 0.9)",
              backdropFilter: "blur(10px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: '60px', // Fixed height for consistent calculations
            }}
          >
            <Button
              onClick={handleContactClick}
              sx={{
                marginLeft: "0.7rem",
                fontSize: "0.7rem",
                minHeight: "24px",
                minWidth: "auto"
              }}
            >
              Contact
            </Button>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, paddingRight: '10px' }}>

              <IconButton
                onClick={handleMenuClick}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': {
                    color: '#64b5f6',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(26, 26, 46, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                },
                '& .MuiMenuItem-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'helvetica',
                  fontWeight: '900',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 181, 246, 0.1)',
                    color: '#64b5f6',
                  },
                },
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick("Home", "/home")}>
                Home
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("Services", "/services")}>
                Services
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("About", "/about")}>
                About
              </MenuItem>
            </Menu>
          </Box>
          <Outlet />
        </Box>
      </div>
    </>
  );
}

export default App;
