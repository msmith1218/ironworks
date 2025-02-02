import { useEffect, useState } from "react";
import styles from "components/budget/budget.module.scss";

import { Skeleton } from "@mui/material";

import currency from "currency.js";
import { BillModel } from "components/bills/bill-model";

import { AccordionGroup, Grid } from "@mui/joy";
import DisplayCard from "common/card/display-card";
import HeaderInput from "common/header-input/header-input";
import { useBillsStorage } from "common/state-management/bills-storage";
import BudgetTransactionGroup from "components/budget/budget-transaction-group";
import CreateCardModal from "common/card/create-card-modal";
import EditCardModal from "common/card/edit-card-modal";
import { useBudgetsService } from "common/services/budgets-service";
import { useIncomeService } from "common/services/income-service";
import { BudgetModel } from "./budget-model";

const Budget = (): JSX.Element => {
  const bills = useBillsStorage((state) => state.bills);
  const [incomeTotal, setIncomeTotal] = useState<number>(0);
  const [billsTotal, setBillsTotal] = useState<number>(0);
  const [expandedTransactionIndex, setExpandedTransactionIndex] = useState<number | null>();
  const [openCreateCardModal, setOpenCreateCardModal] = useState<boolean>(false);

  const { incomeLines } = useIncomeService();
  const { budgetLines, createBudget, editBudget, removeBudget } = useBudgetsService();
  const [editingBudget, setEditingBudget] = useState<BudgetModel>();

  useEffect(() => {
    setIncomeTotal((incomeLines ?? []).reduce((acc, curr) => acc + (curr.amount || 0), 0));
  }, [incomeLines]);

  useEffect(() => {
    setBillsTotal((bills ?? []).reduce((acc, curr) => acc + (curr.amount || 0), 0));
  }, [bills]);

  const removeRow = (id: number) => {
    removeBudget(id);
  };

  const SaveCardEdit = (newBill: BillModel) => {
    editBudget({ ...newBill } as BudgetModel);

    setEditingBudget(undefined);
  };

  return (
    <div className={styles.billsLayout} data-qa={"budgets-layout"}>
      <HeaderInput openAddModal={() => setOpenCreateCardModal(true)} headerText="Enter Budgets" />

      <div className={styles.cardsContainer}>
        <div className={styles.cardsGrid}>
          <Grid
            container
            spacing={1}
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            {budgetLines &&
              budgetLines.map((column) => (
                <Grid key={`${column.id}-grid`}>
                  <DisplayCard
                    editCard={() => setEditingBudget(column)}
                    key={`${column.id}-card`}
                    bill={column}
                    budgetSum={budgetLines.reduce((acc, curr) => acc + (curr.amount || 0), 0)}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>

      {(!budgetLines || budgetLines.length === 0) && (
        <Skeleton variant="rectangular" width={"100%"} height={80} sx={{ borderRadius: "10px" }} />
      )}

      <div className={styles.lowerDisplay}>
        <div className={styles.billsHeader}>
          <div>Available</div>
          <div>{currency(incomeTotal).subtract(billsTotal).format()}</div>
        </div>
        <div className={styles.billsHeader}>
          <div>
            <div>After Budgets</div>
            <div>
              {currency(incomeTotal)
                .subtract(billsTotal)
                .subtract(budgetLines.reduce((acc, curr) => acc + (curr.amount || 0), 0))
                .format()}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.transactionsLayout}>
        <AccordionGroup variant="outlined" sx={{ width: "100%" }}>
          {budgetLines &&
            budgetLines.map((column) => (
              <BudgetTransactionGroup
                index={column.id}
                key={column.id}
                isExpanded={expandedTransactionIndex === column.id}
                expand={(i) => setExpandedTransactionIndex(i)}
                column={column}
                editRow={() => {
                  console.log("nothing");
                }}
              />
            ))}
        </AccordionGroup>
      </div>
      {openCreateCardModal && (
        <CreateCardModal
          modalHeaderDialog="Add New Budget"
          open={openCreateCardModal}
          onClose={() => setOpenCreateCardModal(false)}
          create={createBudget}
        />
      )}
      {!!editingBudget && (
        <EditCardModal
          bill={editingBudget}
          modalHeaderDialog="Edit Budget"
          open={!!editingBudget}
          deleteCard={() => removeRow(editingBudget.id)}
          onClose={() => {
            setEditingBudget(undefined);
          }}
          save={SaveCardEdit}
        />
      )}
    </div>
  );
};

export default Budget;
