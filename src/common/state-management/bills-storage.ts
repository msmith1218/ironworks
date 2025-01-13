import { create } from "zustand";
import { BillModel } from "components/bills/bill-model";
import { produce } from "immer";
import { persist } from "zustand/middleware";
type BillsStorageModel = {
  bills: BillModel[];
  incomeLines: BillModel[];
  budgetLines: BillModel[];
  setState: (recipe: (state: BillsStorageModel) => void) => void;
};

export const useBillsStorage = create<BillsStorageModel>()(
  persist(
    (set) => ({
      bills: [],
      incomeLines: [],
      budgetLines: [],
      setState: (recipe) => set(produce(recipe)),
    }),
    {
      name: "bills-storage", // unique name
    }
  )
);
