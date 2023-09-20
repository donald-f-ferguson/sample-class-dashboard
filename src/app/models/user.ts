
export interface IUser {
  uni: string;
  lastName: string;
  firstName: string;
  email: string;
  avatar: string;
}

export class User implements IUser {
  uni: string;
  lastName: string;
  firstName: string;
  email: string;
  avatar: string;
}
