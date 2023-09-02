import { apiRoot } from "apiRoot";
import { ByProjectKeyRequestBuilder } from "@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder";

export const getProducts = async () => {
  return apiRoot
    .productProjections()
    .search()
    .get()
    .execute()
    .then(() => console.log("продукты получены"))
    .catch(() => {
      console.error("error");
    });
};
