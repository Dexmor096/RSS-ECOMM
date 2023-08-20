import fetch from "node-fetch";
import {
  ClientBuilder,

  // Import middlewares
  type HttpMiddlewareOptions,
  AnonymousAuthMiddlewareOptions, // Required for sending HTTP requests
} from "@commercetools/sdk-client-v2";
import { generateRandomNumber } from "./helpers/generateNumber";
import { PasswordAuthMiddlewareOptions } from "@commercetools/sdk-client-v2/dist/declarations/src/types/sdk";
import * as process from "process";

export const projectKey = process.env.CTP_PROJECT_KEY!;
const scopeList = [
  `view_published_products`,
  `create_anonymous_token`,
  `view_categories`,
  `manage_my_profile`,
  `manage_my_payments`,
  `manage_my_business_units`,
  `manage_my_shopping_lists`,
  `manage_my_orders`,
  `manage_customers`,
  //todo создать новый клиент без `manage_customers`
];
const scopes = scopeList.map((it) => it.concat(":", projectKey));

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: "https://api.europe-west1.gcp.commercetools.com",
  fetch,
};

const anonymousId = String(generateRandomNumber());

export const getAnonymousClient = () => {
  const anonymousOptions: AnonymousAuthMiddlewareOptions = {
    host: "https://auth.europe-west1.gcp.commercetools.com",
    projectKey: projectKey,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID!,
      clientSecret: process.env.CTP_CLIENT_SECRET!,
      anonymousId: anonymousId, // a unique id
    },
    scopes,
    fetch,
  };

  return new ClientBuilder()
    .withProjectKey(projectKey)
    .withAnonymousSessionFlow(anonymousOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();
};

export const getAuthClient = (login: string, password: string) => {
  const passwordOptions: PasswordAuthMiddlewareOptions = {
    host: "https://auth.europe-west1.gcp.commercetools.com",
    projectKey: projectKey,
    credentials: {
      clientId: "DbX0DhQieIwQMMmeY-mWhyCu",
      clientSecret: "A4bf_ce4Vd8EEWuLVxTM-n_4ORo8KATS",
      user: {
        username: login,
        password: password,
      },
    },
  };

  return new ClientBuilder()
    .withProjectKey(projectKey)
    .withPasswordFlow(passwordOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();
};
