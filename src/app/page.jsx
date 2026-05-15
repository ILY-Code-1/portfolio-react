import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { IlyProjectSection } from "@/components/sections/IlyProjectSection";
import { IlySchoolSection } from "@/components/sections/IlySchoolSection";
import { IlyCorpSection } from "@/components/sections/IlyCorpSection";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { orgJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <HomeSection />
      <AboutSection />
      <IlyProjectSection />
      <IlySchoolSection />
      <IlyCorpSection />
      <ConsultationSection />
      <ContactSection />
    </>
  );
}
