import { BillModel } from "components/bills/bill-model";

import Card from "@mui/joy/Card";
import { CardContent, CircularProgress, Typography } from "@mui/joy";
import currency from "currency.js";

type InputRowProps = {
  index: number;
  bill: BillModel;
  budgetSum: number;
};

const DisplayCard = (props: InputRowProps) => {
  const { bill, budgetSum } = props;

  const percentage = currency(bill.billAmount ?? 0)
    .divide(budgetSum ?? 1)
    .multiply(100).value;

  return (
    <Card size="sm" sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
      <div>
        <Typography level={"title-sm"} component="span">
          {bill.billName}
        </Typography>
        <Typography level={"body-sm"} component="span">
          {currency(bill.billAmount).format()}
        </Typography>
      </div>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Percent total:</Typography>
        </div>
        <CircularProgress size="lg" determinate value={percentage}>
          {percentage}%
        </CircularProgress>
      </CardContent>
    </Card>
  );
};

export default DisplayCard;
