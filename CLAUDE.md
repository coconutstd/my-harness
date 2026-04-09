# Agent Harness Guide

이 프로젝트는 **Context Harness**를 사용한다. 작업 전 반드시 이 지침을 따를 것.

---

## 작업 시작 시 필수 절차

1. `docs/INDEX.md` 읽기 — 사용 가능한 컨텍스트 목록 파악
2. 태스크와 관련된 컨텍스트 파일만 선택해서 읽기
3. 새 태스크라면 `docs/tasks/_index.md`와 기존 브랜치명을 함께 확인해 `TASK-NNN` 번호 중복이 없는지 검증
4. 컨텍스트를 바탕으로 작업 수행

> 모든 파일을 읽을 필요 없다. INDEX.md의 `description`을 보고 필요한 것만 읽어라.

---

## 컨텍스트 구조

```
docs/
  INDEX.md          ← 항상 여기서 시작
  specs/            ← 프로젝트 스펙, 요구사항, 기획
  architecture/     ← 기술 스택, 시스템 설계, 코드 컨벤션
  decisions/        ← 의사결정 이력 (ADR 형식)
  progress/         ← 현재 진행 상태, 완료 목록, 블로커
  worklog/          ← 커밋 단위 작업 맥락 기록
  branching/        ← GitHub Flow 브랜치 전략 및 활성 브랜치 목록
  tasks/            ← 태스크(일감) 관리
```

---

## 컨텍스트 파일 작성/수정 규칙

### Frontmatter 스키마 (필수)

```yaml
---
id: "type-slug"                 # 고유값. 형식: {type}-{slug} (예: specs-auth-flow)
type: "specs"                   # specs | architecture | decisions | progress | worklog | branching | tasks
title: "파일 제목"
description: "INDEX.md에 표시되는 한 줄 요약. 에이전트가 읽을지 판단하는 근거."
tags: ["tag1", "tag2"]
priority: "high"                # high | medium | low
updated: "YYYY-MM-DD"
---
```

### INDEX.md 갱신 (필수)

컨텍스트 파일을 **추가/수정/삭제**할 때마다 `docs/INDEX.md`를 반드시 갱신한다.

INDEX.md 항목 형식:
```
| id | type | priority | description |
```

---

## ADR (Architecture Decision Record) 형식

`decisions/` 파일은 다음 구조를 따른다:

```markdown
## 상태
Accepted | Deprecated | Superseded by ADR-XXX

## 배경
왜 이 결정이 필요했는가

## 결정
무엇을 선택했는가

## 대안
고려했지만 선택하지 않은 것들

## 결과
이 결정의 트레이드오프
```

---

## 작업 완료 후 필수 절차

**중요: 다음 3단계는 반드시 순서대로 모두 수행한다.**

### Phase 1: 즉시 수행 (커밋 직후)
- [ ] Worklog 기록: `docs/worklog/YYYY-MM-DD.md`에 커밋 섹션 추가

### Phase 2: 작업 마무리 (상태 변경)
- [ ] Task 상태 변경: `docs/tasks/TASK-NNN.md`의 `status: done` 처리
  - 완료 기준 체크리스트 항목들을 `[x]`로 표시
- [ ] Tasks Index 동기화: `docs/tasks/_index.md` 표 갱신 (status 변경 반영)
- [ ] Branching 정리: 병합 완료 시 `docs/branching/active-branches.md` 갱신
  - "현재 열린 브랜치" → "최근 병합된 브랜치"로 이동
- [ ] `npm run harness:check` 실행
  - branch/tasks/progress/INDEX 문서가 실제 상태와 일치하는지 검증

### Phase 3: 공식화 (문서화)
**다음 중 해당하는 것을 수행:**

**3-1. 새로운 결정이 내려진 경우**
- [ ] `docs/decisions/ADR-NNN-*.md` 파일 신규 생성 (ADR 형식 준수)
  - 상태, 배경, 결정, 대안, 결과 섹션 포함

