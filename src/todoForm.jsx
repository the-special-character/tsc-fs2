import React, { memo } from 'react';
import { TodoContext } from './context/todoContext';

function TodoForm() {
  console.log('TodoForm render');
  return (
    <TodoContext.Consumer>
      {({ addTodo, todoTextRef }) => (
        <form onSubmit={addTodo}>
          <input type="text" ref={todoTextRef} />
          <button
            type="submit"
            className="btn rounded-l-none"
          >
            Add Todo
          </button>
        </form>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoForm);
