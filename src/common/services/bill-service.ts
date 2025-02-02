import { useBillsStorage } from "common/state-management/bills-storage";
import { BillModel } from "components/bills/bill-model";

const useBillService = (): {
  bills: BillModel[];
  createBill: (name: string, amount: number) => void;
  removeBill: (id: number) => void;
  editBill: (bill: BillModel) => void;
} => {
  const bills = useBillsStorage((state) => state.bills);
  const billPk = useBillsStorage((state) => state.billPk);
  const setState = useBillsStorage((state) => state.setState);

  const createBill = (name: string, amount: number) => {
    setState((state) => {
      state.bills = [...(bills ?? []), { name: name, amount: amount, id: billPk } as BillModel];
      state.billPk++;
    });
  };

  const removeBill = (id: number) => {
    setState((state) => {
      state.bills = bills.filter((b) => b.id !== id);
    });
  };

  const editBill = (bill: BillModel) => {
    setState((state) => {
      state.bills = bills.map((b) => (b.id === bill.id ? bill : b));
    });
  };

  return { bills, createBill, removeBill, editBill };
};

export { useBillService };
