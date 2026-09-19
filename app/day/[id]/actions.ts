"use server";

import sql from "@/lib/db";
import { isAdmin } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateSchedule(formData: FormData) {
  if (!isAdmin()) {
    throw new Error("권한이 없습니다.");
  }

  const content = formData.get("content")?.toString() || "";
  const dayId = parseInt(formData.get("dayId")?.toString() || "1", 10);

  await sql`
    INSERT INTO schedules (day_id, content) 
    VALUES (${dayId}, ${content}) 
    ON CONFLICT (day_id) 
    DO UPDATE SET content = EXCLUDED.content, updated_at = CURRENT_TIMESTAMP
  `;

  revalidatePath(`/day/${dayId}`);
}
