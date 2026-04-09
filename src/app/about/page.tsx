export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">About harness-basic</h1>

          <div className="space-y-6 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">프로젝트 목표</h2>
              <p>
                harness-basic은 에이전트 작업 흐름을 체계화하기 위한 Context Harness 패턴을 구현하고 검증하는 프로젝트입니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">핵심 하네스</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Worklog Harness</span> — 커밋 단위 작업 맥락 기록</li>
                <li><span className="font-semibold">Branching Harness</span> — GitHub Flow 브랜치 전략 및 활성 브랜치 관리</li>
                <li><span className="font-semibold">Task Management Harness</span> — 태스크 상태 추적 및 의존성 관리</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">기술 스택</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Next.js 15.x (App Router)</li>
                <li>React 19.x</li>
                <li>TypeScript 5.x</li>
                <li>Tailwind CSS 4.x</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
