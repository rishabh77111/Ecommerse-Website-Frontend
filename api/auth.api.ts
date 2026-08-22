import { TLogin, TRegister } from "@/types/auth.types";
import api from ".";

//* login
export const login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};

//* login
export const signUp = async (data: TRegister) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    throw error?.response.data;
  }
};
