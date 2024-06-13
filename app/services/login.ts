interface RequestLoginProps {
  setToken: (value: string) => void;
  email: string;
  password: string;
}

export const RequestLogin = async ({
  setToken,
  email,
  password,
}: RequestLoginProps): Promise<Response> => {
  const serverUrl = "http://localhost:8080/login";
  const requestData = { email, password };

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