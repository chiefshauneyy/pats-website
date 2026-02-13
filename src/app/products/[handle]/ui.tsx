"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";
import { formatMoney } from "@/lib/money";

/* =========================
    PRODUCT PAGE (CLIENT)
========================= */
export function ProductClient({ product }: { product: Product }) {
  const images = product.images ?? [];
  const sizes = product.sizes ?? ["S", "M", "L", "XL"];

  const [activeImg, setActiveImg] = useState(images[0] ?? "");
  const [size, setSize] = useState(sizes[0]);
  const [added, setAdded] = useState(false);

  const specs = useMemo(
    () =>
      product.specs ?? [
        "Built with durable materials",
        "Standard fit",
        "Designed for daily wear",
        "Cold wash recommended",
      ],
    [product.specs]
  );

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* =========================
          IMAGE GALLERY
      ========================= */}
      <div>
        <div className="overflow-hidden rounded-md border border-white/10 bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeImg}
            alt={product.title}
            className="aspect-[4/5] w-full object-cover opacity-95"
          />
        </div>

        {images.length > 1 ? (
          <div className="mt-4 grid grid-cols-4 gap-3">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setActiveImg(img)}
                className={`overflow-hidden rounded-md border ${
                  img === activeImg ? "border-zinc-300" : "border-white/10"
                } bg-black transition`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="Thumbnail" className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {/* =========================
          PRODUCT INFO / CTA
      ========================= */}
      <div>
        <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
          Tactical / Veteran Line
        </div>

        <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight">{product.title}</h1>

        <div className="mt-4 flex items-center gap-3">
          <div className="text-xl font-semibold text-zinc-100">{formatMoney(product.price)}</div>
          {product.compareAtPrice ? (
            <div className="text-sm text-zinc-500 line-through">
              {formatMoney(product.compareAtPrice)}
            </div>
          ) : null}
        </div>

        <p className="mt-5 text-zinc-400 leading-relaxed">{product.description}</p>

        {/* =========================
            SIZE SELECT
        ========================= */}
        <div className="mt-8">
          <div className="text-xs uppercase tracking-widest text-zinc-400">Size</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider border transition ${
                  s === size
                    ? "border-zinc-200 bg-zinc-100 text-black"
                    : "border-white/10 bg-transparent text-zinc-200 hover:border-zinc-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="mt-3 text-xs text-zinc-500">Selected: {size}</div>
        </div>

        {/* =========================
            ADD TO CART (CONCEPT)
        ========================= */}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              setAdded(true);
              setTimeout(() => setAdded(false), 1200);
            }}
            className="inline-flex items-center border border-zinc-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-zinc-100 hover:text-black transition"
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>

          <a
            href="/collections"
            className="inline-flex items-center border border-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-zinc-200 hover:border-zinc-400 transition"
          >
            Continue shopping
          </a>
        </div>

        {/* =========================
            SPECS
        ========================= */}
        <div className="mt-10 rounded-md border border-white/10 bg-[#111713] p-6">
          <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">Specs</div>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {specs.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="text-zinc-500">•</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xs text-zinc-500">
            Concept mode: checkout and inventory will be wired in later.
          </div>
        </div>
      </div>
    </div>
  );
}
