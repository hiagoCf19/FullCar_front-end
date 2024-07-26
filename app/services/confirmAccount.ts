import { redirect } from "next/navigation";
interface ConfirmAccountProps {
  id: string | string[];
}

export const ConfirmAccount = async ({
  id,
}: ConfirmAccountProps): Promise<Response> => {
  const serverUrl = `http://localhost:8080/account/${id}/confirm`;

  const response = await fetch(serverUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
