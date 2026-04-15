import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ibrahim Quaizar | AI & Full-Stack Engineer",
  description:
    "Computer Engineering student at Stony Brook building AI-powered systems, full-stack products, and scalable tools.",
  openGraph: {
    title: "Ibrahim Quaizar | AI & Full-Stack Engineer",
    description:
      "AI-powered systems, full-stack products, and product-driven engineering.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
