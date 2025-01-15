import { useEffect, useState } from "react";
import styles from "./income.module.scss";
import InputRow from "../../common/input-row";
import Button from "@mui/joy/Button";
import { Fab, Skeleton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useBillsStorage } from "../../common/state-management/bills-storage";
import currency from "currency.js";
import { BillModel } from "../../components/bills/bill-model";
const Income = (): JSX.Element => {
  const incomeLines = useBillsStorage((state) => state.incomeLines);
  const setState = useBillsStorage((state) => state.setState);
  const bills = useBillsStorage((state) => state.bills);
  const [inputValue, setInputValue] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);
  const [runningTotal, setRunningTotal] = useState<number>(0);
  const [billsTotal, setBillsTotal] = useState<number>(0);

  useEffect(() => {
    setRunningTotal((incomeLines ?? []).reduce((acc, curr) => acc + (curr.billAmount || 0), 0));
  }, [incomeLines]);

  useEffect(() => {
    setBillsTotal((bills ?? []).reduce((acc, curr) => acc + (curr.billAmount || 0), 0));
  }, [bills]);

  const addBill = () => {
    if (inputValue.trim() !== "") {
      setState((state) => {
        state.incomeLines = [...(incomeLines ?? []), { billName: inputValue } as BillModel];
      });

      setInputValue("");
    }
  };

  const addBillAmount = (amount: number, index: number) => {
    const updatedColumns = incomeLines
      ? incomeLines.map((column, i) => (i === index ? { ...column, billAmount: amount } : column))
      : [{ billAmount: amount } as BillModel];

    setState((state) => {
      state.incomeLines = updatedColumns;
    });
  };

  const removeRow = (index: number) => {
    setState((state) => {
      state.incomeLines = incomeLines.filter((_, i) => i !== index);
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
      <div className={styles.billsHeader}>
        {!showInput && (
          <div className={styles.addIcon}>
            <Fab
              onClick={() => setShowInput(!showInput)}
              color="primary"
              size="small"
              aria-label="add"
              sx={{ float: "right", backgroundColor: "green" }}
            >
              <AddIcon />
            </Fab>
          </div>
        )}
        {showInput && (
          <>
            <div className={styles.allContainer}>
              <div className={styles.textContainer}>
                <TextField
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  id="standard-basic"
                  label="Enter Income Source"
                  variant="standard"
                />
              </div>
              <div className={styles.addContainer}>
                <Button
                  className={styles.addBtn}
                  onClick={addBill}
                  size="lg"
                  variant="soft"
                  color="primary"
                >
                  Add
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={styles.grid}>
        {(!incomeLines || incomeLines.length === 0) && (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={80}
            sx={{ borderRadius: "10px" }}
          />
        )}

        {incomeLines &&
          incomeLines.map((column, index) => (
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
      <div className={styles.totalFooter}>
        <div className={styles.total}>
          <div className={styles.totalText}>Total</div>
          <div className={styles.totalAmount}>{currency(runningTotal).format()}</div>
        </div>
        <div className={styles.total}>
          <div className={styles.totalText}>Less Bills</div>
          <div className={styles.totalAmount}>
            {currency(runningTotal).subtract(billsTotal).format()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
