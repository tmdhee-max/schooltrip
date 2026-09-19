import sql from "@/lib/db";
import { isAdmin } from "@/lib/auth";
import EditableContent from "@/components/EditableContent";
import { updateSchedule } from "./actions";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const DAY_TITLES: Record<string, string> = {
  "1": "첫째날 일정",
  "2": "둘째날 일정",
  "3": "셋째날 일정",
};

export default async function DayPage({ params }: { params: { id: string } }) {
  const dayId = params.id;
  
  if (!DAY_TITLES[dayId]) {
    notFound();
  }

  let schedule: any = null;
  try {
    const parsedId = parseInt(dayId, 10);
    const result = await sql`SELECT content FROM schedules WHERE day_id = ${parsedId}`;
    schedule = result[0];
  } catch (e) {
    console.error("DB 로드 실패:", e);
  }

  const isUserAdmin = isAdmin();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 min-h-[400px]">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">{DAY_TITLES[dayId]}</h2>
      <EditableContent 
        initialContent={schedule?.content || `${DAY_TITLES[dayId]} 내용이 없습니다.`}
        isAdmin={isUserAdmin}
        action={updateSchedule}
        dayId={parseInt(dayId, 10)}
      />
    </div>
  );
}
