import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { useState } from "react";
import { TextField } from "@mui/material";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  create: (name: string, amount: number) => void;
  modalHeaderDialog: string;
};
const CreateCardModal = (props: ModalProps) => {
  const { open, onClose, create, modalHeaderDialog } = props;
  const [amount, setAmount] = useState<number>();
  const [name, setName] = useState<string>("");

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>{modalHeaderDialog}</DialogTitle>
        <Divider />
        <DialogContent>Name</DialogContent>
        <TextField
          //value={name}
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
          value={amount ?? ""}
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
              if (amount && amount > 0 && name.length > 0) {
                create(name, amount);
                onClose();
              }
            }}
          >
            Create
          </Button>
          <Button variant="plain" color="neutral" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
};

export default CreateCardModal;
