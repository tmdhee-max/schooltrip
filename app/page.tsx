export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              환영합니다! 항도여중 수학여행
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              선생님들과 학생들을 위한 안전하고 즐거운 수학여행 가이드. 
              기능들을 자유롭게 추가해 보세요.
            </p>
          </div>
          <div className="space-x-4">
            <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50">
              시작하기 (기능 준비중)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
