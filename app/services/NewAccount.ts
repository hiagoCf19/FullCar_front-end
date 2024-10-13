import axios, { AxiosError } from "axios";
import api from "./apiService";
import { ErrorCode } from "../errors/ErrorsEnum";

interface FetchNewAccountType {
  email: string;
  user_name: string;
  password: string;
}
interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}
export const createAccount = async ({
  email,
  user_name,
  password,
}: FetchNewAccountType) => {
  const requestData = { email, user_name, password };

  try {
    const response = await api.post("account/create", requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.message === "Account already exists") {
        throw new Error(ErrorCode.ACCOUNT_ALREADY_EXIST);
      }
      if (error.code === "ERR_NETWORK") {
        throw new Error(ErrorCode.CONNECTION_API_ERROR);
      }
    }
    throw error;
  }
};
