import "./globals.css";
import type { Metadata } from "next";

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
      <body className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="container mx-auto flex h-16 items-center px-4">
            <div className="font-bold text-xl text-blue-600">
              항도여중 수학여행
            </div>
            <nav className="ml-auto flex gap-4">
              <a href="#" className="text-sm font-medium hover:underline underline-offset-4">소개</a>
              <a href="#" className="text-sm font-medium hover:underline underline-offset-4">일정</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row px-4">
            <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
              © 2026 항도여중 수학여행. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
