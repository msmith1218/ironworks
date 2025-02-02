import { useBillsStorage } from "common/state-management/bills-storage";

import { BudgetModel } from "components/budget/budget-model";
import { TransactionLine } from "components/budget/transaction-line";

const useBudgetsService = (): {
  budgetLines: BudgetModel[];
  createBudget: (name: string, amount: number) => void;
  removeBudget: (id: number) => void;
  editBudget: (bill: BudgetModel) => void;
  addNewTransaction: (budgetId: number) => void;
} => {
  const budgetLines = useBillsStorage((state) => state.budgetLines);
  const budgetLinesPk = useBillsStorage((state) => state.budgetLinesPk);
  const setState = useBillsStorage((state) => state.setState);

  const createBudget = (name: string, amount: number) => {
    setState((state) => {
      state.budgetLines = [
        ...(budgetLines ?? []),
        {
          name: name,
          amount: amount,
          id: budgetLinesPk,
        } as BudgetModel,
      ];
      state.budgetLinesPk++;
    });
  };

  const addNewTransaction = (budgetId: number) => {
    const updatedBudgetLines = budgetLines.map((budget) => {
      if (budget.id === budgetId) {
        return {
          ...budget,
          transactionLines: [
            ...(budget.transactionLines || []),
            {
              transactionLineId:
                budget.transactionLines.length === 0 ? 0 : budget.transactionLines.length,
            } as TransactionLine,
          ],
        };
      }
      return budget;
    });

    setState((state) => {
      state.budgetLines = updatedBudgetLines;
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

  return { budgetLines, createBudget, removeBudget, editBudget, addNewTransaction };
};

export { useBudgetsService };
