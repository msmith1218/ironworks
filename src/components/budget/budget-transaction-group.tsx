import { Fab, List, ListItem, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import styles from "./budget-transaction-group.module.scss";
import { BudgetModel } from "./budget-model";
import DeleteIcon from "@mui/icons-material/Delete";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/joy";
import { useTransactionService } from "common/services/transaction-service";
import { TransactionLine } from "./transaction-line";

type InputRowProps = {
  index: number;
  column: BudgetModel;
  isExpanded: boolean;
  editRow: (name: string) => void;
  expand: (index: number | null) => void;
};

const BudgetTransactionGroup = (props: InputRowProps): JSX.Element => {
  const { index, isExpanded, column, expand } = props;
  const { addNewTransaction, editTransaction, budgetTransactionLines, removeTransaction } =
    useTransactionService(index);

  const addTransaction = () => {
    addNewTransaction(column.id);
  };

  const rowAmountOnChange = (amount: number, line: TransactionLine) => {
    editTransaction({ ...line, amount: amount });
  };

  const rowNameOnChange = (name: string, line: TransactionLine) => {
    editTransaction({ ...line, name: name });
  };

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
          <Typography component="span">{column.name}</Typography>
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
                        value={column.amount ?? ""}
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
