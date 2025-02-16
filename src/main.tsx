import Budget from "components/budget/budget";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Bills from "components/bills/bills";
import Income from "components/income/income";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/PersonalFinanceApp">
    <Routes>
      <Route element={<App />} >
        <Route path="budget" index element={<Budget />} />
        <Route path="bills" element={<Bills />} />
        <Route path="income" element={<Income />} />
        <Route path="" index element={<Budget />} />
      </Route>
    </Routes>

    </BrowserRouter>
  </StrictMode>
);
