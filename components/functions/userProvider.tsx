"use client";
import React, { createContext, useState } from "react";
import { IUser, IUserContext } from "../../types";

const defaultUser: IUser = { email: "", password: "" };
export const UserContext = createContext<IUserContext | null>(null);
export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<IUser>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
