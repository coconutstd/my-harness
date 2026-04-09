---
id: "task-002"
type: "task"
title: "AGENTS.md 추가 및 context/ → docs/ 리네임"
status: "done"
priority: "medium"
tags: ["docs", "agents", "rename", "harness"]
depends_on: []
source: "사용자 요청 2026-04-09"
created: "2026-04-09"
updated: "2026-04-09"
---

## 목표

에이전트 진입 문서인 `AGENTS.md`를 추가하고, Harness 컨텍스트 디렉터리를 `context/`에서 `docs/`로 일관되게 정리한 뒤 관련 하네스 문서까지 완료 상태로 맞춘다.

## 상세 요구사항

- 루트에 `AGENTS.md`를 추가한다
- 기존 Harness 컨텍스트 경로를 `docs/` 기준으로 정리한다
- 관련 브랜치/진행 상태/인덱스 문서가 실제 상태와 어긋나지 않도록 동기화한다

## 수락 기준 (Acceptance Criteria)

1. `AGENTS.md`가 루트에 존재한다
2. Harness 컨텍스트 파일 경로가 `docs/` 기준으로 정리된다
3. 브랜치와 태스크 문서가 `TASK-002` 기준으로 연결된다
4. `INDEX.md`와 `progress/current.md`에 완료 이력이 반영된다

## 완료 기준

- [x] `AGENTS.md` 추가
- [x] `context/` → `docs/` 리네임 반영
- [x] `active-branches.md`에 `docs/task-002-agents-md-and-rename` 브랜치 반영
- [x] `docs/tasks/_index.md`에 `TASK-002` 반영
- [x] `docs/progress/current.md` 및 `docs/INDEX.md` 동기화
