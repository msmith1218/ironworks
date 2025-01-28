import { useBillsStorage } from "common/state-management/bills-storage";

import { BudgetModel } from "components/budget/budget-model";

const useBudgetsService = (): {
  budgetLines: BudgetModel[];
  createBudget: (name: string, amount: number) => void;
  removeBudget: (id: number) => void;
  editBudget: (bill: BudgetModel) => void;
} => {
  const budgetLines = useBillsStorage((state) => state.budgetLines);
  const setState = useBillsStorage((state) => state.setState);

  const createBudget = (name: string, amount: number) => {
    setState((state) => {
      state.budgetLines = [
        ...(budgetLines ?? []),
        {
          name: name,
          amount: amount,
          id: budgetLines.length === 0 ? 0 : budgetLines.length,
        } as BudgetModel,
      ];
    });
  };

  const removeBudget = (id: number) => {
    setState((state) => {
      state.budgetLines = budgetLines.filter((b) => b.id !== id);
    });
  };

  const editBudget = (budget: BudgetModel) => {
    setState((state) => {
      state.budgetLines = budgetLines.map((b) => (b.id === budget.id ? budget : b));
    });
  };

  return { budgetLines, createBudget, removeBudget, editBudget };
};

export { useBudgetsService };
