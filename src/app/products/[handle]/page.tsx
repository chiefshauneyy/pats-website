import { getProduct } from "@/lib/catalog";
import { notFound } from "next/navigation";
import { ProductClient } from "./ui";

/* =========================
    PRODUCT PAGE (SERVER)
========================= */
export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = getProduct(params.handle);
  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ProductClient product={product} />
    </div>
  );
}