**3-2. 진행 상태가 변경된 경우**
- [ ] `docs/progress/current.md` 업데이트
  - 완료한 항목을 "완료" 섹션으로 이동
  - "진행 중" 섹션에서 제거
  - "다음 할 일" 섹션 갱신 (필요시)
  - `updated_reason` 필드에 변경 사유 추가 (예: "TASK-001 완료")

**3-3. 컨텍스트 파일 갱신**
- [ ] `docs/INDEX.md` 업데이트
  - Phase 3에서 추가/수정된 파일을 INDEX 표에 반영
  - 갱신 이력(업데이트 날짜 + 변경 내용) 추가

### 체크리스트 사용법
```
다음 템플릿을 참고하여 각 단계를 완료하면서 체크:

## 작업 완료 체크리스트

**Phase 1: Worklog**
- [ ] docs/worklog/YYYY-MM-DD.md에 커밋 섹션 추가

**Phase 2: 상태 변경**
- [ ] docs/tasks/TASK-NNN.md → status: done
- [ ] docs/tasks/_index.md 동기화
- [ ] docs/branching/active-branches.md 정리 (필요시)
- [ ] npm run harness:check 실행

**Phase 3: 문서화**
- [ ] 새 결정 있으면 decisions/ 파일 생성
- [ ] progress/current.md 업데이트
- [ ] docs/INDEX.md 갱신

**최종 확인**
- [ ] 모든 변경사항 git에 커밋
- [ ] 원격 저장소 푸시
```

---

## Worklog 하네스

**원칙: 커밋이 없으면 worklog도 없다.** 폐기된 작업은 기록하지 않는다.

- 작업 중(커밋 전): worklog draft를 파일로 저장하지 않음 (세션 내에서만 유지)
- **커밋 직후**: `docs/worklog/YYYY-MM-DD.md` 파일에 해당 커밋 섹션 추가 (파일 없으면 생성)
- 세션 시작 시: `docs/worklog/` 최근 파일을 읽어 이전 맥락 파악
- INDEX.md에는 최근 5일치 worklog만 노출 (오래된 항목은 목록에서 제거)

**worklog 커밋 섹션 형식:**
```markdown
## {커밋해시 7자리} — {커밋 메시지}

### 맥락
왜 이렇게 구현했는지, 어떤 접근을 선택했는지

### 시도했다 포기한 것
- (없으면 생략)

### 다음 커밋에서 다룰 것
- (없으면 생략)
```

---

## Branching 하네스

- 브랜치 생성 전: `docs/branching/strategy.md` 읽고 명명 규칙 준수
- 브랜치 생성 후: `docs/branching/active-branches.md` 표에 행 추가
- 브랜치 병합/삭제 후: active-branches.md 업데이트 (열린 목록 → 최근 병합으로 이동)

---

## Task Management 하네스

- 사용자가 새 요구사항 제시 시: `docs/tasks/_index.md`와 기존 브랜치명을 먼저 확인한 뒤 `docs/tasks/TASK-NNN.md` 생성 (status: inbox → 구조화 후 ready)
- 작업 시작 시: `docs/tasks/_index.md` 읽어 ready 태스크 파악 → status: in-progress 로 변경
- 작업 완료 시: status: done, 완료 기준 체크, `_index.md` 갱신, `npm run harness:check` 통과 확인
- 태스크 파일은 INDEX.md에 개별 등록하지 않음 (`_index.md`로 통합 관리)

**태스크 상태 흐름:** `inbox` → `ready` → `in-progress` → `done` (또는 `cancelled`)

---

## Harness Check

- 하네스 정합성 검사는 `npm run harness:check`로 수행
- 최소 검증 범위:
  - 현재 브랜치와 `docs/branching/active-branches.md` 일치 여부
  - `docs/tasks/_index.md`와 `docs/tasks/TASK-*.md` 상태/제목/우선순위 일치 여부
  - `docs/progress/current.md`의 최신 상태와 `docs/INDEX.md`의 progress 설명 일치 여부
- 태스크 완료 전에는 이 검사가 반드시 통과해야 한다
