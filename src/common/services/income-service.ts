import { useBillsStorage } from "common/state-management/bills-storage";
import { BillModel } from "components/bills/bill-model";

const useIncomeService = (): {
  incomeLines: BillModel[];
  createIncome: (name: string, amount: number) => void;
  removeIncome: (id: number) => void;
  editIncome: (bill: BillModel) => void;
} => {
  const incomeLines = useBillsStorage((state) => state.incomeLines);
  const setState = useBillsStorage((state) => state.setState);
  const incomeLinesPk = useBillsStorage((state) => state.incomeLinesPk);

  const createIncome = (name: string, amount: number) => {
    setState((state) => {
      state.incomeLines = [
        ...(incomeLines ?? []),
        {
          name: name,
          amount: amount,
          id: incomeLinesPk,
        } as BillModel,
      ];
      state.incomeLinesPk++;
    });
  };

  const removeIncome = (id: number) => {
    setState((state) => {
      state.incomeLines = incomeLines.filter((b) => b.id !== id);
    });
  };

  const editIncome = (income: BillModel) => {
    setState((state) => {
      state.incomeLines = incomeLines.map((b) => (b.id === income.id ? income : b));
    });
  };

  return { incomeLines, createIncome, removeIncome, editIncome };
};

export { useIncomeService };
