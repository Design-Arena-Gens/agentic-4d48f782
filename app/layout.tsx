import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cricket 26 2D - Simulation Game",
  description: "2D Cricket Simulation Game with top-down gameplay",
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
