import styles from "./header-input.module.scss";

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/joy";

type HeaderInputProps = {
  openAddModal: () => void;
  headerText: string;
};

const HeaderInput = (props: HeaderInputProps): JSX.Element => {
  const { openAddModal, headerText } = props;

  return (
    <div className={styles.billsHeader}>
      <>
        <Typography level={"h4"} sx={{ width: "75%" }} component="span">
          {headerText}
        </Typography>

        <div className={styles.addIcon}>
          <Fab
            onClick={() => openAddModal()}
            color="primary"
            size="small"
            aria-label="add"
            sx={{ float: "right", backgroundColor: "green" }}
          >
            <AddIcon />
          </Fab>
        </div>
      </>
    </div>
  );
};

export default HeaderInput;
