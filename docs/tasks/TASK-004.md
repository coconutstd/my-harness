---
id: "task-004"
type: "task"
title: "브랜치 상태를 Git 직접 조회 기반으로 전환"
status: "done"
priority: "high"
tags: ["harness", "branching", "git", "script"]
depends_on: []
source: "사용자 요청 2026-04-09"
created: "2026-04-09"
updated: "2026-04-09"
---

## 목표

브랜치 상태를 저장소 문서에 수동으로 기록하는 대신 Git 직접 조회 기반으로 운영하도록 하네스를 전환한다.

## 상세 요구사항

- `active-branches.md` 같은 실시간 상태 문서를 운영 핵심에서 제외한다
- `harness:check`가 Git 직접 조회만으로 핵심 정합성을 검사하도록 바꾼다
- 필요 시 현재 브랜치 상태를 터미널에서 확인할 수 있는 `harness:sync` 명령을 추가한다
- 관련 하네스 문서와 인덱스를 새 운영 모델에 맞게 갱신한다

## 수락 기준 (Acceptance Criteria)

1. 브랜치 상태 정합성 검사가 `docs/branching/active-branches.md` 없이 동작한다
2. `npm run harness:sync`로 현재 브랜치/병합된 브랜치를 즉시 확인할 수 있다
3. `CLAUDE.md`와 `docs/branching/strategy.md`가 Git 직접 조회 기반 운영을 설명한다
4. `docs/INDEX.md`에서 실시간 브랜치 상태 문서를 필수 컨텍스트로 보지 않는다

## 완료 기준

- [x] `docs/branching/active-branches.md` 제거
- [x] `scripts/harness-sync.mjs` 및 `package.json` 명령 추가
- [x] `scripts/harness-check.mjs`를 Git 직접 조회 기준으로 수정
- [x] `CLAUDE.md`, `docs/branching/strategy.md`, `docs/INDEX.md` 갱신
- [x] `npm run harness:sync`, `npm run harness:check`, `npm run lint` 통과
