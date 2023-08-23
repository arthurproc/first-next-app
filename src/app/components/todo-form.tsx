'use client';

import { Todo } from "@/types";
import { useState } from "react";

function TodoForm({ onSuccess }: { onSuccess: (todo: Todo) => void }) {
  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ title: todoTitle }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const addedTodo = await response.json();
      setTodoTitle('');
      onSuccess(addedTodo);
    }
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Enter todo title"
        className="p-2 mr-2 rounded-md text-black"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm