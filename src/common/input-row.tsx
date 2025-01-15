import { Fab, TextField } from "@mui/material";
import styles from "./input-row.module.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import { BillModel } from "components/bills/bill-model";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { Typography } from "@mui/joy";

type InputRowProps = {
  index: number;
  column: BillModel;
  rowAmountOnChange: (amount: number, index: number) => void;
  removeRow: () => void;
  editRow: (name: string) => void;
};
const InputRow = (props: InputRowProps) => {
  const { index, column, rowAmountOnChange, removeRow, editRow } = props;
  const [showHighlighted, setShowHighlighted] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <>
      <div className={styles.spacer}></div>
      <div
        className={`${styles.billRow} ${showHighlighted ? styles.showRemoveIcon : ""}`}
        onMouseEnter={() => setShowHighlighted(true)}
        onMouseLeave={() => setShowHighlighted(false)}
        onClick={() => setShowHighlighted(true)}
      >
        {showHighlighted && (
          <div className={styles.removeIconHolder}>
            <Fab onClick={() => removeRow()} color="error" size="small" aria-label="add">
              <RemoveIcon />
            </Fab>
            <Fab onClick={() => setIsEditing(!isEditing)} size="small">
              <Edit />
            </Fab>
          </div>
        )}
        <div key={index} className={`${!isEditing ? styles.gridColumn : ""}`}>
          {isEditing ? (
            <div>
              <TextField
                value={column.billName}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  e.stopPropagation();
                  editRow(e.target.value);
                }}
                id="standard-basic"
                variant="outlined"
                size="small"
              />
            </div>
          ) : (
            <Typography level={"h4"} component="span">
              {column.billName}
            </Typography>
          )}
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
    </>
  );
};

export default InputRow;
