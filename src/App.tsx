import Bills from "./components/bills/bills";
import styles from "./App.module.scss";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Income from "./components/income/income";
import Budget from "./components/budget/budget";
import Payoff from "./components/payoff/payoff";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={styles.scrollable}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.app}>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              position: "sticky",
              top: 0,
              zIndex: 5,
              bgcolor: "background.paper",
            }}
          >
            <Tabs value={value} onChange={handleChange} aria-label="main tabs">
              <Tab label="Bills" {...a11yProps(0)} />
              <Tab label="Income" {...a11yProps(1)} />
              <Tab label="Budgets" {...a11yProps(2)} />
              <Tab label="Payoff" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Bills />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Income />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Budget />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Payoff />
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
}

export default App;
