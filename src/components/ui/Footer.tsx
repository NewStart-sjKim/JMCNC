export function Footer() {
  return (
    <footer className="bg-primary-container py-12 w-full border-t border-outline/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-sm">
        <div className="flex flex-col gap-4">
          <div className="font-headline-md text-headline-md text-on-primary-container">
            PRECISION CNC
          </div>
          <p className="font-technical-data text-technical-data text-on-primary-container/80 max-w-md">
            Engineered to exact tolerances. Delivering high-quality machined
            components for global industries.
          </p>
          <div className="font-technical-data text-technical-data text-on-primary-container/80 mt-4">
            © {new Date().getFullYear()} PRECISION CNC. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <nav className="flex flex-col md:items-end gap-3 font-technical-data text-technical-data">
            {/* TODO: 약관/개인정보처리방침 페이지 생성 전까지 임시 링크 */}
            <a
              className="text-on-primary-container/80 hover:text-tertiary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-primary-container/80 hover:text-tertiary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-on-primary-container/80 hover:text-tertiary transition-colors"
              href="#"
            >
              ISO 9001 Certified
            </a>
            <a
              className="text-on-primary-container font-bold underline hover:text-tertiary transition-colors"
              href="/quote"
            >
              Contact Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
