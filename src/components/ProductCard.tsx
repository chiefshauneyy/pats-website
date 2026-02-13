import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { formatMoney } from "@/lib/money";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block overflow-hidden rounded-md border border-white/10 bg-[#111713] hover:border-zinc-400 transition duration-200"
    >
      <div className="aspect-[4/5] overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover opacity-95 group-hover:opacity-100 transition duration-200"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-zinc-100">{product.title}</span>
          <span className="text-zinc-200">{formatMoney(product.price)}</span>
        </div>
      </div>
    </Link>
  );
}
