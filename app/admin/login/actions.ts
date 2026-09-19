"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password");

  if (password === "hangdo06") {
    cookies().set("admin_token", "hangdo06_authenticated_secret", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1주일
      path: "/",
    });
    redirect("/notice");
  } else {
    return { error: "비밀번호가 일치하지 않습니다." };
  }
}

export async function logout() {
  cookies().delete("admin_token");
  redirect("/");
}
