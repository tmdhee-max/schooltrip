"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname();

  const tabs = [
    { name: "공지사항", path: "/notice" },
    { name: "첫째날", path: "/day/1" },
    { name: "둘째날", path: "/day/2" },
    { name: "셋째날", path: "/day/3" },
  ];

  return (
    <div className="w-full flex justify-center border-b mt-6">
      <div className="flex gap-4">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path || (pathname === '/' && tab.path === '/notice');
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`px-4 py-2 text-sm md:text-base font-semibold border-b-2 transition-colors ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
