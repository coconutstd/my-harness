# Agent Harness Guide

이 프로젝트는 **Context Harness**를 사용한다. 작업 전 반드시 이 지침을 따를 것.

---

## 작업 시작 시 필수 절차

1. `context/INDEX.md` 읽기 — 사용 가능한 컨텍스트 목록 파악
2. 태스크와 관련된 컨텍스트 파일만 선택해서 읽기
3. 컨텍스트를 바탕으로 작업 수행

> 모든 파일을 읽을 필요 없다. INDEX.md의 `description`을 보고 필요한 것만 읽어라.

---

## 컨텍스트 구조

```
context/
  INDEX.md          ← 항상 여기서 시작
  specs/            ← 프로젝트 스펙, 요구사항, 기획
  architecture/     ← 기술 스택, 시스템 설계, 코드 컨벤션
  decisions/        ← 의사결정 이력 (ADR 형식)
  progress/         ← 현재 진행 상태, 완료 목록, 블로커
```

---

## 컨텍스트 파일 작성/수정 규칙

### Frontmatter 스키마 (필수)

```yaml
---
id: "type-slug"                 # 고유값. 형식: {type}-{slug} (예: specs-auth-flow)
type: "specs"                   # specs | architecture | decisions | progress
title: "파일 제목"
description: "INDEX.md에 표시되는 한 줄 요약. 에이전트가 읽을지 판단하는 근거."
tags: ["tag1", "tag2"]
priority: "high"                # high | medium | low
updated: "YYYY-MM-DD"
---
```

### INDEX.md 갱신 (필수)

컨텍스트 파일을 **추가/수정/삭제**할 때마다 `context/INDEX.md`를 반드시 갱신한다.

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

## 진행 상태 업데이트

작업이 완료되거나 새로운 결정이 내려지면:
- 관련 `progress/` 파일 업데이트
- 새 결정은 `decisions/` 파일 생성
- INDEX.md 갱신
