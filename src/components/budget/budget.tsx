import { useEffect, useState } from "react";
import styles from "./budget.module.scss";
import InputRow from "../../common/input-row";

import { Skeleton } from "@mui/material";

import { useBillsStorage } from "../../common/state-management/bills-storage";
import currency from "currency.js";
import { BillModel } from "../../components/bills/bill-model";

import BudgetTransactionGroup from "./budget-transaction-group";
import { AccordionGroup, Grid } from "@mui/joy";
import { BudgetModel } from "./budget-model";
import DisplayCard from "../../common/display-card";
import HeaderInput from "../../common/header-input/header-input";

const Budget = (): JSX.Element => {
  const incomeLines = useBillsStorage((state) => state.incomeLines);
  const budgetLines = useBillsStorage((state) => state.budgetLines);
  const setState = useBillsStorage((state) => state.setState);
  const bills = useBillsStorage((state) => state.bills);
  const [inputValue, setInputValue] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);
  const [incomeTotal, setIncomeTotal] = useState<number>(0);
  const [billsTotal, setBillsTotal] = useState<number>(0);
  const [expandedTransactionIndex, setExpandedTransactionIndex] = useState<number | null>();

  useEffect(() => {
    setIncomeTotal((incomeLines ?? []).reduce((acc, curr) => acc + (curr.billAmount || 0), 0));
  }, [incomeLines]);

  useEffect(() => {
    setBillsTotal((bills ?? []).reduce((acc, curr) => acc + (curr.billAmount || 0), 0));
  }, [bills]);

  const addBill = () => {
    if (inputValue.trim() !== "") {
      setState((state) => {
        state.budgetLines = [...(budgetLines ?? []), { billName: inputValue } as BudgetModel];
      });

      setInputValue("");
    }
  };

  const addBillAmount = (amount: number, index: number) => {
    const updatedColumns = budgetLines
      ? budgetLines.map((column, i) => (i === index ? { ...column, billAmount: amount } : column))
      : [{ billAmount: amount } as BudgetModel];

    setState((state) => {
      state.budgetLines = updatedColumns;
    });
  };

  const removeRow = (index: number) => {
    setState((state) => {
      state.budgetLines = budgetLines.filter((_, i) => i !== index);
    });
  };

  const updateRowName = (name: string, index: number) => {
    const updatedColumns = bills
      ? bills.map((column, i) => (i === index ? { ...column, billName: name } : column))
      : [{ billName: name } as BillModel];

    setState((state) => {
      state.bills = updatedColumns;
    });
  };

  return (
    <div className={styles.billsLayout}>
      <HeaderInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        addRow={addBill}
        showInput={showInput}
        setShowInput={setShowInput}
        textInputName="Enter Budget Area"
        headerText=""
      />

      {!showInput && (
        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            <Grid
              container
              spacing={1}
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              {budgetLines &&
                budgetLines.map((column, index) => (
                  <Grid>
                    <DisplayCard
                      key={index}
                      index={index}
                      bill={column}
                      budgetSum={budgetLines.reduce((acc, curr) => acc + (curr.billAmount || 0), 0)}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      )}

      {showInput && (
        <div className={styles.grid}>
          {(!budgetLines || budgetLines.length === 0) && (
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={80}
              sx={{ borderRadius: "10px" }}
            />
          )}

          {budgetLines &&
            budgetLines.map((column, index) => (
              <InputRow
                index={index}
                key={index}
                column={column}
                rowAmountOnChange={addBillAmount}
                removeRow={() => removeRow(index)}
                editRow={(name) => {
                  updateRowName(name, index);
                }}
              />
            ))}
        </div>
      )}
      <div className={styles.lowerDisplay}>
        <div className={styles.billsHeader}>
          <div>Available</div>
          <div>{currency(incomeTotal).subtract(billsTotal).format()}</div>
        </div>
        <div className={styles.billsHeader}>
          <div>
            <div>After Budgets</div>
            <div>
              {currency(incomeTotal)
                .subtract(billsTotal)
                .subtract(budgetLines.reduce((acc, curr) => acc + (curr.billAmount || 0), 0))
                .format()}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.transactionsLayout}>
        <AccordionGroup variant="outlined" sx={{ width: "100%" }}>
          {budgetLines &&
            budgetLines.map((column, index) => (
              <BudgetTransactionGroup
                index={index}
                key={index}
                isExpanded={expandedTransactionIndex === index}
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
  );
};

export default Budget;
