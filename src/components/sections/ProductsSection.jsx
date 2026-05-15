"use client";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

export const ProductsSection = () => (
  <section
    id="produk"
    aria-labelledby="produk-heading"
    className="relative scroll-mt-24 py-24 sm:py-32"
    style={{
      background:
        "linear-gradient(180deg, #0f0f0f 0%, #12122a 50%, #0f0f0f 100%)",
    }}
  >
    <BackgroundFX />
    <Container className="relative">
      <SectionHeading
        eyebrow="Produk Kami"
        title="Tiga Jalan,"
        highlight="Satu Misi Sama"
        description="Dari rumah digital untuk bisnismu, website sekolah terjangkau, sampai partner ngoding untuk project pribadi — kami punya jalan yang cocok untuk setiap cerita."
      />

      <h2 id="produk-heading" className="sr-only">
        Produk ILY Code
      </h2>

      <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-white/50">
        Butuh solusi yang tidak tercakup di atas?{" "}
        <a
          href="/#contact"
          className="font-semibold text-[#a4b4ff] transition hover:text-white"
        >
          Diskusi dulu yuk →
        </a>
      </p>
    </Container>
  </section>
);