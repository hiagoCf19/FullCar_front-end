class User {
  user_name: string;
  email: string;
  created_at: Date;

  constructor(user_name: string, email: string, created_at: Date) {
    this.user_name = user_name;
    this.email = email;
    this.created_at = created_at;
  }
}
export default User;
