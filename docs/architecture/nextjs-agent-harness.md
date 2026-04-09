---
id: "architecture-nextjs-agent-harness"
type: "architecture"
title: "Next.js 에이전트 하네스"
description: "이 저장소에서 Next.js 프론트엔드 및 QA 에이전트를 어떻게 정의하고 사용할지 설명한다."
tags: ["architecture", "agent", "nextjs", "harness"]
priority: "high"
updated: "2026-04-09"
---

# Next.js 에이전트 하네스

## 목적

이 저장소에서 Next.js 작업을 수행할 때 범용 에이전트 대신, 현재 스택과 Context Harness 규칙을 먼저 따르는 전용 구현/검증 에이전트를 사용한다.

## 에이전트 파일

- `.agents/frontend-dev.md`
- `.agents/qa-engineer.md`

## 에이전트가 따라야 할 규칙

1. `AGENTS.md`와 `CLAUDE.md`를 먼저 읽는다.
2. `docs/INDEX.md`를 시작점으로 필요한 문서만 선택한다.
3. 현재 저장소 구조를 우선 따르고, 없는 구조를 임의로 도입하지 않는다.
4. Next.js 15, React 19, TypeScript, Tailwind CSS 4, App Router를 기본 전제로 삼는다.
5. 작업 완료 시 태스크, progress, INDEX, `npm run validate:ui`, `npm run harness:check`까지 하네스 루틴을 따라간다.

## 역할 분리

### Frontend Developer

- 페이지, 레이아웃, 컴포넌트 구현
- App Router 구조와 클라이언트/서버 컴포넌트 경계 설계
- 접근성, 반응형, 상태 처리 개선

### QA Engineer

- 태스크 완료 기준의 검증 항목 보강
- `lint`, `build`, `validate:ui`, `harness:check` 실행 여부 확인
- Playwright 기반 smoke test를 유지하고, 필요 시 E2E 및 시각 검증으로 확장
- 브라우저 제어 도구가 있는 환경에서는 실제 페이지를 열어 desktop/mobile 기준 최종 확인
- 구현 완료 후 `done` 처리 전 마지막 품질 게이트 담당

## 설계 원칙

- 에이전트 문서는 이 저장소의 실제 상태와 일치해야 한다.
- 저장소에 없는 백엔드, 상태관리, 패키지 매니저 전제를 넣지 않는다.
- 저장소에 아직 없는 테스트 도구는 "향후 확장"으로만 다루고, 현재 실행 가능한 검증 게이트를 우선 사용한다.
- 브라우저 직접 확인은 가능할 때만 수행하는 선택 절차로 두되, 자동 검증을 대체하지 않는다.
- 새 라이브러리나 구조는 작업 요구가 생겼을 때만 도입한다.
- 기존 코드 구조를 존중하고 점진적으로 확장한다.

## 사용 시점

- 새 페이지, 레이아웃, 컴포넌트 구현
- App Router 라우트 추가 또는 수정
- 반응형 UI, 접근성, 프론트엔드 구조 리뷰
- API 연동과 로딩/에러 상태 처리
- 완료 전 UI/기능 검증과 회귀 점검
- 브라우저 직접 제어가 가능한 환경에서의 최종 화면 점검

## 비사용 시점

- 저장소 전반의 문서 하네스만 수정하는 작업
- Git 브랜치, worklog, task 상태만 다루는 작업
- 프론트엔드와 무관한 스크립트 작업
