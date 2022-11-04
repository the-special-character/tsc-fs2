import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todoListItem';

function TodoList({
  todoList,
  filterType,
  toggleComplete,
  deleteTodo,
}) {
  console.log('todoList render');
  return (
    <>
      {todoList.map(x => {
        if (
          (filterType === 'pending' &&
            x.isDone === false) ||
          (filterType === 'completed' &&
            x.isDone === true) ||
          filterType === 'all'
        ) {
          return (
            <TodoListItem
              key={x.id}
              item={x}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          );
        }
        return null;
      })}
    </>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
  filterType: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
