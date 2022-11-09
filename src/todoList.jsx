import React, { memo } from 'react';
import TodoListItem from './todoListItem';
import { TodoContext } from './context/todoContext';

function TodoList() {
  console.log('todoList render');
  return (
    <TodoContext.Consumer>
      {({ todoList, filterType }) =>
        todoList.map(x => {
          if (
            (filterType === 'pending' &&
              x.isDone === false) ||
            (filterType === 'completed' &&
              x.isDone === true) ||
            filterType === 'all'
          ) {
            return <TodoListItem key={x.id} item={x} />;
          }
          return null;
        })
      }
    </TodoContext.Consumer>
  );
}

export default memo(TodoList);
