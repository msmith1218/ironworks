import { Typography, Grid, Box } from "@mui/material";
import { Card, CardContent } from "@mui/joy";
import styles from "./services.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsuranceIcon from '@mui/icons-material/Security';

const Services = (): JSX.Element => {
  const services = [
    {
      title: "Background Investigations",
      description: "Comprehensive background checks for employment screening, tenant verification, and personal relationships. We verify education, employment history, criminal records, and provide detailed character assessments.",
      icon: <SearchIcon sx={{ fontSize: 48, color: '#64b5f6' }} />,
      features: [
        "Criminal history verification",
        "Employment and education verification",
        "Credit and financial background",
        "Reference interviews",
        "Social media investigation"
      ]
    },
    {
      title: "Business Investigations",
      description: "Corporate due diligence, fraud detection, and competitive intelligence services to protect your business interests and make informed decisions.",
      icon: <BusinessIcon sx={{ fontSize: 48, color: '#81c784' }} />,
      features: [
        "Due diligence investigations",
        "Corporate fraud detection",
        "Asset verification",
        "Competitive intelligence",
        "Internal theft investigations"
      ]
    },
    {
      title: "Infidelity Investigations",
      description: "Discreet marital and relationship investigations providing clarity and peace of mind. Professional surveillance with complete confidentiality guaranteed.",
      icon: <FavoriteIcon sx={{ fontSize: 48, color: '#f06292' }} />,
      features: [
        "Discrete surveillance operations",
        "Digital forensics",
        "Activity documentation",
        "Photographic evidence",
        "Detailed reporting"
      ]
    },
    {
      title: "Asset Investigations",
      description: "Locate and verify assets for legal proceedings, divorce cases, or debt collection. Comprehensive asset searches and verification services.",
      icon: <AccountBalanceIcon sx={{ fontSize: 48, color: '#ffb74d' }} />,
      features: [
        "Real estate asset searches",
        "Bank account location",
        "Vehicle and boat searches",
        "Business ownership verification",
        "Hidden asset discovery"
      ]
    },
    {
      title: "Insurance Investigations",
      description: "Fraud detection and claim verification services for insurance companies. Thorough investigations to protect against fraudulent claims.",
      icon: <InsuranceIcon sx={{ fontSize: 48, color: '#ba68c8' }} />,
      features: [
        "Workers' compensation fraud",
        "Disability claim verification",
        "Auto accident investigations",
        "Property damage assessments",
        "Surveillance documentation"
      ]
    },
    {
      title: "Personal Security",
      description: "Risk assessment and personal protection services for high-profile individuals, executives, and families requiring enhanced security measures.",
      icon: <SecurityIcon sx={{ fontSize: 48, color: '#e57373' }} />,
      features: [
        "Threat assessment",
        "Executive protection",
        "Home security evaluation",
        "Travel security planning",
        "Personal safety training"
      ]
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <Box sx={{ padding: '2rem', textAlign: 'center' }}>
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
          Our Investigation Services
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: '#bbdefb',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.6
          }}
        >
          Ironworks Investigations provides comprehensive private investigation services 
          with the highest standards of professionalism, discretion, and integrity. 
          Our licensed investigators deliver results you can trust.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ padding: '0 2rem 2rem 2rem' }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              className={styles.serviceCard}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                color: '#ffffff',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                }
              }}
            >
              <CardContent sx={{ padding: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                  {service.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ 
                    marginBottom: 2, 
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#ffffff'
                  }}
                >
                  {service.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    marginBottom: 2, 
                    lineHeight: 1.6,
                    color: '#e3f2fd',
                    flexGrow: 1
                  }}
                >
                  {service.description}
                </Typography>
                <Box>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 'bold', 
                      marginBottom: 1,
                      color: '#64b5f6'
                    }}
                  >
                    Key Services:
                  </Typography>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <Typography variant="body2" sx={{ color: '#bbdefb' }}>
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            color: '#ffffff'
          }}
        >
          Why Choose Ironworks Investigations?
        </Typography>
        <Grid 
          container 
          spacing={3} 
          sx={{ 
            marginTop: 2, 
            maxWidth: '1000px', 
            margin: '2rem auto 0 auto',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              textAlign: 'center', 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: { xs: 2, sm: 3 }
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold', 
                  marginBottom: 2, 
                  color: '#64b5f6',
                  textAlign: 'center'
                }}
              >
                Licensed & Experienced
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#bbdefb',
                  textAlign: 'center',
                  lineHeight: 1.6
                }}
              >
                Fully licensed investigators with years of experience in law enforcement and private investigation.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              textAlign: 'center', 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: { xs: 2, sm: 3 }
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold', 
                  marginBottom: 2, 
                  color: '#81c784',
                  textAlign: 'center'
                }}
              >
                Confidential & Discreet
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#bbdefb',
                  textAlign: 'center',
                  lineHeight: 1.6
                }}
              >
                Complete confidentiality guaranteed. All investigations conducted with the utmost discretion.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              textAlign: 'center', 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: { xs: 2, sm: 3 }
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold', 
                  marginBottom: 2, 
                  color: '#f06292',
                  textAlign: 'center'
                }}
              >
                Detailed Reporting
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#bbdefb',
                  textAlign: 'center',
                  lineHeight: 1.6
                }}
              >
                Comprehensive reports with documented evidence, photographs, and professional analysis.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
