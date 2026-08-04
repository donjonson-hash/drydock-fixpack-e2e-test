// No authentication check of any kind: any caller can delete any user.
// Planted so the deep review has an auth finding to report.
export async function DELETE(req: Request) {
  const { userId } = await req.json();
  const rows = await query(`delete from users where id = '${userId}'`);
  return Response.json({ deleted: rows });
}

declare function query(sql: string): Promise<number>;
