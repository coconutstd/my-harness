---
id: "architecture-tech-stack"
type: "architecture"
title: "기술 스택 및 컨벤션"
description: "사용 중인 기술 스택, 파일 구조 컨벤션, 코딩 스타일. 새 코드 작성 전 참조."
tags: ["stack", "convention", "structure", "nextjs"]
priority: "high"
updated: "2026-04-09"
---

# 기술 스택 및 컨벤션

## 스택

| 항목 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js | 15.x |
| 런타임 | React | 19.x |
| 언어 | TypeScript | 5.x |
| 스타일 | Tailwind CSS | 4.x |
| 라우터 | App Router | - |

## 파일 구조

```
src/
  app/              ← 페이지 및 레이아웃 (App Router)
  components/       ← 공유 컴포넌트
  lib/              ← 유틸리티, 헬퍼
public/             ← 정적 파일
docs/               ← Harness 컨텍스트 파일
```

## 코딩 컨벤션

- 컴포넌트: PascalCase (`UserCard.tsx`)
- 유틸리티: camelCase (`formatDate.ts`)
- 경로 alias: `@/` → `src/`
- Server Component 우선, 필요 시에만 `'use client'`
- Tailwind 클래스 직접 사용 (별도 CSS 파일 최소화)

## Import 순서

1. React / Next.js
2. 외부 라이브러리
3. 내부 모듈 (`@/...`)
4. 타입
