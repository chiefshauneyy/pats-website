import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";

/* =========================
    COLLECTIONS (SHOP ALL)
========================= */
export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
          Shop
        </div>
        <h1 className="mt-3 text-3xl font-bold uppercase tracking-tight">
          All Products
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Concept mode storefront. Products are mock data until we connect a commerce backend.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
