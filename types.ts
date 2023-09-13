import { ProductProjection } from "@commercetools/platform-sdk";

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
