"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard", icon: "⊞" },
  { href: "/customers", label: "Customers", icon: "◉" },
  { href: "/about", label: "About", icon: "◎" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-slate-800 flex flex-col"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
          DFO&I Internal
        </p>
        <h1 className="text-lg font-bold text-white">Customer Insights</h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1" role="navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <p className="text-xs text-slate-600">v1.0.0 · Managed Services</p>
      </div>
    </aside>
  );
}