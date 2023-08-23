'use client';

import React, { useState } from 'react';
import TodoForm from './todo-form';
import { Todo } from '@/types';

export default function TodoList ({ todos }: { todos: Todo[] }) {
  const [currentTodos, setCurrentTodos] = useState(todos);

  const handleDelete = async (id: number) => {
    await fetch(`/api/todo/`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setCurrentTodos(currentTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <TodoForm
        onSuccess={(addedTodo) => setCurrentTodos([...currentTodos, addedTodo])}
      />
      <table className="min-w-full bg-white text-black rounded-md overflow-hidden mt-3 text-center table-fixed">
        <thead>
          <tr>
            <th className="p-2 border-r">ID</th>
            <th className="p-2 border-r">Título</th>
            <th className="p-2 border-r">Finalizada?</th>
            <th className="p-2 border-r">Ação</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.map(todo => (
            <tr key={todo.id} className="border-t">
              <td className="p-2 border-r">{todo.id || 'N/A'}</td>
              <td className="p-2 border-r">{todo.title}</td>
              <td className="p-2 border-r">{todo.completed ? 'Sim' : 'Não'}</td>
              <td className="p-2 border-r">
                <button
                  onClick={ () => handleDelete(todo.id) }
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
