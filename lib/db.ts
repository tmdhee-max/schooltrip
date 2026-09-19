import { neon } from '@neondatabase/serverless';

// Vercel 환경 변수에 설정된 DATABASE_URL을 가져옵니다. 빌드 시 에러 방지를 위해 임시 값을 추가합니다.
const sql = neon(process.env.DATABASE_URL || "postgres://dummy:dummy@dummy.neon.tech/dummy");

export default sql;
