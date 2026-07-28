# 프로젝트 개요

**브랜드:** PRECISION CNC (정밀 CNC 가공 업체)
**대상 고객:** 해외 포함 산업 구매담당자, 엔지니어, 제조 파트너

업체 소개 사이트. 회원 시스템 없음, 관리자(1인) 전용 로그인 + 관리자 페이지 필요.

**공개 기능**: 제품/가공역량 소개, 견적 문의(파일 첨부 포함), 공지사항 열람, 회사소개(오시는길 지도 섹션 포함)
**관리자 기능**: 로그인, 제품/가공역량 등록/수정/삭제, 공지사항 등록/수정/삭제, 견적 문의 목록 조회

**UI 디자인:** [project_brief_precision_cnc.md](project_brief_precision_cnc.md) 브리핑을 프롬프트로 Stitch에서 목업 생성 → 결과 HTML/Tailwind를 Next.js 컴포넌트로 포팅. (참고: 소스 md의 한글 라벨이 인코딩 손상되어 있어 영문 라벨 기준으로 해석함 — 필요 시 원본 재확인)

**디자인 시스템 토큰** (브리핑 §2 기준, `tailwind.config`에 반영):
- 컬러: Slate/Navy 베이스 + Safety Orange 포인트 컬러(CTA 버튼 등)
- 폰트: Geist
- 아이콘: Material Symbols (Industrial/Manufacturing 세트)
- 톤: 하이컨트라스트, 기술적/산업적 느낌, 모바일 퍼스트

---

# 기술 스택 (확정)

| 영역 | 기술 | 선택 이유 |
|---|---|---|
| 프레임워크 | Next.js (App Router) | SSR로 SEO 확보, 파일 기반 라우팅 |
| 언어 | TypeScript | 견적 폼 등 데이터 타입 안정성 |
| 스타일링 | Tailwind CSS (전체) | UI 목업을 Stitch(Tailwind 출력)로 생성하므로 SCSS로 재작업하는 이중 작업 방지 |
| 폼 검증 | React Hook Form + Zod | 견적 폼 입력값 검증 |
| 인증 | Firebase Authentication | 관리자 1인 이메일/비밀번호 로그인 |
| DB | Firebase Firestore | 제품(가공역량)/공지사항/문의 데이터 |
| 파일 저장소 | Firebase Cloud Storage | 제품 이미지 + 견적문의 첨부파일(CAD/PDF) |
| 이메일 발송 | Resend (서버에서만 호출) | 견적 문의 접수 시 즉시 알림, 무료 3,000건/월. API 키가 서버에만 있어 EmailJS보다 안전 |
| 호스팅 | Vercel | Next.js 자동 배포, SSL 자동 갱신 |

---

# 아키텍처 핵심 원칙

1. **공개 페이지는 Server Component + Firebase Admin SDK로 데이터 페칭.**
   포트폴리오/공지사항/회사소개는 서버에서 렌더링해야 SEO 이득이 실제로 발생함. 클라이언트에서 `useEffect`로 불러오면 검색엔진이 빈 페이지를 보게 되어 Next.js를 쓴 의미가 없어짐.

2. **Firebase 클라이언트 SDK는 관리자 페이지(로그인, 폼, 업로드)에서만 사용.**
   `lib/firebase/client.ts`(브라우저용, `NEXT_PUBLIC_*` 키)와 `lib/firebase/admin.ts`(서버 전용, 서비스 계정 키)를 명확히 분리.

3. **견적 문의는 클라이언트가 Firestore에 직접 쓰지 않음.**
   `/api/inquiries` 라우트가 Admin SDK로 저장 + Resend 발송을 한 번에 처리. Firestore 규칙에서 클라이언트 write를 원천 차단해 스팸/어뷰징 방지.

4. **실제 보안 경계는 Firestore/Storage 보안 규칙.**
   `/admin` 레이아웃의 로그인 체크는 UX용 리다이렉트일 뿐, 데이터 보호는 규칙(`request.auth.uid == ADMIN_UID`)이 담당.

