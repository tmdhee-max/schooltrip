"use server";

import sql from "@/lib/db";
import { isAdmin } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateNotice(formData: FormData) {
  if (!isAdmin()) {
    throw new Error("권한이 없습니다.");
  }

  const content = formData.get("content")?.toString() || "";

  // 가장 최신 공지사항 1개만 사용한다고 가정하고 업데이트 또는 삽입
  await sql`
    INSERT INTO notices (id, content) 
    VALUES (1, ${content}) 
    ON CONFLICT (id) 
    DO UPDATE SET content = EXCLUDED.content, updated_at = CURRENT_TIMESTAMP
  `;

  revalidatePath("/notice");
}
