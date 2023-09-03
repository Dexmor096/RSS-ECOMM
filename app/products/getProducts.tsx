import { apiRoot } from "apiRoot";
import { ByProjectKeyRequestBuilder } from "@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder";

export const getProducts = async () => {
  return (
    apiRoot
      .productProjections()
      // .search()
      .get({
        queryArgs: { limit: 13, published: true },
      })
      .execute()
      .then((data) => console.log("продукты получены", data.body.results))
      .catch(() => {
        console.error("error");
      })
  );
};
