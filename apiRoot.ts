import { getAnonymousClient, getAuthClient } from "./BuildClient";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

export const getAnonymousApiRoot = () => {
  const ctpAnonymousClient = getAnonymousClient();
  console.log("anon is created");
  return createApiBuilderFromCtpClient(ctpAnonymousClient).withProjectKey({
    projectKey: process.env.PROJECT_KEY!,
  });
};

export const getAuthApiRoot = (login: string, password: string) => {
  const ctpClient = getAuthClient(login, password);
  console.log("user is created");
  return createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey: process.env.PROJECT_KEY!,
  });
};
