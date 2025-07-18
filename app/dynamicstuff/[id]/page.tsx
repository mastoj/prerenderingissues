"use cache";

interface PurchaseOrderDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function PurchaseOrderDetails({
  params,
}: PurchaseOrderDetailsProps) {
  const { id } = await params;
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Purchase Order Details: {id}</h1>
    </>
  );
}
