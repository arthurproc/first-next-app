import TodoList from '@/app/components/todo-list';
import React from 'react';
import { findAll } from '../db/todos';

export default async function TodosPage() {
  const todos = await findAll();

  return (
    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl mb-4">Coisas para fazer</h1>

      <TodoList todos={todos} />
    </div>
  );
}
