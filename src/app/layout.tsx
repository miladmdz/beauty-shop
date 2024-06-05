import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";

export const metadata: Metadata = {
  title: "shop test",
  description: "This is first project with next",
  icons: {
    icon: "./images/997555.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="fa" dir="rtl">
        <body className="font-DanaRegular">{children}</body>
      </html>
    </StoreProvider>
  );
}
