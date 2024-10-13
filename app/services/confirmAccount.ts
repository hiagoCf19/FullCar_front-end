import api from "./apiService";
interface ConfirmAccountProps {
  id: string | string[];
}

export const ConfirmAccount = async ({
  id,
}: ConfirmAccountProps): Promise<Response> => {
  const response = await api.patch(`account/${id}/confirm`);
  return response.data;
};
