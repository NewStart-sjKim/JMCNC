// TODO: 이미지(lh3.googleusercontent.com)는 Stitch 목업의 임시 placeholder.
// 실제 촬영 이미지로 교체 후 next.config.js remotePatterns 정리 필요.
// TODO: 견적 폼은 아직 정적 마크업 — React Hook Form + Zod, /api/inquiries 연동 필요 (PROJECT.md 아키텍처 원칙 3, 5).
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden bg-surface-container-highest">
        <div className="absolute inset-0 z-0">
          <img
            className="object-cover w-full h-full opacity-80 mix-blend-multiply"
            alt="정밀 CNC 밀링 머신이 금속을 가공하는 모습"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGYObKiESDUD1GmJPR6roA0DMifWvaOTcIuvFnjO5hYp5oHSQR1e66SDn7rEJktBfTj_OE5JOXGAtpnW1DL2AmDoIrY0zN7OCtNHa7t-lVXTyY_LaAirMph6aORLdjqxfV3DHg63rrJ2gtVvpKJZRxxX32ds1TBhxnlIuXVi6FHrIh5NOsR44ZEm4654Azhb8FmRyxx3XXXRGhVUmKwawAREok9H1qi2aWO6dNTVJuWWtqM5mgvi6s"
          />
        </div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary max-w-2xl bg-surface/80 p-6 backdrop-blur-sm border border-outline-variant">
            Precision Engineering for Global Industry
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-xl bg-surface/80 p-4 backdrop-blur-sm border border-outline-variant">
            초정밀 가공 기술로 글로벌 산업의 기준을 제시합니다.
          </p>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary geist-font">
            Core Capabilities
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-2">
            최고 수준의 설비와 기술력으로 완벽한 품질을 보장합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <CapabilityCard
            title="CNC Turning"
            description="고정밀 원통형 부품 가공. 공차 0.001mm 수준의 완벽한 품질."
            imageAlt="CNC 선반으로 원통형 금속 부품을 가공하는 모습"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDVa6791lyP8EzNi1krH4Q7O9tvoN0klj32Ir5-YmVZfbTY5i_NbV1tY6X1r_wRgn7hDG1EcmxF8eU9Cna8fwn36TsbBBopYgkey6YF02wcB9RfSZznU966q67Y9bBGc7Rck0P1-e16KXgWQ604SGsiU_UGFwd6cgLMBdCNt4yNVm3kuGmDqwan0500VKd8l8qFIZFC2SFv3KxkvRDRWp6pezwCUMbdZeXcGRjL8xOKXCM1dwOD9Gqv"
          />
          <CapabilityCard
            title="5-Axis Milling"
            description="복잡한 형상의 다면 가공. 항공우주 및 의료기기 부품 특화."
            imageAlt="5축 CNC 밀링 머신이 복잡한 형상의 부품을 가공하는 모습"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA-E_En9pg-d1Pt0RWwyiOkEC5TvGfu7JLpldyb8HbTIng8mi_XbLW6oZhw6kcj6pdlOUXms6UFP9Ig4yfPnN-wM01LABk2KX5yzk32QHA3FYIiICMVCktEORH-lKQiJvWHlHEKwp6yGItx7-HIGf-6K1gWBqZv7GVHibKjB3BfhHQXW0ZTzNTFY7WNDs_sqe3nXzv6n2XRjka9cD2MFeXPyDnMcd0K5ZVtpuoG4t984DXjbQuGpehd"
          />
          <CapabilityCard
            title="Precision Assembly"
            description="가공 완료 부품의 모듈 조립 및 철저한 품질 검사 시스템."
            imageAlt="클린룸에서 정밀 부품을 조립하는 모습"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCjj79t9WAf6NIvh29eC1xZCDHYS5BY9pFxhsvOCgFQ2W2T8MsC-HOrTyzJPD-xyUVrpb213E6bfTNa0ZhojpWz2EBJei4e0f1hYHJ0hUbxJllTgd85mnzk1CEiGFD7nJfv51dra5_kJ3OtZFpnTmNYw8y3saUF5ZcgZ6JwDqbI7g_uUhZ9Xp-cdVeE-rp4i-UGIFNtxQnmUlfVPKDtAT0VhrxE8-YdNRmpGCl44ZmeP-jn0mDp5wiV"
          />
        </div>
      </section>

      {/* Quotation Form */}
      <section className="bg-surface-container-low py-section-gap border-y border-outline-variant">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-10 text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary geist-font">
              Quotation Inquiry
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-2">
              프로젝트 도면을 첨부해 주시면 신속하게 견적을 안내해 드립니다.
            </p>
          </div>
          <form className="bg-surface border border-outline-variant p-8 rounded shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-label-sm text-label-sm text-primary mb-2 uppercase">
                  Name
                </label>
                <input
                  className="w-full bg-surface-container-highest border border-outline-variant rounded p-3 font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors"
                  placeholder="담당자 성함"
                  type="text"
                  name="name"
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-primary mb-2 uppercase">
                  Company
                </label>
                <input
                  className="w-full bg-surface-container-highest border border-outline-variant rounded p-3 font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors"
                  placeholder="회사명"
                  type="text"
                  name="company"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-label-sm text-label-sm text-primary mb-2 uppercase">
                Email
              </label>
              <input
                className="w-full bg-surface-container-highest border border-outline-variant rounded p-3 font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors"
                placeholder="이메일 주소"
                type="email"
                name="email"
              />
            </div>
            <div className="mb-6">
              <label className="block font-label-sm text-label-sm text-primary mb-2 uppercase">
                Project Details
              </label>
              <textarea
                className="w-full bg-surface-container-highest border border-outline-variant rounded p-3 font-body-md text-body-md text-primary focus:border-primary focus:ring-0 transition-colors"
                placeholder="가공 소재, 수량, 납기 등 상세 내용을 입력해주세요."
                rows={4}
                name="message"
              />
            </div>
            <div className="mb-8">
              <label className="block font-label-sm text-label-sm text-primary mb-2 uppercase">
                File Upload (CAD/PDF)
              </label>
              <div className="border-2 border-dashed border-outline-variant rounded p-8 text-center bg-surface-container-lowest hover:bg-surface-container-highest transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-[32px] text-secondary mb-2 block">
                  upload_file
                </span>
                <span className="font-body-md text-body-md text-secondary">
                  클릭하여 파일을 업로드하거나 드래그 앤 드롭 하세요.
                </span>
              </div>
            </div>
            <button
              className="w-full bg-on-tertiary-container text-on-primary font-headline-md text-[18px] py-4 rounded hover:bg-tertiary-container transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-[1px]"
              type="button"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function CapabilityCard({
  title,
  description,
  imageAlt,
  imageSrc,
}: {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}) {
  return (
    <div className="bg-surface border border-outline-variant hover:border-primary hover:shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 rounded p-6 group">
      <div className="h-48 mb-6 overflow-hidden bg-surface-container-low rounded border border-outline-variant relative">
        <img
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          alt={imageAlt}
          src={imageSrc}
        />
      </div>
      <h3 className="font-headline-md text-headline-md text-primary mb-2 geist-font">
        {title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
