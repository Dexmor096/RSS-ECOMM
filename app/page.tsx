"use client";
import { apiRoot } from "../apiRoot";

export default function Home() {
  const handleGetData = async () => {
    const data = apiRoot.categories().get().execute();
    console.log(data);
  };

  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={handleGetData}>Get Data</button>
    </main>
  );
}
