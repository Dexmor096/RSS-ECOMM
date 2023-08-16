"use client";
import { apiRoot } from "../apiRoot";

export default function Home() {
  const handleGetData = async () => {
    const data = apiRoot
      .login()
      .post({
        body: {
          email: "vasya@gmail.com",
          password: "12345678901",
          //{email: 'meeoow05@gmail.com', name: 'TUROVA', lastname: 'INNA', password: '12345678901'}
        },
      })
      .execute();
    console.log(data);
  };
  const handleGetMe = async () => {
    const data = apiRoot.me().orders().get().execute();
    console.log(data);
  };

  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={handleGetData}>Login</button>
      <button onClick={handleGetMe}>Запросить меня</button>
    </main>
  );
}
