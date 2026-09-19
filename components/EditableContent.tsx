"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
    >
      {pending ? "저장 중..." : "저장하기"}
    </button>
  );
}

export default function EditableContent({ 
  initialContent, 
  isAdmin, 
  action,
  dayId
}: { 
  initialContent: string;
  isAdmin: boolean;
  action: (formData: FormData) => Promise<void>;
  dayId?: number;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = async (formData: FormData) => {
    await action(formData);
    setIsEditing(false);
    setContent(formData.get("content")?.toString() || "");
  };

  if (!isEditing) {
    return (
      <div>
        <div className="whitespace-pre-wrap leading-relaxed text-gray-700 min-h-[100px]">
          {content}
        </div>
        {isAdmin && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 border"
            >
              내용 수정하기
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4">
      {dayId && <input type="hidden" name="dayId" value={dayId} />}
      <textarea
        name="content"
        defaultValue={content}
        rows={15}
        className="w-full p-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="내용을 입력하세요..."
        required
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 border"
        >
          취소
        </button>
        <SubmitButton />
      </div>
    </form>
  );
}
