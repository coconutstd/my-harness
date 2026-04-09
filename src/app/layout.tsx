import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "할 일 목록",
  description: "간단한 투두앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
