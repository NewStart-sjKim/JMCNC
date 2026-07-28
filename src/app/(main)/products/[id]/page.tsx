export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // TODO: Firebase Admin SDK로 단일 product 조회 (Server Component)
  return <div>Product {id}</div>;
}
