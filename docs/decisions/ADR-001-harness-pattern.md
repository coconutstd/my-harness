---
id: "decisions-adr-001-harness-pattern"
type: "decisions"
title: "ADR-001: Context Harness 패턴 채택"
description: "에이전트 컨텍스트 관리 방식으로 파일 기반 Harness 패턴을 선택한 결정."
tags: ["ADR", "harness", "context-management", "agent"]
priority: "medium"
updated: "2026-04-09"
---

# ADR-001: Context Harness 패턴 채택

## 상태

Accepted

## 배경

AI 에이전트가 코드를 작성하는 패러다임에서, 기존에 개발자 머릿속에 있던 컨텍스트(스펙, 아키텍처 결정, 진행 상태 등)를 체계적으로 관리할 방법이 필요했다.

## 결정

**파일 기반 Context Harness** 패턴을 사용한다.
- `docs/` 디렉토리에 Markdown 파일로 컨텍스트 저장
- `docs/INDEX.md`를 진입점으로 에이전트가 필요한 것만 선택해서 읽음
- 에이전트가 INDEX.md를 직접 유지 관리

## 대안

| 대안 | 탈락 이유 |
|------|----------|
| API 엔드포인트 + LLM 선별 | 에이전트가 이미 LLM이므로 중복. 불필요한 복잡도. |
| 벡터 DB + RAG | 인프라 오버헤드. 파일 기반으로 충분. |
| CLAUDE.md 하나에 모두 | 컨텍스트가 많아지면 매번 전부 로드해야 함. 비효율. |

## 결과

- **장점**: 단순함, 코드 불필요, 에이전트가 직접 필요한 것만 선택
- **트레이드오프**: 에이전트가 INDEX.md를 성실히 갱신해야 함 (규율 필요)
