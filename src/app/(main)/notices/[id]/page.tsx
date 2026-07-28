export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // TODO: Firebase Admin SDK로 단일 notice 조회 (Server Component)
  return <div>Notice {id}</div>;
}
