import { create } from "zustand";
import { BillModel } from "components/bills/bill-model";
import { produce } from "immer";
import { persist } from "zustand/middleware";
import { BudgetModel } from "components/budget/budget-model";
import { mockBills, mockBudgets, mockIncomeLines } from "common/mocks/mock-bills";
type BillsStorageModel = {
  bills: BillModel[];
  incomeLines: BillModel[];
  budgetLines: BudgetModel[];
  setState: (recipe: (state: BillsStorageModel) => void) => void;
};

export const useBillsStorage = create<BillsStorageModel>()(
  persist(
    (set) => ({
      bills: mockBills,
      incomeLines: mockIncomeLines,
      budgetLines: mockBudgets,
      setState: (recipe) => set(produce(recipe)),
    }),
    {
      name: "bills-storage", // unique name
    }
  )
);
