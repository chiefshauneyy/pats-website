import Link from "next/link";
import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-16">
        <h1 className="text-5xl font-semibold">
          Clean Gear. Modern Fit.
        </h1>
        <p className="mt-4 text-white/60 max-w-xl">
          Concept storefront to approve UI and experience before real payments are connected.
        </p>
        <Link
          href="/collections"
          className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-black font-semibold"
        >
          Shop All
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">Featured</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
