import { Fab, List, ListItem, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import styles from "./budget-transaction-group.module.scss";
import { BudgetModel } from "./budget-model";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  LinearProgress,
  Typography,
} from "@mui/joy";
import { useTransactionService } from "common/services/transaction-service";
import { TransactionLine } from "./transaction-line";
import currency from "currency.js";

type InputRowProps = {
  index: number;
  column: BudgetModel;
  isExpanded: boolean;
  editRow: (name: string) => void;
  expand: (index: number | null) => void;
};

const BudgetTransactionGroup = (props: InputRowProps): JSX.Element => {
  const { index, isExpanded, column, expand } = props;
  const { addNewTransaction, editTransaction, transactionLines, removeTransaction } =
    useTransactionService();

  const budgetTransactionLines = transactionLines.filter((x) => x.budgetId === column.id);

  const addTransaction = () => {
    addNewTransaction(column.id);
  };

  const rowAmountOnChange = (amount: number, line: TransactionLine) => {
    editTransaction({ ...line, amount: amount });
  };

  const rowNameOnChange = (name: string, line: TransactionLine) => {
    editTransaction({ ...line, name: name });
  };

  const amountRemaining = currency(column.amount).subtract(
    currency(
      transactionLines
        .filter((x) => x.budgetId === column.id)
        .reduce((acc, curr) => acc + (curr.amount || 0), 0)
    )
  );

  const percentageUsed = amountRemaining.divide(column.amount ?? 1).multiply(100).value;

  const getProgressBarColor =
    percentageUsed < 51 ? (percentageUsed < 10 ? "danger" : "warning") : "success";

  return (
    <Accordion
      expanded={isExpanded}
      onChange={() => {
        if (isExpanded) {
          expand(null);
        } else {
          expand(index);
        }
      }}
    >
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, .125)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.accordionHeader}>
          <div className={styles.headerDisplay}>
            <Typography>{column.name}</Typography>
            <Typography sx={{ paddingBottom: "5px" }} level="body-xs" component="span">
              {`Remaining: ${amountRemaining.format()}`}
            </Typography>
            <div className={styles.progress}>
              <LinearProgress
                sx={{ backgroundColor: "lightGrey" }}
                determinate
                variant={getProgressBarColor === "danger" ? "outlined" : "soft"}
                size="lg"
                color={getProgressBarColor}
                value={percentageUsed}
              ></LinearProgress>
            </div>
          </div>

          {budgetTransactionLines && budgetTransactionLines.length > 0 && isExpanded && (
            <div className={styles.addHeader}>
              <div className={styles.addHeaderWithin}>
                <Fab
                  onClick={(e) => {
                    e.stopPropagation();
                    addTransaction();
                  }}
                  size="small"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </div>
            </div>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0" }}>
        {(!budgetTransactionLines || budgetTransactionLines.length < 1) && (
          <div className={styles.accordionDetails}>
            <Fab onClick={() => addTransaction()} size="small" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        )}
        {budgetTransactionLines && budgetTransactionLines.length > 0 && (
          <List dense={true}>
            {budgetTransactionLines &&
              budgetTransactionLines.map((column) => (
                <ListItem sx={{ width: "100%" }} key={column.transactionLineId}>
                  <div className={styles.listMainDisplay}>
                    <div className={styles.listHeaders}>
                      <Typography level={"body-md"}>Transaction Name</Typography>
                      <Typography level={"body-md"}>Amount</Typography>
                    </div>
                    <div className={styles.listInnerDisplay}>
                      <TextField
                        value={column.name ?? ""}
                        onChange={(e) => {
                          rowNameOnChange(e.target.value, column);
                        }}
                        id="standard-basic"
                        type="string"
                        variant="outlined"
                        size="small"
                        placeholder="Txn Name"
                      />
                      <TextField
                        sx={{ marginLeft: "10px" }}
                        value={(column.amount || column.amount === 0) ?? ""}
                        onChange={(e) => {
                          rowAmountOnChange(Number(e.target.value), column);
                        }}
                        id="standard-basic"
                        type="number"
                        variant="outlined"
                        size="small"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div
                    className={styles.deleteButton}
                    onClick={() => removeTransaction(column.transactionLineId)}
                  >
                    <DeleteIcon sx={{ verticalAlign: "middle" }} />
                  </div>
                </ListItem>
              ))}
          </List>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default BudgetTransactionGroup;
