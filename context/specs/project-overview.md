---
id: "specs-project-overview"
type: "specs"
title: "프로젝트 개요"
description: "harness-basic의 목적과 범위. 이 프로젝트가 무엇인지 처음 파악할 때 읽을 것."
tags: ["overview", "purpose", "scope"]
priority: "high"
updated: "2026-04-09"
---

# 프로젝트 개요

## 목적

Context Harness 패턴을 검증하기 위한 테스트 프로젝트.

**Context Harness란**: AI 에이전트가 코드를 작성할 때 필요한 컨텍스트(스펙, 아키텍처, 결정 이력, 진행 상태)를 파일 시스템 기반으로 체계적으로 관리하는 구조.

## 이 레포가 하는 일

1. Next.js 앱을 실제 개발하면서 Harness 패턴을 실전 테스트
2. 에이전트가 `context/INDEX.md` → 필요한 파일만 읽고 → 작업하는 워크플로우를 검증
3. 패턴의 효과성을 측정하고 개선

## 범위

- **포함**: Next.js 15 앱 개발, Harness 패턴 실험
- **제외**: Harness 자체를 위한 별도 코드 (API, DB 등 불필요)

## 기술 스택

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS 4
- App Router
