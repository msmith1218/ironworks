import { BillModel } from "components/bills/bill-model";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/joy/Card";
import { CardContent, CircularProgress, Typography } from "@mui/joy";
import currency from "currency.js";
import styles from "common/card/display-card.module.scss";
import { useState } from "react";
import Button from "@mui/joy/Button";

type DisplayCardProps = {
  bill: BillModel;
  budgetSum: number;
  editCard: () => void;
};

const DisplayCard = (props: DisplayCardProps) => {
  const { bill, budgetSum, editCard } = props;
  const [showEditButton, setShowEditButton] = useState<boolean>(false);

  const percentage = currency(bill.amount ?? 0)
    .divide(budgetSum ?? 1)
    .multiply(100).value;

  return (
    <Card size="sm" sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
      <div
        onClick={() => {
          setShowEditButton(true);
        }}
        onMouseEnter={() => {
          setShowEditButton(true);
        }}
        onMouseLeave={() => {
          setShowEditButton(false);
        }}
      >
        <div className={styles.cardHeader}>
          <div>
            <Typography level={"title-sm"} component="span">
              {bill.name}
            </Typography>
            <Typography level={"body-sm"} component="span">
              {currency(bill.amount).format()}
            </Typography>
          </div>
          {showEditButton && (
            <Button
              onClick={() => {
                editCard();
              }}
              variant="plain"
              size="sm"
              aria-label="edit"
              sx={{ padding: "0px 0px 0px 0px", minWidth: "30%" }}
            >
              <EditIcon />
            </Button>
          )}
        </div>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Percent total:</Typography>
          </div>
          <CircularProgress size="lg" determinate value={percentage}>
            {percentage}%
          </CircularProgress>
        </CardContent>
      </div>
    </Card>
  );
};

export default DisplayCard;
