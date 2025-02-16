import Bills from "components/bills/bills";
import styles from "./App.module.scss";
import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import Income from "components/income/income";
import Budget from "components/budget/budget";
import Payoff from "components/payoff/payoff";
import { Outlet, useLocation, useNavigate } from "react-router";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
    if (location.pathname === "/budget") setValue(0);
    if (location.pathname === "/income") setValue(1);
    if (location.pathname === "/bills") setValue(2);
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) navigate("/budget");
    if (newValue === 1) navigate("/income");
    if (newValue === 2) navigate("/bills");
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.app}>
        <Box padding={"0"} sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              position: "sticky",
              padding: "0px",
              top: 0,
              zIndex: 1000,
            }}
          >
            <Tabs
              sx={{
                bgcolor: "background.paper",
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
                label="Budgets"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  fontFamily: "helvetica",
                  fontWeight: "900",
                }}
                label="Income"
                {...a11yProps(1)}
              />
              <Tab
                data-qa={"budget-tab"}
                sx={{
                  fontFamily: "helvetica",
                  fontWeight: "900",
                }}
                label="Bills"
                {...a11yProps(2)}
              />
              {/* <Tab
                sx={{
                  fontFamily: "helvetica",
                  fontWeight: "900",
                }}
                label="Payoff"
                {...a11yProps(3)}
              /> */}
            </Tabs>
          </Box>
          <Outlet />
        </Box>
      </div>
    </>
  );
}

export default App;
