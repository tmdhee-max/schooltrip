"use client";

import { useState } from "react";
import { login } from "./actions";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const res = await login(formData);
    if (res?.error) {
      setError(res.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold text-center mb-6">관리자 로그인</h2>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">비밀번호</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
