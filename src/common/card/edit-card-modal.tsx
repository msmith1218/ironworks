import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { useState } from "react";
import { TextField } from "@mui/material";
import { BillModel } from "components/bills/bill-model";
import styles from "common/card/edit-card-modal.module.scss";
import { BudgetModel } from "components/budget/budget-model";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  save: (bill: BillModel | BudgetModel) => void;
  modalHeaderDialog: string;
  bill: BillModel | undefined;
  deleteCard: () => void;
};
const EditCardModal = (props: ModalProps) => {
  const { open, onClose, save, modalHeaderDialog, bill, deleteCard } = props;
  const [amount, setAmount] = useState<number>(bill?.amount ?? 0);
  const [name, setName] = useState<string>(bill?.name ?? "");

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog variant="outlined" role="alertdialog">
        <div className={styles.cardHeader}>
          <DialogTitle>{modalHeaderDialog}</DialogTitle>

          <Button
            variant="soft"
            color="danger"
            onClick={() => {
              deleteCard();
              onClose();
            }}
          >
            Delete
          </Button>
        </div>

        <Divider />
        <DialogContent>Name</DialogContent>
        <TextField
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="standard-basic"
          type="string"
          variant="outlined"
          size="small"
          placeholder=""
        />
        <DialogContent>Amount</DialogContent>
        <TextField
          value={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          id="standard-basic"
          type="number"
          variant="outlined"
          size="small"
          placeholder="0.00"
        />

        <DialogActions>
          <Button
            variant="solid"
            color="success"
            onClick={() => {
              //TODO: input validation messages
              if (amount > 0 && name.length > 0) {
                save({ ...bill, amount: amount, name: name } as BillModel);
                onClose();
              }
            }}
          >
            Save
          </Button>
          <Button variant="plain" color="neutral" onClick={onClose}>
            Cancel
          </Button>{" "}
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
};

export default EditCardModal;
