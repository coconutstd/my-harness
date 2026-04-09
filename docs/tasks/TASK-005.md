---
id: "task-005"
type: "task"
title: "Next.js 전용 프론트엔드 에이전트 하네스 정비"
status: "done"
priority: "high"
tags: ["agents", "nextjs", "harness", "docs"]
depends_on: []
source: "사용자 요청 2026-04-09"
created: "2026-04-09"
updated: "2026-04-09"
---

## 목표

이 저장소의 실제 스택과 하네스 규칙에 맞는 Next.js 전용 프론트엔드 에이전트를 정의하고, 관련 컨텍스트 문서를 함께 정비한다.

## 상세 요구사항

- 범용이거나 잘못된 전제를 가진 기존 에이전트 문안을 제거하거나 교체한다
- 이 저장소 기준의 Next.js 전용 에이전트 파일을 `.agents/`에 둔다
- 에이전트가 따라야 할 하네스 규칙을 문서로 남긴다
- 태스크, progress, INDEX를 이번 작업 상태에 맞게 동기화한다

## 수락 기준 (Acceptance Criteria)

1. `.agents/frontend-dev.md`가 현재 저장소 스택과 하네스 규칙을 반영한다
2. 저장소와 맞지 않는 기존 에이전트 전제는 제거된다
3. `docs/architecture/nextjs-agent-harness.md`가 추가되어 사용 기준을 설명한다
4. `docs/tasks/_index.md`, `docs/progress/current.md`, `docs/INDEX.md`가 이번 변경을 반영한다
5. `npm run harness:check`와 `npm run lint`가 통과한다

## 완료 기준

- [x] `.agents/frontend-dev.md` 추가
- [x] 기존 `.agents/nextjs-frontend-architect.md` 제거
- [x] `docs/architecture/nextjs-agent-harness.md` 추가
- [x] `docs/tasks/_index.md`, `docs/progress/current.md`, `docs/INDEX.md` 갱신
- [x] `npm run harness:check`, `npm run lint` 통과
