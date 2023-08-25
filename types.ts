import { Dispatch, SetStateAction } from "react";

export interface IUser {
  email: string;
  password: string;
}

export interface IUserContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export type LoginInputs = {
  email: string;
  password: string;
};
