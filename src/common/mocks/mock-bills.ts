import { BillModel } from "components/bills/bill-model";
import { BudgetModel } from "components/budget/budget-model";
import { TransactionLine } from "components/budget/transaction-line";

export const mockBills = [
  {
    id: 0,
    name: "Electricity",
    amount: 100,
  },
  {
    id: 1,
    name: "Gas",
    amount: 200,
  },
  {
    id: 2,
    name: "Car Payment",
    amount: 350,
  },
  {
    id: 3,
    name: "Insurance",
    amount: 200,
  },
  {
    id: 4,
    name: "Mortgage",
    amount: 3000,
  },
  {
    id: 5,
    name: "Student Loans",
    amount: 100,
  },
] as BillModel[];

export const mockIncomeLines = [
  {
    id: 0,
    name: "Test Check 1",
    amount: 2500,
  },
  {
    id: 1,
    name: "Test Check 2",
    amount: 3000,
  },
] as BillModel[];

export const mockBudgets = [
  {
    id: 0,
    name: "Groceries",
    amount: 1000,
  },
  {
    id: 1,
    name: "Clothing",
    amount: 300,
  },
  {
    id: 2,
    name: "Random",
    amount: 500,
  },
  {
    id: 3,
    name: "Car and Gas",
    amount: 400,
  },
  {
    id: 4,
    name: "Savings",
    amount: 500,
  },
] as BudgetModel[];

export const mockTransactions = [{
  transactionLineId: 1,
  budgetId: 0,
  amount: 100,
  name: "example "
},{
  transactionLineId: 2,
  budgetId: 0,
  amount: 150,
  name: "example 2"
},{
  transactionLineId: 3,
  budgetId: 0,
  amount: 55.12,
  name: "example 3"
},{
  transactionLineId: 4,
  budgetId: 3,
  amount: 125.12,
  name: "example gas payment"
},{
  transactionLineId: 4,
  budgetId: 3,
  amount: 125.12,
  name: "example gas payment"
},{
  transactionLineId: 5,
  budgetId: 4,
  amount: 400,
  name: "example savings deposit"
}] as TransactionLine[];
