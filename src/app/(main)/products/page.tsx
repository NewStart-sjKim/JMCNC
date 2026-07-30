import type { Metadata } from "next";
import { ProductSwiper } from "@/components/products/ProductSwiper";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Product Introduction | JM정공",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden flex items-center bg-primary-container">
        <div className="absolute inset-0 z-0">
          {/* TODO: Stitch 임시 placeholder 이미지 — 실제 촬영 이미지로 교체 필요 */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgFXg4SB4rTS3BnjX7_HDZW0J9Uk4lVKnzukI8Ig2aKKyYgUvYFjeFyR7xIZZmdSpuTa3H8Rk3RN0ccQN2OVJNQ3fR7-e-WX5zJgsww_WM5AfHD4_AUwyCQNsLh3wB__x8rD0Ii_EiPhdOhxyRE9ZV0O9dUC-yCd6Hxu2nTo_EAp3amWgGKnUzByHZGnC7ewH-bedy9TF9h8mY5HbUChnmFYi9ENwIOOYvKlzOF5Qrxy75EFjZF9wR"
            alt="정밀 CNC 가공 센터가 티타늄 블록을 가공하는 모습"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full ">
          <div className="max-w-2xl">
            <span className="text-on-tertiary-container font-label-sm tracking-widest uppercase mb-4 block">
              Product Introduction
            </span>
            <h1 className="font-headline-xl text-headline-xl text-white mb-6">
              숙련된 기술로 완성하는 정밀 가공
            </h1>
            <p className="text-on-primary-container font-body-lg text-body-lg max-w-xl">
              MCT, NC밀링, 용접, 범용 선반 등 다양한 설비와 20년간 쌓아온
              노하우로, 고객이 원하는 제품을 정밀하게 완성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Product List (Swiper) */}
      {/* overflow-x-hidden: 슬라이더 화살표를 이미지 바깥으로 빼면서 생기는 여백이 전체 페이지 가로 스크롤을 만들지 않도록 하는 안전장치 */}
      <section className="py-section-gap industrial-dots overflow-x-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary geist-font">
              주요 제품
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-2">
              최고 수준의 기술력으로 완벽한 품질을 보장합니다.
            </p>
          </div>
          <ProductSwiper items={PRODUCTS} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-container-high py-24 border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg mb-6">
            제품에 대해 궁금하신가요?
          </h2>
          <p className="text-secondary font-body-lg mb-10 max-w-2xl mx-auto">
            제품에 대해 문의하시면 담당 엔지니어가 검토 후 연락드립니다.
          </p>
          <div className="flex justify-center">
            <a
              href="/quote"
              className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold transition-all hover:bg-black/90 active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">mail</span>
              문의하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}