---
id: "task-001"
type: "task"
title: "신규 하네스 3종 실전 검증"
status: "ready"
priority: "high"
tags: ["harness", "validation", "worklog", "branching", "tasks"]
depends_on: []
source: "사용자 요청 2026-04-09"
created: "2026-04-09"
updated: "2026-04-09"
---

## 목표

Worklog / Branching / Task Management 3개 하네스가 실제 작업 흐름에서 잘 동작하는지 검증한다.

## 상세 요구사항

- Next.js 앱에 실제 기능(예: 간단한 페이지, 컴포넌트)을 추가하는 작업을 수행
- 작업 중 세 하네스를 모두 사용하여 실전 테스트
  - Worklog: 커밋 후 worklog 파일에 맥락 기록
  - Branching: strategy.md 규칙에 따라 feature 브랜치 생성 및 active-branches.md 업데이트
  - Tasks: 이 태스크 파일의 상태를 in-progress → done으로 변경

## 수락 기준 (Acceptance Criteria)

1. feature 브랜치를 올바른 명명 규칙으로 생성할 수 있다
2. 커밋 후 worklog에 맥락이 기록된다
3. 태스크 상태가 정상적으로 업데이트된다
4. 에이전트가 INDEX.md를 읽고 필요한 하네스 파일만 선택적으로 읽는다

## 완료 기준

- [ ] feature 브랜치 생성 및 작업
- [ ] 커밋 후 worklog 기록 확인
- [ ] active-branches.md 업데이트 확인
- [ ] 태스크 status: done 변경
- [ ] _index.md 갱신
