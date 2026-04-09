---
id: "architecture-nextjs-agent-harness"
type: "architecture"
title: "Next.js 에이전트 하네스"
description: "이 저장소에서 Next.js 프론트엔드 에이전트를 어떻게 정의하고 사용할지 설명한다."
tags: ["architecture", "agent", "nextjs", "harness"]
priority: "high"
updated: "2026-04-09"
---

# Next.js 에이전트 하네스

## 목적

이 저장소에서 Next.js 작업을 수행할 때 범용 프론트엔드 에이전트 대신, 현재 스택과 Context Harness 규칙을 먼저 따르는 전용 에이전트를 사용한다.

## 에이전트 파일

- `.agents/frontend-dev.md`

## 에이전트가 따라야 할 규칙

1. `AGENTS.md`와 `CLAUDE.md`를 먼저 읽는다.
2. `docs/INDEX.md`를 시작점으로 필요한 문서만 선택한다.
3. 현재 저장소 구조를 우선 따르고, 없는 구조를 임의로 도입하지 않는다.
4. Next.js 15, React 19, TypeScript, Tailwind CSS 4, App Router를 기본 전제로 삼는다.
5. 작업 완료 시 태스크, progress, INDEX, `npm run harness:check`까지 하네스 루틴을 따라간다.

## 설계 원칙

- 에이전트 문서는 이 저장소의 실제 상태와 일치해야 한다.
- 저장소에 없는 백엔드, 상태관리, 패키지 매니저 전제를 넣지 않는다.
- 새 라이브러리나 구조는 작업 요구가 생겼을 때만 도입한다.
- 기존 코드 구조를 존중하고 점진적으로 확장한다.

## 사용 시점

- 새 페이지, 레이아웃, 컴포넌트 구현
- App Router 라우트 추가 또는 수정
- 반응형 UI, 접근성, 프론트엔드 구조 리뷰
- API 연동과 로딩/에러 상태 처리

## 비사용 시점

- 저장소 전반의 문서 하네스만 수정하는 작업
- Git 브랜치, worklog, task 상태만 다루는 작업
- 프론트엔드와 무관한 스크립트 작업
