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

export interface JournalEntry {
  id: string;
  date: string;
  narration: string;
  debit: number;
  credit: number;
  status: "balanced" | "unbalanced";
  reference?: string;
}

export interface JournalLine {
  id: string;
  account: string;
  debit: number;
  credit: number;
  description?: string;
  qty?: number;
}

export interface NewJournalEntry {
  date: string;
  reference: string;
  narration: string;
  lines: JournalLine[];
}
