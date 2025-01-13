import { useState } from "react";
import styles from "./bills.module.scss";

import Button from "@mui/material/Button";
import { Fab, Skeleton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import IncomeRow from "./income-row";

const Income = () => {
  const [columns, setColumns] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const addColumn = () => {
    if (inputValue.trim() !== "") {
      setColumns([...columns, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className={styles.billsLayout}>
      <div className={styles.billsHeader}>
        {!showInput && (
          <Fab
            onClick={() => setShowInput(!showInput)}
            color="primary"
            size="small"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        )}
        {showInput && (
          <>
            <div className={styles.allContainer}>
              <TextField
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                id="standard-basic"
                label="Enter Income"
                type="number"
                variant="standard"
              />
              <div className={styles.addContainer}>
                <Button
                  className={styles.addBtn}
                  onClick={addColumn}
                  variant="contained"
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
        {columns.length === 0 && <Skeleton variant="rectangular" width={"100%"} height={118} />}

        {columns.map((column, index) => (
          <IncomeRow index={index} incomeAmount={column} />
        ))}
      </div>
    </div>
  );
};

export default Income;
