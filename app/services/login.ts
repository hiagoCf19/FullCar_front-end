interface RequestLoginProps {
  endpoint: string;
  email: string;
  password: string;
}
export const RequestLogin = async ({
  endpoint,
  email,
  password,
}: RequestLoginProps) => {
  const serverUrl = `http://localhost:8080/${endpoint}`;
  const requestData = {
    email,
    password,
  };

  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const token = await response.json();
      // console.log(token.token);
      return response.status;
    } else {
      const error = await response.json();
      return error.status;
    }
  } catch (e) {
    console.error("Houve um erro ao se conectar com o servidor: ", e);
  }
};
