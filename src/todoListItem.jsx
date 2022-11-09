import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TodoContext } from './context/todoContext';

function TodoListItem({ item }) {
  console.log('todo list item render');
  return (
    <div className="flex m-8 items-center">
      <TodoContext.Consumer>
        {({ toggleComplete }) => (
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => toggleComplete(item)}
          />
        )}
      </TodoContext.Consumer>
      <p
        className="flex-1 px-4"
        style={{
          textDecoration: item.isDone
            ? 'line-through'
            : 'none',
        }}
      >
        {item.text}
      </p>
      <TodoContext.Consumer>
        {({ deleteTodo }) => (
          <button
            type="button"
            className="btn"
            onClick={() => deleteTodo(item)}
          >
            Delete
          </button>
        )}
      </TodoContext.Consumer>
    </div>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(TodoListItem);
