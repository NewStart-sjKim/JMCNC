import { NextRequest, NextResponse } from "next/server";

// TODO: multipart/form-data 파싱 → 파일 확장자(.pdf/.dwg/.step 등)·용량 검증
// → Admin SDK로 Storage 업로드 → Firestore에 inquiry 저장(fileUrls 포함) → Resend로 관리자 메일 발송
// 클라이언트가 Firestore/Storage에 직접 쓰지 않는 이유는 PROJECT.md 아키텍처 원칙 3, 5 참고
export async function POST(request: NextRequest) {
  return NextResponse.json({ ok: true });
}
