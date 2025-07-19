import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { Suspense } from "react";

export const experimental_ppr = true;

interface PurchaseOrderDetailsProps {
  params: Promise<{ id: string }>;
}

const Header = async ({ id }: { id: Promise<{ id: string }> }) => {
  "use cache";
  cacheLife("hours");
  // Sleep for 4 seconds to simulate a slow operation
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const value = (await id).id;
  return (
    <h1 className="text-2xl font-bold mb-4">Purchase Order Details: {value}</h1>
  );
};

export default async function PurchaseOrderDetails({
  params,
}: PurchaseOrderDetailsProps) {
  return (
    <div>
      This is some static content that will be prerendered.
      <Suspense fallback={<div>Loading header...</div>}>
        <Header id={params} />
      </Suspense>
    </div>
  );
}
