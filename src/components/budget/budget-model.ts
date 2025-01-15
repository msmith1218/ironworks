import { BillModel } from "components/bills/bill-model";
import { TransactionLine } from "./transaction-line";

export interface BudgetModel extends BillModel {
  transactionLines: TransactionLine[];
}
