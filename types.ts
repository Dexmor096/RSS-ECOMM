import { ProductProjection } from "@commercetools/platform-sdk";
import React from "react";

export type LoginInputs = {
  email: string;
  password: string;
};

export interface RegistrationInputs {
  email: string;
  name: string;
  lastname: string;
  password: string;
  address: string;
}
export interface ButtonStyles {
  text: string;
  color: string;
  border: string;
  margin: string;
}

export interface ButtonMain {
  text: string;
  color: string;
  border: string;
  margin: string;
}

export interface SectionTitleStyles {
  mt?: string;
  title: string;
  color: string;
  width: number;
}
export interface IProductState {
  status: string;
  error: string | null;
  list: ProductProjection[];
}

export interface IUserInfo {
  firstname: string;
  lastname: string;
  email: string;
  addresses: string[];
  birthDay: string;
}

export interface BigCardProps {
  title: string;
  icon: string;
  info?: React.ReactElement;
}

export interface SmallCardProps {
  title: string;
  icon: string;
}
