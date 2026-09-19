import { neon } from '@neondatabase/serverless';

// Vercel 환경 변수에 설정된 DATABASE_URL을 가져옵니다.
const sql = neon(process.env.DATABASE_URL!);

export default sql;
