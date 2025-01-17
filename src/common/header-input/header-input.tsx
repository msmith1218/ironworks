import styles from "./header-input.module.scss";
import Button from "@mui/joy/Button";
import { Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/joy";
import DoneIcon from "@mui/icons-material/Done";

type HeaderInputProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  addRow: () => void;
  showInput: boolean;
  setShowInput: (value: boolean) => void;
  textInputName: string;
  headerText: string;
};

const HeaderInput = (props: HeaderInputProps): JSX.Element => {
  const { inputValue, setInputValue, addRow, showInput, setShowInput, textInputName, headerText } =
    props;

  return (
    <div className={styles.billsHeader}>
      {!showInput && (
        <>
          <Typography level={"h4"} sx={{ width: "75%" }} component="span">
            {headerText}
          </Typography>

          <div className={styles.addIcon}>
            <Fab
              onClick={() => setShowInput(!showInput)}
              color="primary"
              size="small"
              aria-label="add"
              sx={{ float: "right", backgroundColor: "green" }}
            >
              <AddIcon />
            </Fab>
          </div>
        </>
      )}
      {showInput && (
        <>
          <div className={styles.allContainer}>
            <div className={styles.textContainer}>
              <TextField
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                id="standard-basic"
                label={textInputName}
                variant="standard"
              />
            </div>
            <div className={styles.addContainer}>
              <Button
                className={styles.addBtn}
                onClick={addRow}
                size="lg"
                variant="soft"
                color="primary"
                sx={{ backgroundColor: "rgb(237, 179, 240)" }}
              >
                Add
              </Button>
            </div>
          </div>
          <div className={styles.addIcon}>
            <Fab
              onClick={() => setShowInput(!showInput)}
              color="primary"
              size="small"
              aria-label="add"
              sx={{ float: "right", backgroundColor: "green" }}
            >
              <DoneIcon />
            </Fab>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderInput;
