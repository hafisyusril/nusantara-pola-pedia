"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  const sidebarItems = [
    { name: "Blog", path: "/admin/blog" },
    { name: "Traffic", path: "/admin/traffic" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar Kiri */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="px-6 py-6 font-bold text-xl border-b border-blue-500">
          Admin Panel
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-2 rounded hover:bg-blue-500 transition ${
                  isActive ? "bg-blue-500 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-blue-400 text-white flex items-center px-6 shadow-md">
          <h1 className="font-bold text-lg">Admin Dashboard</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
