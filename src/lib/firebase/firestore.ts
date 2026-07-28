"use client";

import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "./client";

export const db = getFirestore(firebaseApp);

// TODO: 관리자 페이지용 products/notices/inquiries 조회·등록·수정·삭제 유틸
// (공개 페이지는 이 파일을 쓰지 않음 — lib/firebase/admin.ts + Server Component로 조회, PROJECT.md 아키텍처 원칙 1)