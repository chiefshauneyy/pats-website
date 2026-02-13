import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { formatMoney } from "@/lib/money";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition"
    >
      <div className="aspect-[4/5] overflow-hidden bg-black">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between text-sm font-medium">
          <span>{product.title}</span>
          <span>{formatMoney(product.price)}</span>
        </div>
      </div>
    </Link>
  );
}
