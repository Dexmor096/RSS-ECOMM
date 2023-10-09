"use client";
import React, { useEffect, useState } from "react";
import { IUserInfo } from "../../../types";
import { getMyInfo } from "../../controllers/controller";

export default function EditProfile() {
  const [myInfo, setMyInfo] = useState<IUserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMyInfo().then((data) => {
      if (data) {
        const info: IUserInfo = {
          firstname: data.body.firstName!,
          lastname: data.body.lastName!,
          birthDay: data.body.dateOfBirth!,
          addresses: [""],
          email: data.body.email,
        };
        setMyInfo(info);
        setIsLoading(false);
      }
    });
  }, []);

  return <>{myInfo?.firstname}</>;
}
