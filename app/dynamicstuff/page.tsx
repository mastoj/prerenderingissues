import { connection } from "next/server";
import React, { Suspense } from "react";

const getRandomNumberAsync = async () => {
  await connection();
  console.log("==> getRandomNumberAsync called");
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

const Loader = async () => {
  console.log("==> Loader called");
  // Get random json data from a public API
  const randomNumber = await getRandomNumberAsync();
  console.log("==> Random number fetched:", randomNumber);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("==> Data fetched from API");
  const data = await res.json();
  console.log("==> Data fetched:", data);
  return (
    <div>
      {data.title} {randomNumber}
    </div>
  );
};

const Page = () => {
  return (
    <div>
      Page
      <Suspense fallback={<div>Loading...</div>}>
        <Loader />
      </Suspense>
    </div>
  );
};

export default Page;
