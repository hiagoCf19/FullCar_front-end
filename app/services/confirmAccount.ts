import { redirect } from "next/navigation";
interface ConfirmAccountProps {
  id: string | string[];
}

export const ConfirmAccount = async ({
  id,
}: ConfirmAccountProps): Promise<Response> => {
  const serverUrl = `https://fullcar-backend.onrender.com/account/${id}/confirm`;

  const response = await fetch(serverUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
