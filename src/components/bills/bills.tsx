import { useEffect, useState } from "react";
import styles from "components/bills/bills.module.scss";
import { Skeleton } from "@mui/material";
import { BillModel } from "components/bills/bill-model";
import currency from "currency.js";
import DisplayCard from "common/card/display-card";
import Grid from "@mui/joy/Grid";
import HeaderInput from "common/header-input/header-input";
import CreateCardModal from "common/card/create-card-modal";
import EditCardModal from "common/card/edit-card-modal";
import { useBillService } from "common/services/bill-service";

const Bills = (): JSX.Element => {
  const { bills, createBill, editBill, removeBill } = useBillService();
  const [editingBill, setEditingBill] = useState<BillModel>();
  const [openCreateCardModal, setOpenCreateCardModal] = useState<boolean>(false);

  const [runningTotal, setRunningTotal] = useState<number>(0);

  const SaveCardEdit = (newBill: BillModel) => {
    editBill(newBill);

    setEditingBill(undefined);
  };

  useEffect(() => {
    setRunningTotal((bills ?? []).reduce((acc, curr) => acc + (curr.amount || 0), 0));
  }, [bills]);

  const removeRow = (billId: number) => {
    removeBill(billId);
  };

  return (
    <div className={styles.billsLayout}>
      <HeaderInput
        openAddModal={() => setOpenCreateCardModal(true)}
        headerText="Enter Recurring Bills"
      />

      <div className={styles.cardsContainer}>
        <div className={styles.cardsGrid}>
          <Grid
            container
            spacing={1}
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            {bills &&
              bills.map((column) => (
                <Grid key={`${column.id}-grid`}>
                  <DisplayCard
                    editCard={() => {
                      setEditingBill(column);
                    }}
                    key={`${column.id}-card`}
                    bill={column}
                    budgetSum={runningTotal}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>

      {(!bills || bills.length === 0) && (
        <Skeleton variant="rectangular" width={"100%"} height={80} sx={{ borderRadius: "10px" }} />
      )}

      <div className={styles.totalFooter}>
        <div className={styles.total}>
          <div className={styles.totalText}>Total</div>
          <div className={styles.totalAmount}>{currency(runningTotal).format()}</div>
        </div>
      </div>
      {openCreateCardModal && (
        <CreateCardModal
          modalHeaderDialog="Add New Bill"
          open={openCreateCardModal}
          onClose={() => setOpenCreateCardModal(false)}
          create={createBill}
        />
      )}
      {!!editingBill && (
        <EditCardModal
          bill={editingBill}
          modalHeaderDialog="Edit Bill"
          open={!!editingBill}
          deleteCard={() => removeRow(editingBill.id)}
          onClose={() => {
            setEditingBill(undefined);
          }}
          save={SaveCardEdit}
        />
      )}
    </div>
  );
};

export default Bills;
