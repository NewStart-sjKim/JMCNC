export function Footer() {
  return (
    <footer className="bg-primary-container w-full py-12 border-t border-outline/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            {/* <span className="material-symbols-outlined text-white text-2xl">
              precision_manufacturing
            </span> */}
            <span className="font-headline-md text-headline-md text-on-primary-container">
              JM정공
            </span>
          </div>
          {/* TODO: 실제 사업 분야/소개 문구로 교체 (지금은 Stitch 예시 문구) */}
          <p className="font-technical-data text-technical-data text-on-primary-container/80 max-w-md">
            정밀 CNC 가공 전문 업체 JM정공입니다.
          </p>
          <div className="font-technical-data text-technical-data text-on-primary-container/60 space-y-1">
            <p>상호: JM정공 | 대표: 윤재식 | 사업자등록번호: 306-04-52817</p>
            <p>전화: 010-4115-0549 | 이메일: dbswotlr1111@naver.com</p>
            <p>© {new Date().getFullYear()} JM정공. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm text-white uppercase tracking-widest">
              Compliance
            </h4>
            {/* TODO: 약관/개인정보처리방침 페이지 생성 전까지 임시 링크 */}
            <a
              className="font-technical-data text-technical-data text-on-primary-container/80 hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-technical-data text-technical-data text-on-primary-container/80 hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            {/* TODO: ISO 9001 등 실제 인증 보유 여부 확인 후 추가 (미확인 상태라 우선 제거) */}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm text-white uppercase tracking-widest">
              Support
            </h4>
            <a
              className="font-technical-data text-technical-data text-on-primary-container/80 hover:text-white transition-colors"
              href="/quote"
            >
              Contact Support
            </a>
            {/* TODO: Documentation, Partner Network 페이지는 스코프 확정 전까지 임시 링크 */}
            <a
              className="font-technical-data text-technical-data text-on-primary-container/80 hover:text-white transition-colors"
              href="#"
            >
              Documentation
            </a>
            <a
              className="font-technical-data text-technical-data text-on-primary-container/80 hover:text-white transition-colors"
              href="#"
            >
              Partner Network
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
