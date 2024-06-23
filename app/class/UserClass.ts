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
}
export default User;
