import { useEffect, useState } from "react";
import styles from "components/income/income.module.scss";

import { Skeleton } from "@mui/material";

import currency from "currency.js";
import { BillModel } from "components/bills/bill-model";
import HeaderInput from "common/header-input/header-input";
import CreateCardModal from "common/card/create-card-modal";
import { Grid } from "@mui/joy";
import DisplayCard from "common/card/display-card";
import { useIncomeService } from "common/services/income-service";
import { useBillService } from "common/services/bill-service";
import EditCardModal from "common/card/edit-card-modal";
const Income = (): JSX.Element => {
  const { bills } = useBillService();

  const { incomeLines, createIncome, editIncome, removeIncome } = useIncomeService();
  const [editingIncome, setEditingIncome] = useState<BillModel>();

  const [runningTotal, setRunningTotal] = useState<number>(0);
  const [billsTotal, setBillsTotal] = useState<number>(0);
  const [openCreateCardModal, setOpenCreateCardModal] = useState<boolean>(false);
  useEffect(() => {
    setRunningTotal((incomeLines ?? []).reduce((acc, curr) => acc + (curr.amount || 0), 0));
  }, [incomeLines]);

  useEffect(() => {
    setBillsTotal((bills ?? []).reduce((acc, curr) => acc + (curr.amount || 0), 0));
  }, [bills]);

  const SaveCardEdit = (newBill: BillModel) => {
    editIncome(newBill);

    setEditingIncome(undefined);
  };

  return (
    <div className={styles.billsLayout}>
      <HeaderInput
        openAddModal={() => setOpenCreateCardModal(true)}
        headerText="Enter Income Sources"
      />

      <div className={styles.cardsContainer}>
        <div className={styles.cardsGrid}>
          <Grid
            container
            spacing={1}
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            {incomeLines &&
              incomeLines.map((column, index) => (
                <Grid>
                  <DisplayCard
                    editCard={() => setEditingIncome(column)}
                    key={index}
                    bill={column}
                    budgetSum={incomeLines.reduce((acc, curr) => acc + (curr.amount || 0), 0)}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
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
      {openCreateCardModal && (
        <CreateCardModal
          modalHeaderDialog="Add New Income"
          open={openCreateCardModal}
          onClose={() => setOpenCreateCardModal(false)}
          create={createIncome}
        />
      )}
      {!!editingIncome && (
        <EditCardModal
          bill={editingIncome}
          modalHeaderDialog="Edit Bill"
          open={!!editingIncome}
          deleteCard={() => removeIncome(editingIncome.id)}
          onClose={() => {
            setEditingIncome(undefined);
          }}
          save={SaveCardEdit}
        />
      )}
    </div>
  );
};

export default Income;
