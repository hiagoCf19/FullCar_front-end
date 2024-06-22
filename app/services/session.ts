import { jwtDecode } from "jwt-decode";
import User from "../class/UserClass";
interface DecodedToken {
  id: string;
  sub: string;
}
export const session = async (token: string): Promise<User> => {
  const decodedToken = jwtDecode<DecodedToken>(token);
  const response = await fetch(
    `http://localhost:8080/account/${decodedToken.id}`,
    {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return new User(data.user_name, data.email, new Date(data.created_at));
};
