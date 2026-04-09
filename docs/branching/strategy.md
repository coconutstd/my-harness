---
id: "branching-strategy"
type: "branching"
title: "GitHub Flow 브랜치 전략"
description: "브랜치 명명 규칙, PR 체크리스트, 병합 방식. 브랜치 상태는 Git 직접 조회 기반으로 운영한다."
tags: ["github-flow", "branch", "PR", "merge"]
priority: "high"
updated: "2026-04-09"
---

## 전략 개요

**GitHub Flow** (Git Flow 아님)를 사용한다.

- `main`은 항상 배포 가능한 상태
- 모든 작업은 feature 브랜치에서 진행
- PR → 리뷰 → main 병합
- `develop`, `release` 브랜치 없음

---

## 브랜치 명명 규칙

| 접두사 | 사용 상황 | 예시 |
|--------|----------|------|
| `feature/` | 새 기능 | `feature/login-ui` |
| `fix/` | 버그 수정 | `fix/token-expiry` |
| `hotfix/` | 긴급 수정 (main 직접 브랜치) | `hotfix/security-patch` |
| `chore/` | 빌드, 설정, 의존성 변경 | `chore/update-deps` |
| `docs/` | 문서만 변경 | `docs/api-guide` |

**명명 규칙:**
- 소문자 + 하이픈 구분
- 간결하게 (3단어 이내)
- 태스크 ID 있으면 포함 가능: `feature/task-001-login-ui`

---

## 브랜치 생성 규칙

- 항상 최신 `main`에서 브랜치 생성
- `main`에 직접 커밋 금지
- 브랜치 하나 = 기능/수정 하나 (범위를 좁게 유지)
- 현재 브랜치 상태는 문서가 아니라 `git branch --show-current` 또는 `npm run harness:sync`로 확인

---

## PR 규칙

**PR 제목 형식:** `[타입] 간결한 설명`
- 예: `[feat] 로그인 UI 구현`, `[fix] 토큰 만료 처리 버그`

**PR 체크리스트:**
- [ ] 빌드 통과 (`npm run build`)
- [ ] 린트 통과 (`npm run lint`)
- [ ] 관련 태스크 ID 본문에 언급 (예: `Closes TASK-001`)
- [ ] 스크린샷 첨부 (UI 변경 시)

**병합 방식:** Squash merge (커밋 이력 정리)

---

## 병합 후 처리

1. feature 브랜치 삭제 (원격 + 로컬)
2. `git pull` 후 `npm run harness:sync`와 `npm run harness:check` 실행
3. 관련 태스크 status → `done`으로 변경
4. worklog에 병합 커밋 기록

## 브랜치 상태 조회

- 실시간 브랜치 상태는 저장소 문서에 커밋하지 않는다
- 현재 브랜치: `git branch --show-current`
- `main`에 병합된 브랜치: `git branch --merged main`
- 하네스 요약 출력: `npm run harness:sync`
