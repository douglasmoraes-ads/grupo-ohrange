import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://grupoohrange.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Grupo Oh!range | Agência de Tráfego Pago em Santa Catarina",
  description:
    "Agência de tráfego pago e gestão de CRM para empresas em SC que faturam acima de R$30 mil/mês. Google Ads, Meta Ads e relatórios semanais. Resultado em 30 dias ou reembolso.",
  keywords: [
    "agência de tráfego pago Santa Catarina",
    "tráfego pago SC",
    "Google Ads Santa Catarina",
    "Meta Ads SC",
    "gestão de CRM",
    "marketing digital Florianópolis",
    "agência marketing digital SC",
    "tráfego pago Florianópolis",
    "Google Ads Joinville",
    "Meta Ads Blumenau",
  ],
  authors: [{ name: "Grupo Oh!range" }],
  creator: "Grupo Oh!range",
  publisher: "Grupo Oh!range",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Grupo Oh!range",
    title: "Grupo Oh!range | Agência de Tráfego Pago em Santa Catarina",
    description:
      "Mais clientes em 30 dias ou seu dinheiro de volta. Tráfego pago e CRM para empresas em Santa Catarina.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo Oh!range, Agência de Tráfego Pago em Santa Catarina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Oh!range | Tráfego Pago SC",
    description:
      "Mais clientes em 30 dias ou seu dinheiro de volta. Tráfego pago e CRM para empresas em Santa Catarina.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grupo Oh!range",
  description:
    "Agência de tráfego pago e gestão de CRM para empresas em Santa Catarina. Especialistas em Google Ads e Meta Ads.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Florianópolis" },
    { "@type": "City", name: "Joinville" },
    { "@type": "City", name: "Blumenau" },
    { "@type": "City", name: "Bombinhas" },
    { "@type": "State", name: "Santa Catarina" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Marketing Digital",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestão de Tráfego Pago" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestão de CRM" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Pages" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
