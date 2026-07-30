import { QuoteForm } from "@/components/form/QuoteForm";

// TODO: 이미지(lh3.googleusercontent.com)는 Stitch 목업의 임시 placeholder.
// 실제 촬영 이미지로 교체 후 next.config.js remotePatterns 정리 필요.
export default function HomePage() {
  return (
    <>
      {/* Hero Section — Products/About 배너와 동일한 "어두운 그라데이션 오버레이 + 흰 글씨" 톤 통일 */}
      <section className="relative w-full h-[600px] overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <img
            className="object-cover w-full h-full opacity-60"
            alt="정밀 CNC 밀링 머신이 금속을 가공하는 모습"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGYObKiESDUD1GmJPR6roA0DMifWvaOTcIuvFnjO5hYp5oHSQR1e66SDn7rEJktBfTj_OE5JOXGAtpnW1DL2AmDoIrY0zN7OCtNHa7t-lVXTyY_LaAirMph6aORLdjqxfV3DHg63rrJ2gtVvpKJZRxxX32ds1TBhxnlIuXVi6FHrIh5NOsR44ZEm4654Azhb8FmRyxx3XXXRGhVUmKwawAREok9H1qi2aWO6dNTVJuWWtqM5mgvi6s"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/50 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <span className="text-on-tertiary-container font-label-sm tracking-widest uppercase mb-4 block">
            Precision Manufacturing
          </span>
          <h1 className="font-headline-xl text-headline-xl text-white max-w-2xl">
            20년의 노하우, 결과로 증명합니다.
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container mt-4 max-w-xl">
            오랜 경험을 바탕으로 어떤 복잡한 도면도 정밀하고 완벽하게 구현해냅니다.
          </p>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary geist-font">
            보유 설비
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-2">
            고객이 만족할 제품을 원하는 납기에 맞춰 최상의 상태로 납품합니다.
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

      {/* Quotation Form — /quote 페이지와 동일한 QuoteForm 컴포넌트 재사용 (통일) */}
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
          <QuoteForm />
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
