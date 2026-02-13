import Link from "next/link";
import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* =========================
          HERO SECTION
         ========================= */}
      <section className="mb-20 pt-12">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.3em] uppercase text-white/40">
            EST. 2026
          </div>

          <h1 className="mt-6 text-6xl font-semibold leading-[1.1] tracking-tight">
            Built Different.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/60">
            Modern cuts. Heavyweight fabric. Clean execution. This is a concept build to approve the
            direction before we connect payments.
          </p>

          <Link
            href="/collections"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* =========================
          FEATURED PRODUCTS
         ========================= */}
      <section>
        <h2 className="mb-6 text-xl font-semibold">Featured</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
