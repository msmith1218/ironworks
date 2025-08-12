import { useState, useRef, useCallback } from "react";
import styles from "./home.module.scss";
import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import { Card, CardContent } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router";

const Home = (): JSX.Element => {
  const [currentService, setCurrentService] = useState(0);
  const [dragData, setDragData] = useState({
    isDragging: false,
    startX: 0,
    currentX: 0,
    translate: 0
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      title: "Background Check",
      description: "Comprehensive background investigations for employment, personal relationships, or business partnerships. We verify credentials, check criminal records, and provide detailed reports.",
      icon: <SearchIcon sx={{ fontSize: 40, color: '#64b5f6' }} />
    },
    {
      title: "Business Investigation", 
      description: "Corporate investigations including due diligence, fraud detection, asset verification, and competitive intelligence to protect your business interests.",
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#81c784' }} />
    },
    {
      title: "Infidelity Investigation",
      description: "Discreet marital investigations providing clarity in personal relationships. Professional surveillance and evidence gathering with complete confidentiality.",
      icon: <SearchIcon sx={{ fontSize: 40, color: '#64b5f6' }} />
    }
  ];

  const goToSlide = useCallback((index: number) => {
    setCurrentService(index);
    setDragData(prev => ({ ...prev, translate: 0 }));
  }, []);

  const nextSlide = useCallback(() => {
    const next = currentService === services.length - 1 ? 0 : currentService + 1;
    goToSlide(next);
  }, [currentService, services.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = currentService === 0 ? services.length - 1 : currentService - 1;
    goToSlide(prev);
  }, [currentService, services.length, goToSlide]);

  // Mouse events
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setDragData({
      isDragging: true,
      startX: e.clientX,
      currentX: e.clientX,
      translate: 0
    });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragData.isDragging) return;
    e.preventDefault();
    
    const currentX = e.clientX;
    const diff = dragData.startX - currentX;
    const translate = -diff;
    
    setDragData(prev => ({
      ...prev,
      currentX,
      translate
    }));
  }, [dragData.isDragging, dragData.startX]);

  const handleMouseUp = useCallback(() => {
    if (!dragData.isDragging) return;
    
    const diff = dragData.startX - dragData.currentX;
    const threshold = 100; // minimum distance to trigger slide change
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      setDragData(prev => ({ ...prev, translate: 0 }));
    }
    
    setDragData(prev => ({ ...prev, isDragging: false }));
  }, [dragData.isDragging, dragData.startX, dragData.currentX, nextSlide, prevSlide]);

  // Touch events
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setDragData({
      isDragging: true,
      startX: touch.clientX,
      currentX: touch.clientX,
      translate: 0
    });
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!dragData.isDragging) return;
    
    const touch = e.touches[0];
    const currentX = touch.clientX;
    const diff = dragData.startX - currentX;
    const translate = -diff;
    
    setDragData(prev => ({
      ...prev,
      currentX,
      translate
    }));
  }, [dragData.isDragging, dragData.startX]);

  const handleTouchEnd = useCallback(() => {
    if (!dragData.isDragging) return;
    
    const diff = dragData.startX - dragData.currentX;
    const threshold = 50; // smaller threshold for touch
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      setDragData(prev => ({ ...prev, translate: 0 }));
    }
    
    setDragData(prev => ({ ...prev, isDragging: false }));
  }, [dragData.isDragging, dragData.startX, dragData.currentX, nextSlide, prevSlide]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service
    console.log('Contact form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
const navigate = useNavigate();
  const handleServicesClick = () => {
    navigate("/services");
  };

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.logoContainer}>
          <img 
            src={`${import.meta.env.BASE_URL}IMG_2688.png`}
            alt="Ironworks Investigations Logo" 
            className={styles.heroLogo}
          />
        </div>
        <div className={styles.heroContent}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginTop: 6,
              marginBottom: 2,
              textAlign: 'center',
              color: '#e3f2fd',
              fontWeight: 300,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }
            }}
          >
            Professional Private Investigation Services
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              textAlign: 'center',
              color: '#bbdefb',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.5
            }}
          >
            Uncovering the truth with integrity, discretion, and expertise. 
            Licensed investigators providing comprehensive solutions for your most sensitive matters.
          </Typography>
        </div>
      </section>

      {/* Services Carousel */}
      <section className={styles.servicesSection}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            marginBottom: 4,
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
          }}
        >
          Our Services
        </Typography>
        
        <div className={styles.carouselContainer}>
          <div 
            className={styles.carouselTrack}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(calc(-${currentService * 100}% + ${dragData.translate}px))`,
              transition: dragData.isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: dragData.isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              WebkitUserSelect: 'none'
            }}
          >
            {services.map((service, index) => (
              <div key={index} className={styles.carouselSlide}>
                <Card
                  className={styles.serviceCard}
                  sx={{
                    background: index % 2 === 0 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'linear-gradient(135deg, rgba(76, 175, 80, 0.5) 0%, rgba(56, 142, 60, 0.5) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: index % 2 === 0 
                      ? '1px solid rgba(255, 255, 255, 0.2)' 
                      : '1px solid rgba(76, 175, 80, 0.3)',
                    boxShadow: index % 2 === 0 
                      ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                      : '0 8px 32px rgba(76, 175, 80, 0.3)',
                    color: '#ffffff',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    margin: 0,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', padding: 4 }}>
                    <Box sx={{ marginBottom: 2, pointerEvents: 'none' }}>
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ marginBottom: 2, fontWeight: 'bold', pointerEvents: 'none' }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6, pointerEvents: 'none' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.carouselIndicators}>
          {services.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${
                index === currentService ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div><Button onClick={handleServicesClick}>Services</Button></div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} data-contact-section>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            marginBottom: 4,
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
          }}
        >
          Contact Us
        </Typography>
        
        <Box
          component="form"
          onSubmit={handleSubmit}
          className={styles.contactForm}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 2,
            padding: { xs: 2, sm: 3, md: 4 },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto',
            boxSizing: 'border-box'
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#ffffff',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#64b5f6',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#ffffff',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#64b5f6',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#ffffff',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#64b5f6',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
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
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#ffffff',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#64b5f6',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  background: 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)',
                  boxShadow: '0 3px 5px 2px rgba(100, 181, 246, .3)',
                  fontWeight: 'bold',
                  py: 1.5
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </section>
    </div>
  );
};

export default Home;
