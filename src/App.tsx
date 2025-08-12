import styles from "./App.module.scss";
import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") setValue(0);
    if (location.pathname === "/services") setValue(1);
    if (location.pathname === "/about") setValue(2);
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) navigate("/home");
    if (newValue === 1) navigate("/services");
    if (newValue === 2) navigate("/about");
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.app}>
        <Box padding={"0"} sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "rgba(255, 255, 255, 0.2)",
              position: "sticky",
              padding: "0px",
              top: 0,
              zIndex: 1000,
              background: "rgba(26, 26, 46, 0.9)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Tabs
              sx={{
                bgcolor: "transparent",
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-selected': {
                    color: '#64b5f6',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#64b5f6',
                },
              }}
              value={value}
              onChange={handleChange}
              aria-label="main tabs"
            >
              <Tab
                sx={{
                  fontFamily: "helvetica",
                  fontWeight: "900",
                }}
                label="Home"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  fontFamily: "helvetica",
                  fontWeight: "900",
                }}
                label="Services"
                {...a11yProps(1)}
              />
              <Tab
                data-qa={"about-tab"}
                sx={{
                  fontFamily: "helvetica",
                  fontWeight: "900",
                }}
                label="About"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <Outlet />
        </Box>
      </div>
    </>
  );
}

export default App;
