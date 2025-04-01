import type { Metadata } from "next";
import "@/css/globals.css";
import Navbar from "@/components/navigation/Navbar";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

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
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
