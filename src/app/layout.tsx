import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arrow Trade",
  description: "Unlock Knowledge with Our Featured Articles",
  openGraph: {
    title: "Arrow Trade",
    description: "Unlock Knowledge with Our Featured Articles",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
