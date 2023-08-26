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

const projectKey = process.env.PROJECT_KEY!;

const scopeList = [
  `create_anonymous_token`,
  `manage_my_business_units`,
  `manage_my_shopping_lists`,
  `manage_my_quotes`,
  `manage_my_orders`,
  `manage_my_quote_requests`,
  `view_categories`,
  `manage_my_profile`,
  `manage_my_payments`,
  `view_published_products`,
];
const scopes = scopeList.map((it) => it.concat(":", projectKey));

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: "https://api.europe-west1.gcp.commercetools.com",
  fetch,
};

export const getAnonymousClient = () => {
  const anonymousId = String(generateRandomNumber());

  const anonymousOptions: AnonymousAuthMiddlewareOptions = {
    host: "https://auth.europe-west1.gcp.commercetools.com",
    projectKey: projectKey,
    credentials: {
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
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
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
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
