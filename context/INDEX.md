# Context Index

> 에이전트 전용. 작업 시작 시 이 파일을 먼저 읽고, 필요한 컨텍스트만 선택해서 읽을 것.
> 컨텍스트 파일 변경 시 이 파일도 반드시 갱신할 것.

---

## 전체 컨텍스트 목록

| id | type | priority | description |
|----|------|----------|-------------|
| specs-project-overview | specs | high | harness-basic의 목적과 범위. 이 프로젝트가 무엇인지 처음 파악할 때 읽을 것. |
| architecture-tech-stack | architecture | high | 사용 중인 기술 스택, 파일 구조 컨벤션, 코딩 스타일. 새 코드 작성 전 참조. |
| decisions-adr-001-harness-pattern | decisions | medium | 에이전트 컨텍스트 관리 방식으로 파일 기반 Harness 패턴을 선택한 결정. |
| decisions-adr-002-harness-validation | decisions | high | Harness 패턴이 실전 개발 워크플로우에서 정상 동작함을 확인. TASK-001 검증 기반. |
| progress-current | progress | high | 현재 작업 중인 것, 완료된 것, 다음 할 일. 작업 재개 시 가장 먼저 읽을 것. 마지막 업데이트: TASK-001 완료. |
| worklog-2026-04-09 | worklog | high | 2026-04-09 작업 이력. 최근 커밋 맥락 파악 시 읽을 것. |
| branching-strategy | branching | high | GitHub Flow 브랜치 명명 규칙, PR 체크리스트, 병합 방식. 브랜치 작업 전 참조. |
| branching-active | branching | medium | 현재 열린 브랜치와 PR 목록. 브랜치 생성/병합 시 에이전트가 업데이트. |
| tasks-index | tasks | high | 전체 태스크 현황 요약. 작업 시작 시 ready 태스크 파악용. |

---

## 파일 경로 맵

| id | path |
|----|------|
| specs-project-overview | context/specs/project-overview.md |
| architecture-tech-stack | context/architecture/tech-stack.md |
| decisions-adr-001-harness-pattern | context/decisions/ADR-001-harness-pattern.md |
| progress-current | context/progress/current.md |
| worklog-2026-04-09 | context/worklog/2026-04-09.md |
| branching-strategy | context/branching/strategy.md |
| branching-active | context/branching/active-branches.md |
| tasks-index | context/tasks/_index.md |
| decisions-adr-002-harness-validation | context/decisions/ADR-002-harness-validation-success.md |

> 개별 태스크 파일: `context/tasks/TASK-NNN.md` (INDEX에 등록 불필요, _index.md로 관리)

---

## 갱신 이력

| 날짜 | 변경 내용 |
|------|----------|
| 2026-04-09 | 초기 생성 |
| 2026-04-09 | Worklog / Branching / Task Management 하네스 추가 |
| 2026-04-09 | TASK-001 완료 — progress/current.md 갱신, ADR-002 추가 |
