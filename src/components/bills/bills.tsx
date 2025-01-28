import { useEffect, useState } from "react";
import styles from "components/bills/bills.module.scss";
import InputRow from "common/input-row";

import { List, Skeleton } from "@mui/material";

import { BillModel } from "components/bills/bill-model";
import { useBillsStorage } from "common/state-management/bills-storage";
import currency from "currency.js";

import DisplayCard from "common/display-card";
import Grid from "@mui/joy/Grid";
import HeaderInput from "common/header-input/header-input";

const Bills = (): JSX.Element => {
  const bills = useBillsStorage((state) => state.bills);
  const setState = useBillsStorage((state) => state.setState);

  const [inputValue, setInputValue] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);
  const [runningTotal, setRunningTotal] = useState<number>(0);

  useEffect(() => {
    setRunningTotal((bills ?? []).reduce((acc, curr) => acc + (curr.billAmount || 0), 0));
  }, [bills]);

  const addBill = () => {
    if (inputValue.trim() !== "") {
      setState((state) => {
        state.bills = [...(bills ?? []), { billName: inputValue } as BillModel];
      });

      setInputValue("");
    }
  };

  const addBillAmount = (amount: number, index: number) => {
    const updatedColumns = bills
      ? bills.map((column, i) => (i === index ? { ...column, billAmount: amount } : column))
      : [{ billAmount: amount } as BillModel];

    setState((state) => {
      state.bills = updatedColumns;
    });
  };

  const removeRow = (index: number) => {
    setState((state) => {
      state.bills = bills.filter((_, i) => i !== index);
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
        textInputName="Bill Name"
        headerText="Enter Recurring Bills"
      />

      {!showInput && (
        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            <Grid
              container
              spacing={1}
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              {bills &&
                bills.map((column, index) => (
                  <Grid key={`${index}-grid`}>
                    <DisplayCard
                      key={`${index}-card`}
                      index={index}
                      bill={column}
                      budgetSum={runningTotal}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      )}
      {(!bills || bills.length === 0) && (
        <Skeleton variant="rectangular" width={"100%"} height={80} sx={{ borderRadius: "10px" }} />
      )}
      {showInput && (
        <div className={styles.grid}>
          <List sx={{ width: "100%" }}>
            {bills &&
              bills.map((column, index) => (
                <InputRow
                  key={index}
                  index={index}
                  column={column}
                  rowAmountOnChange={addBillAmount}
                  removeRow={() => removeRow(index)}
                  editRow={(name) => {
                    updateRowName(name, index);
                  }}
                />
              ))}
          </List>
        </div>
      )}
      <div className={styles.totalFooter}>
        <div className={styles.total}>
          <div className={styles.totalText}>Total</div>
          <div className={styles.totalAmount}>{currency(runningTotal).format()}</div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
