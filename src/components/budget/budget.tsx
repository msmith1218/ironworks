import { useState } from "react";
import styles from "components/budget/budget.module.scss";

import { Box, Radio, Typography } from "@mui/joy";

import BudgetLines from "./budget-lines";
import BudgetTransactions from "./budget-transactions";

const Budget = (): JSX.Element => {
  enum SelectedDisplay {
    budgets = "budgets",
    transactions = "transactions",
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === SelectedDisplay.budgets) {
      setSelectedValue(SelectedDisplay.budgets);
    } else {
      setSelectedValue(SelectedDisplay.transactions);
    }
  };
  const [selectedValue, setSelectedValue] = useState<SelectedDisplay>(SelectedDisplay.budgets);

  return (
    <>
      <div className={styles.budgetSectionHeader}>
        <div className={styles.budgetSectionWrapper}>
          <Typography sx={{ paddingRight: "10px" }} variant="plain">
            Budgets
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: "5px" }}>
            <Radio
              checked={selectedValue === SelectedDisplay.budgets}
              onChange={handleChange}
              value={SelectedDisplay.budgets}
              name="radio-buttons"
              slotProps={{ input: { "aria-label": "A" } }}
            />
            <Radio
              checked={selectedValue === SelectedDisplay.transactions}
              onChange={handleChange}
              value={SelectedDisplay.transactions}
              name="radio-buttons"
              slotProps={{ input: { "aria-label": "B" } }}
            />
          </Box>
          <Typography sx={{ paddingLeft: "10px" }} variant="plain">
            Transactions
          </Typography>
        </div>
      </div>
      <div className={styles.billsLayout} data-qa={"budgets-layout"}>
        {selectedValue === SelectedDisplay.budgets && <BudgetLines />}
        {selectedValue === SelectedDisplay.transactions && <BudgetTransactions />}
      </div>
    </>
  );
};

export default Budget;
