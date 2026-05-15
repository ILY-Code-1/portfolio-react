import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Syarat Layanan",
  description: `Syarat dan ketentuan layanan ${siteConfig.name}.`,
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <section className="relative pb-24 pt-32 sm:pt-40">
      <BackgroundFX />
      <Container className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
          Legal
        </span>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Syarat <span className="text-gradient-brand">Layanan</span>
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Berlaku efektif: 1 Januari {new Date().getFullYear()}
        </p>

        <div className="mt-8 space-y-6 text-white/80">
          <section>
            <h2 className="text-xl font-bold text-white">1. Penerimaan Syarat</h2>
            <p className="mt-2">
              Dengan mengakses atau menggunakan layanan {siteConfig.name}, kamu setuju terikat dengan
              syarat layanan ini.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Lingkup Layanan</h2>
            <p className="mt-2">
              Kami menyediakan jasa pengembangan website, aplikasi mobile, sistem informasi, dan
              konsultasi teknologi. Detail lingkup tiap proyek diatur dalam kontrak terpisah.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Hak Kekayaan Intelektual</h2>
            <p className="mt-2">
              Setelah pelunasan, hasil akhir proyek menjadi hak klien. Komponen open source &amp;
              third-party tetap mengikuti lisensi masing-masing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Pembatasan Tanggung Jawab</h2>
            <p className="mt-2">
              {siteConfig.name} tidak bertanggung jawab atas kerugian tidak langsung yang timbul
              dari penggunaan hasil pekerjaan setelah serah terima.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. Kontak</h2>
            <p className="mt-2">
              Pertanyaan terkait syarat ini dapat dikirim ke{" "}
              <a className="text-[#667eea] hover:underline" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
