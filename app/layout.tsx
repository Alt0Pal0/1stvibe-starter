import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your 1stvibe project",
  description: "Built with 1stvibe.ai — your blank canvas, ready to ship.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
