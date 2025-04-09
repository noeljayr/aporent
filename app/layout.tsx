import type { Metadata } from "next";
import "@/css/globals.css";
import Navbar from "@/components/navigation/Navbar";

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

export const metadata: Metadata = {
  title: "ApoRent",
  description: "The Search For Your Dream Home Ends With ApoRent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="hide-scrollbar">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
