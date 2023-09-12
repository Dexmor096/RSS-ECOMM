import { getAnonymousApiRoot } from "apiRoot";

export const getProducts = async () => {
  return (
    getAnonymousApiRoot()
      .productProjections()
      // .search()
      .get({
        queryArgs: { limit: 13, published: true },
      })
      .execute()
      .then((data) => {
        console.log("Products received", data.body.results);
        return data;
      })
      .catch((error) => {
        console.error("error");
        throw error;
      })
  );
};
