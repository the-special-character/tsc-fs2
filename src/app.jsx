import React from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';
// import TodoList from './todoList';

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold my-8">Todo App</h1>
      <TodoForm />
      <div className="w-full flex-1">
        <TodoList />
      </div>
      <TodoFilter />
    </div>
  );
}

export default App;
