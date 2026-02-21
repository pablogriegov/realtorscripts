import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RealtorScripts",
  description: "Professional scripts for realtors",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
