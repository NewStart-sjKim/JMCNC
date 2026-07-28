// TODO: useAuth로 로그인 여부 체크 후 미로그인 시 /admin/login으로 리다이렉트.
// 이 가드는 UX용일 뿐 실제 데이터 보호는 Firestore/Storage 보안 규칙이 담당 (PROJECT.md 아키텍처 원칙 4).
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* TODO: 사이드바 (대시보드/제품/공지사항/견적문의 링크 + 로그아웃) */}
      <main className="flex-grow">{children}</main>
    </div>
  );
}
