import Link from "next/link";
import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* =========================
    HERO SECTION (TACTICAL)
========================= */}
<section className="mb-24 pt-20 border-b border-white/5 pb-24">
  <div className="max-w-3xl">
    <div className="text-xs tracking-[0.35em] uppercase text-zinc-400">
      BUILT WITH PURPOSE
    </div>

    <h1 className="mt-6 text-6xl font-bold leading-[1.05] tracking-tight uppercase">
      No Compromise.
    </h1>

    <p className="mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed">
      Durable fabrics. Clean execution. No distractions.
      Designed for those who carry themselves with discipline.
    </p>

    <Link
      href="/collections"
      className="mt-10 inline-flex items-center border border-zinc-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-zinc-100 hover:text-black transition"
    >
      Shop The Line
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
