import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TodoListItem({
  item,
  toggleComplete,
  deleteTodo,
}) {
  console.log('todo list item render');
  return (
    <div className="flex m-8 items-center">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => toggleComplete(item)}
      />
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
      <button
        type="button"
        className="btn"
        onClick={() => deleteTodo(item)}
      >
        Delete
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoListItem);
