import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hillview Highland Cabin",
  description:
    "Hillview is a 2-bedroom cabin in Braemar for up to 4 guests, with on-site parking, great views, and easy access to the Cairngorms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
