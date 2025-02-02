import { useBillsStorage } from "common/state-management/bills-storage";

import { TransactionLine } from "components/budget/transaction-line";

const useTransactionService = (
  budgetId: number
): {
  budgetTransactionLines: TransactionLine[];
  addNewTransaction: (budgetId: number) => void;
  removeTransaction: (id: number) => void;
  editTransaction: (transaction: TransactionLine) => void;
} => {
  const transactionLines = useBillsStorage((state) => state.transactionLines);
  const budgetTransactionLines = transactionLines.filter((t) => t.budgetId === budgetId);

  const transactionlinesPk = useBillsStorage((state) => state.transactionlinesPk);
  const setState = useBillsStorage((state) => state.setState);

  const addNewTransaction = (budgetId: number) => {
    const newTxnLine = {
      budgetId: budgetId,
      transactionLineId: transactionlinesPk,
    } as TransactionLine;

    setState((state) => {
      state.transactionLines = [...transactionLines, newTxnLine];
      state.transactionlinesPk++;
    });
  };

  const editTransaction = (transaction: TransactionLine) => {
    setState((state) => {
      state.transactionLines = transactionLines.map((t) => {
        if (t.transactionLineId === transaction.transactionLineId && t.budgetId === budgetId) {
          return transaction;
        }
        return t;
      });
    });
  };

  const removeTransaction = (id: number) => {
    setState((state) => {
      state.transactionLines = transactionLines.filter((t) => {
        return t.transactionLineId !== id;
      });
    });
  };

  return { budgetTransactionLines, addNewTransaction, editTransaction, removeTransaction };
};

export { useTransactionService };
