import { useState } from "react";
import styles from "./bills.module.scss";
import InputRow from "../../common/input-row";
import Button from "@mui/material/Button";
import { Fab, Skeleton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Bills = () => {
  const [billNames, setColumns] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const addColumn = () => {
    if (inputValue.trim() !== "") {
      setColumns([...billNames, inputValue]);
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
                placeholder="Enter Bill Name"
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
        {billNames.length === 0 && <Skeleton variant="rectangular" width={"100%"} height={118} />}

        {billNames.map((column, index) => (
          <InputRow index={index} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Bills;
