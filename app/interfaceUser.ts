interface IUser {
  id: number;
  username: string;
  email: string;
  company: { name: string };
}

interface IUserInfo extends IUser {
  name: string;
  address: { street: string; city: string };
  phone: string;
  website: string;
}

export type { IUser, IUserInfo };
