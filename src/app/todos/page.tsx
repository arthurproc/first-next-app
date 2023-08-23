import TodoList from '@/app/components/todo-list';
import React from 'react';
import { findAll } from '../db/todos';

const getTodosApi = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'force-cache' });
  const data = await response.json();
  return data;
}

// os componentes no next13 são componentes do servidor por padrão
export default async function TodosPage() {
  // o servidor vai fazer essa operação
  const todos = await getTodosApi();

  return (
    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl mb-4">Coisas para fazer</h1>

      <TodoList todos={todos} />
    </div>
  );
}
