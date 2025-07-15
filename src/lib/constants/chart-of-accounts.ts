export interface AccountItem {
  id: string;
  name: string;
  type: "group" | "account" | "total";
  parentId?: string;
  isEditing?: boolean;
}

export interface AccountSection {
  id: string;
  title: string;
  items: AccountItem[];
}

export const chartOfAccountsData: AccountSection[] = [
  {
    id: "balance-sheet",
    title: "Balance Sheet",
    items: [
      { id: "assets", name: "Assets", type: "group" },
      { id: "liabilities", name: "Liabilities", type: "group" },
      { id: "equity", name: "Equity", type: "group" },
      {
        id: "retained-earnings",
        name: "Retained earnings",
        type: "account",
        parentId: "equity",
      },
    ],
  },
  {
    id: "profit-loss",
    title: "Profit and Loss Statement",
    items: [
      { id: "income", name: "Income", type: "group" },
      {
        id: "interest-received",
        name: "Interest received",
        type: "account",
        parentId: "income",
      },
      { id: "sales", name: "Sales", type: "account", parentId: "income" },
      { id: "expenses", name: "Less: Expenses", type: "group" },
      {
        id: "accounting-fees",
        name: "Accounting fees",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "advertising",
        name: "Advertising and promotion",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "bank-charges",
        name: "Bank charges",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "computer-equipment",
        name: "Computer equipment",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "donations",
        name: "Donations",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "electricity",
        name: "Electricity",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "entertainment",
        name: "Entertainment",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "legal-fees",
        name: "Legal fees",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "motor-vehicle",
        name: "Motor vehicle expenses",
        type: "account",
        parentId: "expenses",
      },
      {
        id: "printing",
        name: "Printing and stationery",
        type: "account",
        parentId: "expenses",
      },
      { id: "rent", name: "Rent", type: "account", parentId: "expenses" },
      {
        id: "repairs",
        name: "Repairs and maintenance",
        type: "account",
        parentId: "expenses",
      },
      { id: "net-profit", name: "Net profit (loss)", type: "total" },
    ],
  },
];
