import { create } from "zustand";
import { BillModel } from "components/bills/bill-model";
import { produce } from "immer";
type BillsStorageModel = {
  bills: BillModel[];
  income: number;
  setState: (recipe: (state: BillsStorageModel) => void) => void;
};

export const useBillsStorage = create<BillsStorageModel>()((set) => {
  return { bills: [], income: 0, setState: (recipe) => set(produce(recipe)) };
});
