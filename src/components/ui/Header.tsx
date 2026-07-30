"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "홈", icon: "home" },
  { href: "/about", label: "회사 소개", icon: "factory" },
  { href: "/products", label: "제품 소개", icon: "settings_input_component" },
  { href: "/quote", label: "견적 문의", icon: "request_quote" },
  // TODO: 당장은 필요 없어서 네비게이션에서만 숨김 — 페이지/코드는 유지, 필요해지면 이 줄만 복구
  // { href: "/notices", label: "공지사항", icon: "notifications" },
];

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="w-full top-0 sticky z-40 bg-surface border-b border-outline-variant">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/JM-cnc.png"
              alt="JM정공"
              width={240}
              height={131}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-primary border-b-2 border-primary font-bold transition-colors duration-200"
                      : "text-secondary font-medium hover:text-primary transition-colors duration-200"
                  }
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <a
            href="/quote"
            className="bg-safety-orange text-white font-label-sm text-label-sm px-6 py-3 rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            GET QUOTE
          </a>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex flex-col p-6 w-80 bg-surface-container-low shadow-sm transform transition-all duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="font-headline-lg text-headline-lg font-bold text-primary">
            NAV
          </span>
          <button
            className="p-2 bg-surface-container-highest rounded-full"
            onClick={() => setDrawerOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className={
                  isActive
                    ? "p-4 bg-secondary-container text-on-secondary-container font-body-md rounded-lg flex items-center gap-4"
                    : "p-4 text-on-surface-variant font-body-md rounded-lg hover:bg-surface-variant transition-colors flex items-center gap-4"
                }
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden fixed bottom-6 right-6 z-50 bg-primary text-on-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setDrawerOpen((open) => !open)}
      >
        <span className="material-symbols-outlined">
          {drawerOpen ? "close" : "menu"}
        </span>
      </button>
    </>
  );
}