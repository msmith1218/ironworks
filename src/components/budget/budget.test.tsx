import App from "App";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

describe("Budget", () => {
  beforeEach(() => {});

  it("Should render budget section when navigated to", async () => {
    render(<App />);
    const user = userEvent.setup();
    const budgetTab = screen.getByTestId("budget-tab");

    await user.click(budgetTab);
    await waitFor(() => {
      expect(screen.getByTestId("budgets-layout")).toBeInTheDocument();
    });
  });
});
