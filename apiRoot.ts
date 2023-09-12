import {
  getAnonymousClient,
  getAuthClient,
  getRefreshTokenBuilder,
  getTokenBuilder,
} from "./BuildClient";
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
  return createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey: process.env.PROJECT_KEY!,
  });
};

export const getApiRootWithToken = (token: string) => {
  const ctpClient = getTokenBuilder(token);
  return createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey: process.env.PROJECT_KEY!,
  });
};

export const getApiRootWithRefreshToken = (token: string) => {
  const ctpClient = getRefreshTokenBuilder(token);
  return createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey: process.env.PROJECT_KEY!,
  });
};
