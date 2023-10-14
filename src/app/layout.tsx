import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";

export const metadata = {
  title: "",
  description: "Generate awesome headshots in minutes using AI",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-y-50">
        <section>
          <Suspense fallback={<div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />}>
            <Header />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}