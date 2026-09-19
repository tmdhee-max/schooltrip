import { cookies } from "next/headers";

export function isAdmin() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token");
  // 매우 단순한 비밀번호 인증 (실무에서는 JWT 사용 권장)
  return token?.value === "hangdo06_authenticated_secret";
}
