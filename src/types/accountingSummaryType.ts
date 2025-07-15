export type SummaryItem = {
  label: string;
  value: number;
  isGroup?: boolean;
  children?: SummaryItem[];
};

export type SummaryData = {
  accountType: string;
  value: number;
  data: SummaryItem[];
};
