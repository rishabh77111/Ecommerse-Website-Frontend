import api from ".";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/product");
    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error?.response?.data;
  }
};
