import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customer Insights Dashboard",
  description: "Internal dashboard for tracking customer feedback and sentiment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main
            id="main-content"
            className="flex-1 ml-64 p-8 bg-slate-950"
            role="main"
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}