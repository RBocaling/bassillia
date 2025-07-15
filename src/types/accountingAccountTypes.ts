

export type ChartAccount = {
  id: string;
  name: string;
  isGroup: boolean;
  typeAccount: {
    id: string;
    name: string;
  };
  children: ChartAccount[];
};
