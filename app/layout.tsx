import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Security Roadmaps", template: "%s | Security Roadmaps" },
  description: "Practitioner-built career roadmaps for Cloud Security Engineering and Cloud GRC — covering AWS, Azure, GCP and all major compliance frameworks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
