import { getAnonymousClient } from "./BuildClient";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

// Create apiRoot from the imported ClientBuilder and include your Project key
const ctpAnonymousClient = getAnonymousClient();
const ctpAuthClient = getAnonymousClient();
export const anonymousApiRoot = createApiBuilderFromCtpClient(
  ctpAnonymousClient,
).withProjectKey({
  projectKey: process.env.PROJECT_KEY!,
});

export const authApiRoot = createApiBuilderFromCtpClient(
  ctpAuthClient,
).withProjectKey({
  projectKey: process.env.PROJECT_KEY!,
});