5. **견적 문의 첨부파일(CAD/PDF)도 클라이언트가 Storage에 직접 올리지 않음.**
   `/api/inquiries`가 `multipart/form-data`로 파일을 받아 Admin SDK로 Storage에 업로드 + 다운로드 URL을 Firestore에 저장. 서버 단에서 확장자(.pdf/.dwg/.step 등)·용량 제한을 검증해 임의 파일 업로드를 막음.

---

# 폴더 구조

```
📦 project-root
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 (main)                    // 공개 페이지 그룹
 ┃ ┃ ┃ ┣ 📜 page.tsx                // 홈
 ┃ ┃ ┃ ┣ 📂 about
 ┃ ┃ ┃ ┃ ┗ 📜 page.tsx              // 회사소개 (정적 콘텐츠 + 오시는길 지도 섹션 포함)
 ┃ ┃ ┃ ┣ 📂 products
 ┃ ┃ ┃ ┃ ┣ 📜 page.tsx              // 제품/가공역량 목록 (SSR)
 ┃ ┃ ┃ ┃ ┗ 📂 [id]
 ┃ ┃ ┃ ┃   ┗ 📜 page.tsx            // 제품/가공역량 상세
 ┃ ┃ ┃ ┣ 📂 notices
 ┃ ┃ ┃ ┃ ┣ 📜 page.tsx              // 공지사항 목록 (SSR)
 ┃ ┃ ┃ ┃ ┗ 📂 [id]
 ┃ ┃ ┃ ┃   ┗ 📜 page.tsx            // 공지사항 상세
 ┃ ┃ ┃ ┣ 📂 quote
 ┃ ┃ ┃ ┃ ┗ 📜 page.tsx              // 견적문의 폼
 ┃ ┃ ┃ ┗ 📜 layout.tsx              // 헤더/푸터
 ┃ ┃ ┣ 📂 admin
 ┃ ┃ ┃ ┣ 📂 login
 ┃ ┃ ┃ ┃ ┗ 📜 page.tsx              // 관리자 로그인 (인증 가드 밖)
 ┃ ┃ ┃ ┣ 📜 page.tsx                // 대시보드
 ┃ ┃ ┃ ┣ 📂 products
 ┃ ┃ ┃ ┃ ┣ 📜 page.tsx              // 목록 + 삭제
 ┃ ┃ ┃ ┃ ┣ 📂 new
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 page.tsx            // 등록 (이미지 업로드 포함)
 ┃ ┃ ┃ ┃ ┗ 📂 [id]
 ┃ ┃ ┃ ┃   ┗ 📜 page.tsx            // 수정
 ┃ ┃ ┃ ┣ 📂 notices
 ┃ ┃ ┃ ┃ ┣ 📜 page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂 new
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 page.tsx
 ┃ ┃ ┃ ┃ ┗ 📂 [id]
 ┃ ┃ ┃ ┃   ┗ 📜 page.tsx
 ┃ ┃ ┃ ┣ 📂 inquiries
 ┃ ┃ ┃ ┃ ┗ 📜 page.tsx              // 견적 문의 목록 조회 (읽기 전용)
 ┃ ┃ ┃ ┗ 📜 layout.tsx              // 인증 가드 + 사이드바
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┗ 📂 inquiries
 ┃ ┃ ┃   ┗ 📜 route.ts              // Admin SDK로 Firestore 저장 + Resend 발송
 ┃ ┃ ┗ 📜 globals.css               // Tailwind 진입점 + 디자인 토큰(CSS 변수)
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 ui
 ┃ ┃ ┣ 📂 products               // 제품/가공역량 리스트, 카드, 상세 뷰
 ┃ ┃ ┗ 📂 form                   // 견적문의 폼(파일 업로드 포함)
 ┃ ┣ 📂 lib
 ┃ ┃ ┣ 📂 firebase
 ┃ ┃ ┃ ┣ 📜 client.ts               // 브라우저용 SDK 초기화 (NEXT_PUBLIC_*)
 ┃ ┃ ┃ ┣ 📜 admin.ts                // 서버 전용 Admin SDK 초기화 (서비스 계정 키)
 ┃ ┃ ┃ ┣ 📜 auth.ts                 // 로그인/로그아웃 유틸 (client)
 ┃ ┃ ┃ ┣ 📜 firestore.ts            // 클라이언트 컴포넌트용 읽기/쓰기 유틸
 ┃ ┃ ┃ ┗ 📜 storage.ts              // 이미지 업로드 유틸 (client)
 ┃ ┃ ┗ 📜 utils.ts
 ┃ ┣ 📂 types
 ┃ ┃ ┗ 📜 index.ts                  // Product, Notice, Inquiry 인터페이스
 ┃ ┗ 📂 hooks
 ┃   ┗ 📜 useAuth.ts
 ┣ 📂 public
 ┣ 📜 .env.local
 ┣ 📜 next.config.js                // images.remotePatterns에 firebasestorage.googleapis.com 등록 필요
 ┣ 📜 tailwind.config.ts            // 브리핑 §2 컬러(Slate/Navy/Safety Orange)·Geist 폰트 토큰
 ┗ 📜 package.json
```

