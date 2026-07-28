"use client";

import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Product Introduction" },
  { href: "/quote", label: "Quotation Inquiry" },
  { href: "/notices", label: "Notice" },
  { href: "/about", label: "Company Introduction" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full top-0 sticky z-40 bg-surface border-b border-outline-variant">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <div className="flex items-center gap-2 text-primary font-headline-md text-headline-md font-bold tracking-tight">
          <span className="material-symbols-outlined text-[28px]">
            precision_manufacturing
          </span>
          <span>PRECISION CNC</span>
        </div>

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
          className="bg-on-tertiary-container text-on-primary font-label-sm text-label-sm px-6 py-3 rounded hover:bg-tertiary-container transition-colors active:opacity-80 flex items-center gap-2"
        >
          GET QUOTE
        </a>
      </div>
    </header>
  );
}
