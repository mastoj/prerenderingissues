import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { Suspense } from "react";

//export const experimental_ppr = true;

interface PurchaseOrderDetailsProps {
  params: Promise<{ id: string }>;
}

const Post = async ({ id }: { id: string }) => {
  "use cache";
  cacheLife("hours");
  // Sleep for 3 seconds to simulate a slow operation
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const resolvedId = id;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${resolvedId}`
  );
  return (
    <h1 className="text-2xl font-bold mb-4">
      Post Details: {resolvedId} -{" "}
      {post.ok ? (await post.json()).title : "Error"}
    </h1>
  );
};

export default async function PostPage({ params }: PurchaseOrderDetailsProps) {
  const { id } = await params;
  return (
    <Suspense fallback={<div>Loading something ...</div>}>
      <Post id={id} />
    </Suspense>
    // <Suspense fallback={<div>Loading post...</div>}>
    // </Suspense>
  );
}
