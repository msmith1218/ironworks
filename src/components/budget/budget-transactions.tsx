import { useState } from "react";
import styles from "components/budget/budget.module.scss";
import { AccordionGroup, DialogTitle } from "@mui/joy";
import BudgetTransactionGroup from "components/budget/budget-transaction-group";
import { useBudgetsService } from "common/services/budgets-service";
import { PieChart } from "@mui/x-charts/PieChart";
import { DefaultizedPieValueType, useDrawingArea } from "@mui/x-charts";
import { styled } from "@mui/material";
import currency from "currency.js";
import { useTransactionService } from "common/services/transaction-service";
import { useBillsStorage } from "common/state-management/bills-storage";
import { useIncomeService } from "common/services/income-service";

const BudgetTransactions = (): JSX.Element => {
  const [expandedTransactionIndex, setExpandedTransactionIndex] = useState<number | null>();

  const { incomeLines } = useIncomeService();
  const bills = useBillsStorage((state) => state.bills);



  const incomeTotal = (incomeLines ?? []).reduce((acc, curr) => acc + (curr.amount || 0), 0)
  const billsTotal = (bills ?? []).reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const budgetAvailable = currency(incomeTotal).subtract(billsTotal);


  const { budgetLines } = useBudgetsService();
  const {transactionLines} = useTransactionService();
  const transactionTotal = currency(transactionLines.reduce((acc, curr) => currency(acc).add(curr.amount || 0).value, 0));
  const remainingMonthly = budgetAvailable.subtract(transactionTotal);


  const transactionGroups = budgetLines.map((b) => {
    return {
      id: b.id,
      value: transactionLines.filter((x) => {return x.budgetId === b.id}).reduce((acc, curr) => currency(acc).add(curr.amount || 0).value, 0),
      label: b.name,
    };
  }).filter((x) => {return x.value > 0});

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 30,
  }));

  const PieCenterLabel = ({ children }: { children: React.ReactNode }) => {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  };

  const getArcLabel = (params: DefaultizedPieValueType): string => {
    return `${params.label}`;
  };

  return (
    <>
      <div className={styles.transactionSumDisplay}>
        <div  className={styles.displayHeader}>
          <DialogTitle>Usage Breakdown</DialogTitle>
        </div>
      </div>
      <div className={styles.chartHolder}>
        <div className={styles.chartDisplay}>
          <PieChart
            series={[
              {
                data: transactionGroups,
                arcLabel: getArcLabel,
                innerRadius: "70%",
                cornerRadius: 5,
              },
            ]}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            slotProps={{ legend: { hidden: true } }}
          >
            <PieCenterLabel>
              {transactionTotal.format()}
            </PieCenterLabel>
          </PieChart>
        </div>
      </div>
      <div  className={styles.remainingDisplay}>
      <DialogTitle>Remaining: {remainingMonthly.format()} from total: {budgetAvailable.format()}</DialogTitle>
        
      </div>
      <div className={styles.transactionDisplay}>
        <div className={styles.transactionsLayout}>
          <AccordionGroup variant="outlined" sx={{ width: "100%" }}>
            {budgetLines &&
              budgetLines.map((column) => (
                <BudgetTransactionGroup
                  index={column.id}
                  key={column.id}
                  isExpanded={expandedTransactionIndex === column.id}
                  expand={(i) => setExpandedTransactionIndex(i)}
                  column={column}
                  editRow={() => {
                    console.log("nothing");
                  }}
                />
              ))}
          </AccordionGroup>
        </div>
      </div>
    </>
  );
};

export default BudgetTransactions;
