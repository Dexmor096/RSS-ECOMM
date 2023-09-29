import React from 'react';

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

export interface IUserInfo {
  firstname: string;
  lastname: string;
  email: string;
  addresses: string[];
  birthDay: string;
}

export interface InfoCardProps {
  title: string;
  icon: string;
  info?: React.ReactElement;
}
