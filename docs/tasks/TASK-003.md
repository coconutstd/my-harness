---
id: "task-003"
type: "task"
title: "Harness 정합성 검증 스크립트 구현"
status: "done"
priority: "high"
tags: ["harness", "validation", "script", "docs"]
depends_on: []
source: "사용자 요청 2026-04-09"
created: "2026-04-09"
updated: "2026-04-09"
---

## 목표

하네스 문서와 실제 Git 상태의 불일치를 빠르게 탐지할 수 있는 검증 스크립트를 구현한다.

## 상세 요구사항

- 반복적으로 실행 가능한 로컬 검증 스크립트를 추가한다
- 브랜치/태스크/진행 상태 문서의 핵심 정합성을 검사한다
- `package.json`에서 명령으로 실행할 수 있게 연결한다

## 수락 기준 (Acceptance Criteria)

1. `npm run harness:check`로 검증을 실행할 수 있다
2. 현재 브랜치와 `docs/branching/active-branches.md` 상태 불일치를 감지한다
3. `docs/tasks/_index.md`와 `docs/tasks/TASK-*.md` 간 상태 불일치를 감지한다
4. `docs/progress/current.md`와 `docs/INDEX.md`의 최신 상태 설명 누락을 감지한다

## 완료 기준

- [x] `scripts/harness-check.mjs` 추가
- [x] `package.json`에 `harness:check` 스크립트 연결
- [x] 현재 저장소 기준으로 검증 성공 또는 의도된 실패 메시지 확인
- [x] 관련 문서(`progress`, `tasks`, `branching`, `INDEX`) 완료 상태 동기화
