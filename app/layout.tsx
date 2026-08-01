import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodayna Emad Mohamed — Portfolio",
  description:
    "Rodayna Emad Mohamed — Teaching Assistant, Data Scientist & AI Engineer. Explore my background, projects, and get in touch.",
  openGraph: {
    title: "Rodayna Emad Mohamed — Portfolio",
    description:
      "Teaching Assistant, Data Scientist & AI Engineer. Explore my background, projects, and get in touch.",
    type: "website",
  },
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