---

# Firestore 데이터 모델

**products** (제품/가공역량 소개 — CNC Turning, 5-Axis Milling, Precision Assembly 등)
- `title`: string
- `description`: string
- `category`: string (예: Turning / Milling / Assembly)
- `imageUrls`: string[]
- `order`: number (정렬용)
- `createdAt`: timestamp

**notices**
- `title`: string
- `content`: string
- `isPinned`: boolean
- `createdAt`: timestamp

**inquiries** (견적 문의 — 브리핑 §4.2, §4.3 기준 필드)
- `name`: string
- `company`: string
- `email`: string
- `phone`: string
- `material`: string
- `quantity`: string
- `deadline`: string
- `message`: string (프로젝트 상세)
- `fileUrls`: string[] (CAD/PDF 첨부, 서버가 Storage 업로드 후 채움)
- `status`: "new" | "checked"
- `createdAt`: timestamp

---

# 보안 규칙 설계 방향

- `products`, `notices`: 읽기 전체 공개 / 쓰기는 `request.auth.uid == ADMIN_UID`만 허용
- `inquiries`: 클라이언트 read/write 전부 차단 (API Route의 Admin SDK만 접근 — 규칙 자체를 우회하므로 별도 허용 불필요)
- Storage `products/*`: 읽기 공개 / 쓰기는 관리자 UID만 허용
- Storage `quote-uploads/*`: 클라이언트 read/write 전부 차단 (API Route의 Admin SDK만 업로드, 확장자·용량은 서버에서 검증)

---

# 환경 변수

```
# 클라이언트 (브라우저 노출 OK)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

# 서버 전용 (절대 노출 금지)
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=
RESEND_API_KEY=
ADMIN_UID=
```

---

# 진행 체크리스트

- [ ] Stitch에서 브리핑 기반 UI 목업 생성 (원본 한글 라벨 재확인 후 진행)
- [ ] `create-next-app` 초기화 (TS, App Router, Tailwind, ESLint)
- [ ] `tailwind.config.ts`에 브리핑 디자인 토큰(컬러/폰트/아이콘) 반영
- [ ] Stitch 목업(HTML/Tailwind) → Next.js 컴포넌트로 포팅
- [ ] Firebase 프로젝트 생성 (Auth, Firestore, Storage 활성화)
- [ ] `lib/firebase/client.ts`, `lib/firebase/admin.ts` 작성
- [ ] Firestore/Storage 보안 규칙 작성 및 배포
- [ ] 공개 페이지: 홈 / 회사소개(오시는길 지도 섹션 포함)
- [ ] 제품/가공역량 목록·상세 페이지 (SSR)
- [ ] 공지사항 목록·상세 페이지 (SSR)
- [ ] 견적문의 폼(CAD/PDF 첨부) + `/api/inquiries` (Firestore 저장 + Storage 업로드 + Resend 발송)
- [ ] 관리자 로그인 페이지 + `useAuth` 훅
- [ ] 관리자 레이아웃 (인증 가드 + 사이드바)
- [ ] 관리자: 제품/가공역량 CRUD + 이미지 업로드
- [ ] 관리자: 공지사항 CRUD
- [ ] 관리자: 견적문의 목록 조회 (첨부파일 다운로드, 상태 변경 포함 여부 결정)
- [ ] `next.config.js` 이미지 도메인 설정
- [ ] Vercel 배포 + 환경변수 등록
- [ ] 커스텀 도메인 연결
