export function GET(
  request: Request,
  { params }: { params: { userId: string } },
) {
  return Response.json({ userId: params.userId });
}
