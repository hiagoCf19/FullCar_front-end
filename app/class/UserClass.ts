interface UpdateRequest {
  user_name: string;
  email: string;
}
class User {
  id: number;
  user_name: string;
  email: string;
  created_at: Date;

  constructor({
    id,
    user_name,
    email,
    created_at,
  }: {
    id: number;
    user_name: string;
    email: string;
    created_at: Date;
  }) {
    this.id = id;
    this.user_name = user_name;
    this.email = email;
    this.created_at = created_at;
  }
  static recoverLocalUser() {
    if (typeof window !== "undefined") {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        const userData = JSON.parse(localUser);
        return new User(userData);
      } else {
        return null;
      }
    }
    return null;
  }
  static saveUserLocalStorage(userDetails: User) {
    if (typeof window !== "undefined") {
      const user = new User(userDetails);
      localStorage.setItem("user", JSON.stringify(user));
    }
  }
  static formatName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  static createFallback(user_name: string) {
    return user_name.substring(0, 2).toUpperCase();
  }
  static formatDate(date: User) {
    if (date) {
      return new Date(date.created_at).toLocaleDateString("pt-BR");
    } else {
      return "Não informado";
    }
  }
  static async updateUserDetails(token: string, data: UpdateRequest) {
    const server = "https://fullcar-backend.onrender.com/account/update";
    try {
      const response = await fetch(server, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(data),
      });

      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
export default User;
