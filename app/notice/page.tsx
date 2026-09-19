import sql from "@/lib/db";
import { isAdmin } from "@/lib/auth";
import EditableContent from "@/components/EditableContent";
import { updateNotice } from "./actions";

export const dynamic = "force-dynamic";

export default async function NoticePage() {
  let notice: any = null;
  try {
    const result = await sql`SELECT content FROM notices WHERE id = 1`;
    notice = result[0];
  } catch (e) {
    console.error("DB 로드 실패:", e);
  }

  const isUserAdmin = isAdmin();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 min-h-[400px]">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">공지사항</h2>
      <EditableContent 
        initialContent={notice?.content || "공지사항이 없습니다."}
        isAdmin={isUserAdmin}
        action={updateNotice}
      />
    </div>
  );
}
