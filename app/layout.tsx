import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "学習リンク集",
  description: "自学支援用リンク集（mikanやカスタムGPTsなど）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-black dark:bg-zinc-900 dark:text-white antialiased`}
      >
        <main className="min-h-screen p-4">{children}</main>
      </body>
    </html>
  );
}
