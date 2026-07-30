// 제품소개 페이지 스와이퍼와 견적문의 폼의 셀렉트박스가 같은 목록을 참조하도록 공용 데이터로 분리.
// TODO: 실제로는 Firebase Admin SDK로 products 컬렉션을 조회해야 함 (지금은 정적 샘플 데이터)
export interface ProductItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    title: "5-Axis Milling",
    description: "복잡한 형상의 다면 가공. 항공우주 및 의료기기 부품 특화.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyvXPl16pYF3DIN1RGvaW6ma8ofBjZM9_nJ9LD3Lrz9CVnPPpmu2i073bjAovmHb75obVZ6kGQHwhSE6SvhSRDGHokbSep3XZT-5DHf7bzVETb6cH1xkFe96CeCRl3l31vWSVT9xl3IqB-v64KtfpzrvzYZpmuyt2B8j1UwCsY2qdIymWcANVdJcigg3MqI7yw0kdaPu0s7y2Whb3lm_oPlJm4_B9xWeCMvB1jsw7CXVBHtJMlPK0s",
    imageAlt: "5축 CNC 밀링 머신이 곡면 알루미늄 부품을 가공하는 모습",
  },
  {
    title: "CNC Turning & Swiss Machining",
    description: "고정밀 원통형 부품 가공. 공차 0.001mm 수준의 완벽한 품질.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDciZ519EFvePfey2IGmHnFPtHE4fDcojsI-Fa6qzBrnYm1Q_WTgY9qQTWrG9EYAAscPsmN_KqV_QXxC6qyDzqQCyMf8OAhJAspn0j3SV7jWsq9uMiWoyNeQe1QfLoWpqdqPKsi1X59Z7GmY4320mPJr6RCMHygTPj5e8Zx1321ZuB377HL13Ztu-Vo8mCbclmtQDHtlt3YM-oScGbgTIRQcJdAe_4KfJ9b2NzCH4SZjGbNudfhgptc",
    imageAlt: "정밀 CNC 선반이 스테인리스 부품을 가공하는 모습",
  },
  {
    title: "Precision Assembly",
    description: "가공 완료 부품의 모듈 조립 및 철저한 품질 검사 시스템.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmAdd6ict1-4mGigYxbi5tI3BLBvbAVwYDH4HsC9sqG7ZE6VdGgLQYTrZRprPlBcBE2DbOWzznHGkBPyuq_Lj_icZYsIAMxFwStx6aszF7bD54H8z6lYJZdqgXHlAztzveDomTQ-EXK5DN1mqtNkzFFG5Cdwd9PoFhzvh_sG77_EbG4VHs2yQBdhS-uuNlQDYuw5PyB71EPVQSO_HUWXPwuLmJGOHBwGFrQ0UyjXCdArwdLnFhrfEM",
    imageAlt: "클린룸에서 정밀 조립 작업을 하는 기술자",
  },
];