---
id: "tasks-index"
type: "tasks"
title: "태스크 현황"
description: "전체 태스크 목록과 상태 요약. 작업 시작 시 ready 태스크 파악용."
tags: ["tasks", "backlog", "status"]
priority: "high"
updated: "2026-04-09"
---

## 태스크 현황 요약

| ID | 제목 | 상태 | 우선순위 | 의존성 |
|----|------|------|---------|--------|
| TASK-001 | 신규 하네스 3종 실전 검증 | done | high | — |
| TASK-002 | AGENTS.md 추가 및 context/ → docs/ 리네임 | done | medium | — |
| TASK-003 | Harness 정합성 검증 스크립트 구현 | done | high | — |
| TASK-004 | 브랜치 상태를 Git 직접 조회 기반으로 전환 | done | high | — |
| TASK-005 | Next.js 전용 프론트엔드 에이전트 하네스 정비 | done | high | — |

---

## 상태 범례

| 상태 | 의미 |
|------|------|
| `inbox` | 사용자 입력 접수, 아직 구조화 중 |
| `ready` | 구조화 완료, 작업 시작 가능 |
| `in-progress` | 현재 작업 중 (동시 1~2개 권장) |
| `done` | 완료 |
| `cancelled` | 취소됨 |

---

> 태스크 생성: `docs/tasks/TASK-NNN.md` 파일 생성 후 이 표에 추가  
> 상태 변경: 해당 TASK 파일 frontmatter 수정 + 이 표 갱신
