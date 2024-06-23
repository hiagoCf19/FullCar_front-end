class User {
  id: number;
  user_name: string;
  email: string;
  created_at: Date;

  constructor(id: number, user_name: string, email: string, created_at: Date) {
    this.id = id;
    this.user_name = user_name;
    this.email = email;
    this.created_at = created_at;
  }
}
export default User;
