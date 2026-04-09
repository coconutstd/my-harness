---
id: "tasks-006"
type: "tasks"
title: "TASK-006: 투두앱 구현"
description: "홈 페이지를 투두앱으로 교체, /about 페이지 삭제, localStorage 지속성 포함"
tags: ["frontend", "todo", "nextjs"]
priority: "high"
status: "in-progress"
updated: "2026-04-09"
---

# TASK-006: 투두앱 구현

## 목표

홈 페이지(`/`)를 투두앱으로 교체하고, 테스트용 `/about` 페이지를 삭제한다.

## 요구사항

- `/about` 페이지 삭제
- 홈 페이지(`/`)를 투두앱으로 교체
- 할 일 추가 (텍스트 입력 + 추가 버튼, Enter 키 지원)
- 완료 체크 (체크박스로 토글, 취소선 표시)
- 삭제 버튼
- localStorage 지속성
- Tailwind CSS 4 스타일링 (다크/라이트 테마 지원)

## 구현 계획

- 브랜치: `feat/task-006-todo-app`
- 신규 파일: `src/components/TodoApp.tsx` (Client Component)
- 수정 파일: `src/app/page.tsx`, `src/app/layout.tsx`
- 삭제: `src/app/about/` 디렉토리

## 완료 기준

- [ ] `/about` 디렉토리 삭제
- [ ] `src/components/TodoApp.tsx` 구현
- [ ] `src/app/page.tsx` 교체
- [ ] `src/app/layout.tsx` 메타데이터 업데이트
- [ ] localStorage 저장/불러오기 동작
- [ ] 할 일 추가/완료토글/삭제 동작
- [ ] Enter 키로 추가 동작
- [ ] `npm run lint` 통과
- [ ] `npm run harness:check` 통과
