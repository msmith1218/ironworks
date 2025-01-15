import { useEffect, useState } from "react";
import styles from "./bills.module.scss";
import InputRow from "../../common/input-row";
import Button from "@mui/joy/Button";
import { Fab, List, Skeleton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { BillModel } from "./bill-model";
import { useBillsStorage } from "../../common/state-management/bills-storage";
import currency from "currency.js";
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
      <div className={styles.billsHeader}>
        {!showInput && (
          <>
            <div className={styles.billdescript}>Enter Reccuring Bills</div>
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
          </>
        )}
        {showInput && (
          <>
            <div className={styles.allContainer}>
              <div className={styles.textContainer}>
                <TextField
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  id="standard-basic"
                  label="Enter Bill Name"
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
        {(!bills || bills.length === 0) && (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={80}
            sx={{ borderRadius: "10px" }}
          />
        )}

        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
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
