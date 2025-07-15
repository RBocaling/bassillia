/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoanApplicationData } from "@/pages/sales-department/application-form/schema/loan_schema";
import type {
  Agency,
  Principal,
  Vessel,
  LoanType,
  LoanPurpose,
} from "../pages/sales-department/application-form/types";
import api from "@/services/axiosApi";

const mapHomeOwnership = (value: string) => {
  switch (value) {
    case "Owned Not Mortgaged":
      return "not mortgaged";
    case "Owned Mortgaged":
      return "mortgaged";
    case "Rented":
      return "rented/month";
    case "Used Free":
      return "used free";
    default:
      return "";
  }
};
export const createSalesLoanForm = async (
  data: LoanApplicationData
): Promise<any> => {
  try {
    console.log(data)
    const rawData = data;
    const finalPayload = {
      ...rawData,
      homeOwnership: mapHomeOwnership(rawData.homeOwnership),
      homeMortgagedAmount:
        rawData.homeOwnership === "Owned Mortgaged"
          ? rawData.homeMortgagedAmount
          : "",
      rentedAmount:
        rawData.homeOwnership === "Rented" ? rawData.rentedAmount : "",
    };
    const formData = new FormData();
    for (const key in finalPayload) {
      const value = finalPayload[key as keyof LoanApplicationData];

      if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        formData.append(key, String(value));
      } else if (Array.isArray(value)) {
       formData.append(key, JSON.stringify(value));
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      }
    }

    const response = await api.post(
      "/sales/application/sales-application-create",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error((error as any)?.message || "Form submission failed");
  }
};

export const fetchAgencies = async (): Promise<Agency[]> => {
  try {
    const response = await api.get("/agency", { withCredentials: true });
    return response.data.users.docs;
  } catch (error) {
    throw new Error((error as any)?.message || "Failed to fetch agencies");
  }
};

export const fetchPrincipal = async (): Promise<Principal[]> => {
  try {
    const response = await api.get("/principal", { withCredentials: true });
    return response.data.users.docs;
  } catch (error) {
    throw new Error((error as any)?.message || "Failed to fetch principals");
  }
};

export const fetchVessel = async (): Promise<Vessel[]> => {
  try {
    const response = await api.get("/vessel", { withCredentials: true });
    return response.data.users.docs;
  } catch (error) {
    throw new Error((error as any)?.message || "Failed to fetch vessels");
  }
};

export const fetchLoanStatus = async (): Promise<LoanType[]> => {
  try {
    const response = await api.get("/loan-status", { withCredentials: true });
    return response.data.users.docs;
  } catch (error) {
    throw new Error((error as any)?.message || "Failed to fetch loan statuses");
  }
};

export const fetchLoanPurpose = async (): Promise<LoanPurpose[]> => {
  try {
    const response = await api.get("/loan-purpose", { withCredentials: true });
    return response.data.users.docs;
  } catch (error) {
    throw new Error((error as any)?.message || "Failed to fetch loan purposes");
  }
};
