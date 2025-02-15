import { create } from "zustand";
import { BillModel } from "components/bills/bill-model";
import { produce } from "immer";
import { persist } from "zustand/middleware";
import { BudgetModel } from "components/budget/budget-model";
import { mockBills, mockBudgets, mockIncomeLines, mockTransactions } from "common/mocks/mock-bills";
import { TransactionLine } from "components/budget/transaction-line";
type BillsStorageModel = {
  bills: BillModel[];
  billPk: number;
  incomeLines: BillModel[];
  incomeLinesPk: number;
  budgetLines: BudgetModel[];
  budgetLinesPk: number;
  transactionLines: TransactionLine[];
  transactionlinesPk: number;
  setState: (recipe: (state: BillsStorageModel) => void) => void;
};

export const useBillsStorage = create<BillsStorageModel>()(
  persist(
    (set) => ({
      bills: mockBills,
      incomeLines: mockIncomeLines,
      budgetLines: mockBudgets,
      transactionLines: mockTransactions,
      billPk: mockBills.length,
      incomeLinesPk: mockIncomeLines.length,
      budgetLinesPk: mockBudgets.length,
      transactionlinesPk: 0,
      setState: (recipe) => set(produce(recipe)),
    }),
    {
      name: "bills-storage", // unique name
    }
  )
);
