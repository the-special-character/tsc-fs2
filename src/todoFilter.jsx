import React, { memo } from 'react';
import { btns } from './utils';
import { TodoContext } from './context/todoContext';

function TodoFilter() {
  return (
    <div className="w-full flex">
      {btns.map(x => (
        <TodoContext.Consumer key={x}>
          {({ filterTodo }) => (
            <button
              type="button"
              className="btn rounded-none flex-1 bg-blue-400"
              onClick={() => filterTodo(x)}
            >
              {x}
            </button>
          )}
        </TodoContext.Consumer>
      ))}
    </div>
  );
}

export default memo(TodoFilter);
