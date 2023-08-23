import { Todo } from '@/types';
import fs from 'fs';
import path from 'path';

export const find = async (id: number): Promise<Todo | null> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(process.cwd(), './db.json'), 'utf8', (err, fileResults) => {
      if (err) {
        reject(err);
      }
      if (!fileResults) {
        resolve(null);
      }
      const allData = JSON.parse(fileResults);
      const todos = allData.todos;
      resolve(todos.find((todo: any) => todo.id === id));
    });
  });
}

export const findAll = async (): Promise<Todo[]> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(process.cwd(), './db.json'), 'utf8', (err, fileResults) => {
      if (err) {
        reject(err);
      }
      if (!fileResults) {
        resolve([]);
      }
      resolve(JSON.parse(fileResults).todos);
    });
  });
}

export const create = async (todo: Todo): Promise<Todo> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(process.cwd(), './db.json'), 'utf8', (err, fileResults) => {
      if (err) {
        reject(err);
      }
      let allData = {} as any;
      let todos = [];
      if (fileResults) {
        allData = JSON.parse(fileResults);
        todos = allData.todos;
      }
      const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
      todo.id = id;
      todo.completed = false;
      todos.push(todo);
      allData.todos = todos;
      fs.writeFile(path.join(process.cwd(), './db.json'), JSON.stringify(allData), (err) => {
        if (err) {
          reject(err);
        }
        resolve(todo);
      });
    });
  });
}

export const update = async (todo: Todo): Promise<Todo | null> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(process.cwd(), './db.json'), 'utf8', (err, fileResults) => {
      if (err) {
        reject(err);
      }
      if (!fileResults) {
        resolve(null);
      }
      const allData = JSON.parse(fileResults);
      const todos = allData.todos;
      const index = todos.findIndex((e: any) => e.id === todo.id);
      todos[index] = todo;
      allData.todos = todos;
      fs.writeFile(path.join(process.cwd(), './db.json'), JSON.stringify(allData), (err) => {
        if (err) {
          reject(err);
        }
        resolve(todo);
      });
    });
  });
}

export const remove = async (id: number): Promise<number | null> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(process.cwd(), './db.json'), 'utf8', (err, fileResults) => {
      if (err) {
        reject(err);
      }
      if (!fileResults) {
        resolve(null);
      }
      const allData = JSON.parse(fileResults);
      const todos = allData.todos;
      const index = todos.findIndex((e: any) => e.id === id);
      todos.splice(index, 1);
      allData.todos = todos;
      fs.writeFile(path.join(process.cwd(), './db.json'), JSON.stringify(allData), (err) => {
        if (err) {
          reject(err);
        }
        resolve(id);
      });
    });
  });
}
