import { ctpClient } from "./BuildClient";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { projectKey as thisProjectKey } from "./BuildClient";

// Create apiRoot from the imported ClientBuilder and include your Project key
export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: thisProjectKey,
});
