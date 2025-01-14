import { Fab, TextField } from "@mui/material";
import styles from "./input-row.module.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import { BillModel } from "components/bills/bill-model";
import { useState } from "react";

type InputRowProps = {
  index: number;
  column: BillModel;
  rowAmountOnChange: (amount: number, index: number) => void;
  removeRow: () => void;
};
const InputRow = (props: InputRowProps) => {
  const { index, column, rowAmountOnChange, removeRow } = props;
  const [showRemoveIcon, setShowRemoveIcon] = useState<boolean>(false);

  return (
    <div
      className={`${styles.billRow}`}
      onMouseEnter={() => setShowRemoveIcon(true)}
      onMouseLeave={() => setShowRemoveIcon(false)}
      onClick={() => setShowRemoveIcon(true)}
    >
      {showRemoveIcon && (
        <div className={styles.removeIconHolder}>
          <Fab onClick={() => removeRow()} color="error" size="small" aria-label="add">
            <RemoveIcon />
          </Fab>
        </div>
      )}
      <div key={index} className={styles.gridColumn}>
        {column.billName}
      </div>
      <div className={styles.textContainer}>
        <TextField
          value={column.billAmount === 0 ? undefined : column.billAmount}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => {
            e.stopPropagation();
            rowAmountOnChange(Number(e.target.value), index);
          }}
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
