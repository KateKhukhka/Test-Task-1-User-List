interface IUser {
  id: number;
  username: string;
  email: string;
  company: { name: string };
  name?: string;
  address: { street?: string; city?: string };
  phone?: string;
  website?: string;
}
export default IUser;
