"use client";

import { apiRoot } from "apiRoot";

export const getCatalog = async () => {
  return apiRoot
    .categories()
    .get()
    .execute()
    .then(({ body }) => {
      console.log(body);
    })
    .catch(console.error);
};
