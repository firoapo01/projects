import type { Metadata } from "next";
import { seo } from "@/data/seo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
