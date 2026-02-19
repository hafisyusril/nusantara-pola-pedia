"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface AdminLayoutProps {
  children: React.ReactNode;
  userName?: string; 
}

export default function AdminLayout({ children, userName = "Admin" }: AdminLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar kiri */}
      <aside className="w-64 bg-blue-500 text-white p-6 flex flex-col gap-4">
        
        <Link
          href="/admin"
          className={`px-3 py-2 rounded text-2xl `}
        >
          ADMIN PANEL
        </Link>
        <Link
          href="/admin/posts"
          className={`px-3 py-2 rounded ${pathname === "/admin/posts" ? "bg-blue-700" : ""}`}
        >
          Posts
        </Link>
        <Link
          href="/admin/traffic"
          className={`px-3 py-2 rounded ${pathname === "/admin/traffic" ? "bg-blue-700" : ""}`}
        >
          Traffic
        </Link>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top navbar */}
        <header className="flex items-center justify-end bg-blue-300 px-6 py-6 shadow-md">
          <span className="text-white font-medium text-right">Halo, {userName}</span>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 bg-blue-50">{children}</main>
      </div>
    </div>
  );
}
