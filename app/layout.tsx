import "./globals.css";
import type { Metadata } from "next";
import Tabs from "@/components/Tabs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "항도여중 수학여행",
  description: "항도여중 수학여행 웹서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
        <header className="w-full bg-white pt-10 pb-2">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <Link href="/">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
                항도여중 수학여행
              </h1>
            </Link>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              10월 14일(수) ~ 10월 16일(금)
            </p>
          </div>
          <Tabs />
        </header>
        <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-6">
          {children}
        </main>
        <footer className="border-t py-6 mt-10 bg-white">
          <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4">
            <p className="text-center text-sm text-gray-500">
              © 2026 항도여중 수학여행. All rights reserved.
            </p>
            <Link href="/admin/login" className="text-xs text-gray-400 hover:underline">
              관리자 모드
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
