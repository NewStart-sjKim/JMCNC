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
          
        </div>
      </div>
    </footer>
  );
}
