import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS notices (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS schedules (
        id SERIAL PRIMARY KEY,
        day_id INTEGER UNIQUE NOT NULL,
        content TEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 초기 데이터 삽입 (없는 경우)
    await sql`
      INSERT INTO notices (content)
      SELECT '공지사항이 없습니다.'
      WHERE NOT EXISTS (SELECT 1 FROM notices);
    `;

    await sql`
      INSERT INTO schedules (day_id, content)
      SELECT 1, '첫째날 일정이 없습니다.'
      WHERE NOT EXISTS (SELECT 1 FROM schedules WHERE day_id = 1);
    `;
    
    await sql`
      INSERT INTO schedules (day_id, content)
      SELECT 2, '둘째날 일정이 없습니다.'
      WHERE NOT EXISTS (SELECT 1 FROM schedules WHERE day_id = 2);
    `;

    await sql`
      INSERT INTO schedules (day_id, content)
      SELECT 3, '셋째날 일정이 없습니다.'
      WHERE NOT EXISTS (SELECT 1 FROM schedules WHERE day_id = 3);
    `;

    return NextResponse.json({ message: "DB 테이블이 성공적으로 생성되었습니다!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "DB 생성 실패" }, { status: 500 });
  }
}
