"use client";

import { use } from "react";

// TODO: 제품 수정 폼 (React Hook Form + Zod, 기존 데이터 프리필)
export default function AdminEditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <div>Edit Product {id}</div>;
}
