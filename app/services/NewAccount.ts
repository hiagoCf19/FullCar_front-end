interface FetchNewAccountType {
  email: string;
  user_name: string;
  password: string;
}
export const fetchNewAccount = async ({
  email,
  user_name,
  password,
}: FetchNewAccountType) => {
  const serverUrl = "http://localhost:8080/account/create";
  const requestData = { email, user_name, password };

  const response = await fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  return response;
};
