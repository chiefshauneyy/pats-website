import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Pat's Concept Store",
  description: "Modern storefront concept UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0c0c0c] text-white">
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold tracking-widest">
              PAT'S
            </Link>
            <nav className="flex gap-6 text-sm text-white/70">
              <Link href="/collections">Shop</Link>
              <Link href="/collections/new">New</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
