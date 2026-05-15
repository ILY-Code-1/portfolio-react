"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center pt-32">
      <BackgroundFX variant="hero" />
      <Container className="text-center">
        <p className="text-9xl font-extrabold text-gradient-brand sm:text-[12rem]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
          Ups… halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/65">
          Sepertinya halaman yang kamu cari sudah pindah, dihapus, atau tidak pernah ada. Yuk kembali ke beranda.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/" size="lg">
            <Home size={18} /> Kembali ke Beranda
          </Button>
          <Button to="/blog" variant="outline" size="lg">
            <ArrowLeft size={18} /> Lihat Blog
          </Button>
        </div>
      </Container>
    </section>
  );
}
