interface FetchNewAccountType {
  email: string;
  user_name: string;
  password: string;
  setToken: (value: string) => void;
}
export const fetchNewAccount = async ({
  email,
  user_name,
  password,
  setToken,
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
  if (response.ok) {
    const data = await response.json();
    setToken(data.token);
  }

  return response;
};
