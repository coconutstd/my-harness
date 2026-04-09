---
id: "task-007"
type: "tasks"
title: "한글 IME 입력 시 투두 중복 생성 수정"
description: "한글 조합 입력에서 Enter 처리 충돌로 투두가 2개 생성되는 문제를 수정"
tags: ["frontend", "bugfix", "ime", "todo"]
priority: "high"
status: "done"
updated: "2026-04-09"
---

# TASK-007: 한글 IME 입력 시 투두 중복 생성 수정

## 목표

한글 IME 조합 입력 중 `Enter`를 눌렀을 때 투두가 2개 생성되는 문제를 제거한다.

## 요구사항

- 영어 입력 동작은 유지
- 한글 IME 조합 중 `Enter`는 투두 생성으로 처리하지 않음
- 조합 완료 뒤 `Enter` 입력에서는 투두가 1개만 생성
- 회귀 방지 테스트 추가

## 구현 계획

- 브랜치: `fix/task-007-korean-ime`
- 수정 파일: `src/components/TodoApp.tsx`, `tests/e2e/todo-app.spec.ts`
- IME 조합 상태와 `Enter` 처리 충돌 방지

## 완료 기준

- [x] 한글 입력 시 중복 생성 재현 경로 차단
- [x] 영어 입력 시 기존 동작 유지
- [x] IME 관련 E2E 회귀 테스트 추가
- [x] `npm run validate:ui` 통과
- [x] `npm run harness:check` 통과
