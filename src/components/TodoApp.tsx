'use client';

import { useState, useEffect, useRef } from 'react';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const STORAGE_KEY = 'todo-items';

export default function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setTodos(JSON.parse(stored) as TodoItem[]);
      }
    } catch {
      // localStorage를 읽지 못하는 환경에서 조용히 무시
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch {
      // 저장 실패 시 조용히 무시
    }
  }, [todos, mounted]);

  function addTodo() {
    const text = inputValue.trim();
    if (!text) return;
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
    setInputValue('');
    inputRef.current?.focus();
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">할 일 목록</h1>
        {mounted && (
          <p className="text-sm text-foreground/50 mb-6">
            {todos.length === 0
              ? '할 일이 없습니다.'
              : `${todos.length}개 중 ${remaining}개 남음`}
          </p>
        )}

        {/* 입력 영역 */}
        <div className="flex gap-2 mb-6">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="새 할 일을 입력하세요"
            aria-label="새 할 일 입력"
            className="flex-1 px-4 py-2 rounded-lg border border-foreground/20 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/30 text-sm"
          />
          <button
            onClick={addTodo}
            disabled={!inputValue.trim()}
            aria-label="할 일 추가"
            className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium disabled:opacity-40 hover:opacity-80 transition-opacity"
          >
            추가
          </button>
        </div>

        {/* 할 일 목록 */}
        {mounted && (
          <ul className="flex flex-col gap-2" role="list" aria-label="할 일 목록">
            {todos.length === 0 && (
              <li className="text-center text-foreground/40 py-12 text-sm">
                추가 버튼 또는 Enter 키로 할 일을 추가하세요.
              </li>
            )}
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-foreground/10 bg-foreground/[0.03] group"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  aria-label={`완료 토글: ${todo.text}`}
                  className="w-4 h-4 accent-foreground cursor-pointer shrink-0"
                />
                <span
                  className={`flex-1 text-sm break-all ${
                    todo.completed
                      ? 'line-through text-foreground/40'
                      : 'text-foreground'
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  aria-label={`삭제: ${todo.text}`}
                  className="text-foreground/30 hover:text-foreground/70 transition-colors text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
