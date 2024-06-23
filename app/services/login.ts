import User from "../class/UserClass";

interface RequestLoginProps {
  setToken: (value: string) => void;
  setUserDetails: (value: User) => void;
  email: string;
  password: string;
}

export const RequestLogin = async ({
  setToken,
  setUserDetails,
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
    const user = new User(data.account);
    User.saveUserLocalStorage(user);
    setUserDetails(user);
  }

  return response;
};
