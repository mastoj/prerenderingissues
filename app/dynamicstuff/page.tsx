import React, { Suspense } from "react";

const Loader = async () => {
  console.log("==> Loader called");
  // Get random json data from a public API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return <div>{data.title}</div>;
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
