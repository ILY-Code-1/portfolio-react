import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Kebijakan Privasi",
  description: `Kebijakan privasi resmi ${siteConfig.name}: bagaimana kami mengumpulkan, menyimpan, dan melindungi data kamu.`,
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section className="relative pb-24 pt-32 sm:pt-40">
      <BackgroundFX />
      <Container className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
          Legal
        </span>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Kebijakan <span className="text-gradient-brand">Privasi</span>
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Berlaku efektif: 1 Januari {new Date().getFullYear()}
        </p>

        <div className="mt-8 space-y-6 text-white/80">
          <section>
            <h2 className="text-xl font-bold text-white">1. Pengantar</h2>
            <p className="mt-2">
              {siteConfig.name} menghormati privasi pengunjung dan klien. Halaman ini menjelaskan
              data apa yang kami kumpulkan, bagaimana kami menggunakannya, dan hak kamu atas data tersebut.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Data yang Kami Kumpulkan</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Data form kontak (nama, email, WhatsApp, subjek, pesan).</li>
              <li>Data analitik anonim (jenis perangkat, halaman yang dikunjungi, durasi).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Penggunaan Data</h2>
            <p className="mt-2">
              Data form kontak hanya digunakan untuk merespons permintaan kamu. Kami tidak menjual,
              menukar, atau menyewakan data pribadi ke pihak ketiga.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Hak Kamu</h2>
            <p className="mt-2">
              Kamu berhak meminta akses, koreksi, atau penghapusan data pribadi yang kami simpan.
              Hubungi kami di{" "}
              <a className="text-[#667eea] hover:underline" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. Perubahan Kebijakan</h2>
            <p className="mt-2">
              Kami dapat memperbarui kebijakan ini sewaktu-waktu. Versi terbaru selalu tersedia di
              halaman ini.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
