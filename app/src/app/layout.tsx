import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import{ClerkProvider} from '@clerk/nextjs' ; 
import Provider from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "inote",
  description: "ai-powered note taking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <Provider>
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
    </ClerkProvider>
  );
}
