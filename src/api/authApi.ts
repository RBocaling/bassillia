import api from "../services/axiosApi";

export const registerApi = async (data: any) => {
  try {
    const response = await api.post("/common-users/login", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error as any);
  }
};

export const loginApi = async (data: any) => {
  try {
    const response = await api.post("/common-users/login", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error as any);
  }
};

export const getInfoApi = async () => {
  try {
    const response = await api.get("/sales", {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw new Error(error as any);
  }
};
