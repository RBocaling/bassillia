import api from "@/services/axiosApi";

const ACCOUNTING_BASE_URL = "/accounting";

  // summary
  export const getSummaryApi = async (queryParams?: {
    startDate?: string;
    endDate?: string;
  }) => {
    const query = new URLSearchParams();

    if (queryParams?.startDate)
      query.append("startDate", queryParams.startDate);
    if (queryParams?.endDate) query.append("endDate", queryParams.endDate);
    query.append("businessUnitId", "4df58fbf-5f04-48ec-a9df-8cefbb29934f");
    try {
      const response = await api.get(
        `${ACCOUNTING_BASE_URL}/summary${query.toString() ? `?${query}` : ""}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error: any) {
      const message =
        error?.response?.data?.error ||
        error.message ||
        "Failed to fetch summary";
      throw new Error(message);
    }
  };

  //journal entries
  export const createJournalEntryApi = async (data: any) => {
    try {
      const response = await api.post(
        `${ACCOUNTING_BASE_URL}/journal-entries`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error as any);
    }
  };

  export const getJournalEntryApi = async (businessUnitId: string) => {
    try {
      const response = await api.get(
        `${ACCOUNTING_BASE_URL}/journal-entries?businessUnitId=${businessUnitId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error as any);
    }
  };
  export const updateJournalEntryApi = async (id: string, data: any) => {
    console.log("hghg", { id, data });

    try {
      const response = await api.put(
        `${ACCOUNTING_BASE_URL}/journal-entries?id=${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error as any);
    }
  };
  export const getJournalEntriesAccount = async () => {
    try {
      const response = await api.get(
        `${ACCOUNTING_BASE_URL}/chart-of-account/accounts`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error as any);
    }
  };




//chart of acccount

//type accounts

// transactions

// business unit

//cash flow statement