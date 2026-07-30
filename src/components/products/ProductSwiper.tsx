"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { ProductItem } from "@/lib/products";

export function ProductSwiper({ items }: { items: ProductItem[] }) {
  return (
    // 좌우 padding은 화살표 버튼이 이미지 바깥 여백에 놓일 공간
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]}
        
        pagination={{ clickable: true }}

        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-14 product-swiper"
        
      >
        {items.map((item, i) => (
          <SwiperSlide key={`${item.title}-${i}`}>
            <div className="border border-outline-variant rounded-xl overflow-hidden bg-surface h-full flex flex-col">
              <div className="h-56 overflow-hidden shrink-0">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md mb-2">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}