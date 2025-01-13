import { TextField } from "@mui/material";
import styles from "./input-row.module.scss";
import { useState } from "react";

type InputRowProps = {
  index: number;
  column: string;
};
const InputRow = (props: InputRowProps) => {
  const [billAmount, setBillAmount] = useState<string>("");

  return (
    <div className={styles.billRow}>
      <div key={props.index} className={styles.gridColumn}>
        {props.column}
      </div>
      <div className={styles.textContainer}>
        <TextField
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          id="standard-basic"
          type="number"
          variant="outlined"
          size="small"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export default InputRow;
