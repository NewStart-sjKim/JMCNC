import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Introduction | JM정공",
};

// TODO: 주소는 아직 미확정 — 확정되는 대로 아래 Map & Contact 섹션과
// src/lib/seo(추후 구조화 데이터)에 반영 필요.
export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/JM-inside.jpg"
            alt="정밀 CNC 가공 현장"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-on-primary">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-primary-container mb-4 block ">
              The Standard of Precision
            </span>
            <h1 className="font-headline-xl text-headline-xl mb-6 leading-none">
              Engineering the Future of{" "}
              <span className="text-secondary-container">
                Industrial Excellence
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-lg mb-8">
              MCT와 NC밀링, 용접, 범용 선반 등 가공 설비와 20년간 숙련된
              기술을 바탕으로 정밀하게 제품을 생산합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex gap-4 items-center mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                About Us
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-8">
              기술력과 경영 철학
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-headline-md text-headline-md mb-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    precision_manufacturing
                  </span>{" "}
                  회사 소개
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  JM정공은 MCT와 NC밀링, 용접, 범용 선반 등 가공 설비와 20년간
                  숙련된 기술을 바탕으로, 정밀하게 제품을 생산합니다.
                  <br />
                  일본 제품의 다수 경험으로 작은 부품도 알맞는 공차도 자신
                  있습니다.
                  <br />
                  고객이 원하는 니즈에 맞춰 제품을 제공합니다.
                </p>
              </div>
              <div className="h-px bg-outline-variant/30" />
              <div>
                <h3 className="font-headline-md text-headline-md mb-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    flag
                  </span>{" "}
                  경영방침
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  고객이 만족할 제품을 원하는 납기에 맞춰
                  <br />
                  최상의 상태로 납품함.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-surface-container overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover"
                alt="정밀 가공된 산업 부품들"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlbqhsOt6UoZBU6-F9wU1GyWKNz-Kfu0IEMYUUr2_y_fqmZA65jqS-VpCwRWIVV_a7gosVe_fkENhWNpWp3hNQR3okkUtStUmFhbMz_sQdaA3wSZKh1K6gzsG1r6q4lBlZRl5aWSALOMMgyJ_76c4i-HIW5T6o6VnyXOxmo-_8w_WXiB48r-wwnhlfp36DMHNnwEq3MIYmGuINvCwA8dQjaZotnXwWbOCG1b4J44t9oif4zEieQPmu"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Equipment */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-4">
              Infrastructure
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-6">
              가공 인프라
            </h2>
            {/* TODO: 시설 규모/보유 설비 목록 전부 미확인 — 실제 정보로 교체 필요 */}
            <p className="text-on-surface-variant mb-8">
              정밀한 설비를 갖춘 생산시설에서 정밀 CNC 가공을 진행합니다.
            </p>
            <ul className="space-y-4">
              {[
                "대신산업ACDC 겸용 알곤 용접기ACE-ITW",
                "남선 10인치선반 범용선반",
                "남선 밀링2호기",
                "탭보로방 gtd-410-m",
                "기흥 6호 세미NC밀링",
                "doosan mct머시닝센터 Mynx6500/50II",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-body-md font-medium"
                >
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="산업용 CNC 가공 공장 전경"
                src="/JM-inside.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-on-primary font-bold">
                  {/* doosan mct머시닝센터 <br/>
                  Mynx6500/50II */}
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="정밀 다이아몬드 팁 공구 클로즈업"
                src="/JM-inside2.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-on-primary font-bold">
                  {/* Micro-Machining Center */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact (오시는길) */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-stretch">
          <div className="bg-surface-container p-8 md:p-12">
            <h2 className="font-headline-lg text-headline-lg mb-8">
              오시는 길
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold">본사 및 생산시설</p>
                  <p className="text-on-surface-variant">
                    경기 화성시 만세구 마도로 660번길 22
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">
                  call
                </span>
                <div>
                  <p className="font-bold">대표 연락처</p>
                  <p className="text-on-surface-variant">010-4115-0549</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">
                  mail
                </span>
                <div>
                  <p className="font-bold">이메일 문의</p>
                  <p className="text-on-surface-variant">
                    dbswotlr1111@naver.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              {/* TODO: 실제 지도 서비스(Google/Kakao Map) 연결 */}
              {/* <button className="bg-primary text-on-primary px-8 py-3 font-bold hover:opacity-90 active:scale-95 transition-all">
                SCHEDULE A TOUR
              </button> */}
              <button className="border border-primary text-primary px-8 py-3 font-bold hover:bg-primary hover:text-on-primary active:scale-95 transition-all">
                길찾기
              </button>
            </div>
          </div>
          {/* TODO: Kakao Map(국내 사용자에게 더 익숙)으로 교체 검토 — 지금은 API 키 없이 되는 구글 지도 임베드 */}
          <div className="h-full min-h-[400px] bg-outline-variant">
            <iframe
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              title="회사 위치 지도"
              src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%A7%8C%EC%84%B8%EA%B5%AC%20%EB%A7%88%EB%8F%84%EB%A1%9C%20660%EB%B2%88%EA%B8%B8%2022&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  );
}