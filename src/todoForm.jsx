import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('TodoForm render');
  return (
    <form onSubmit={addTodo}>
      <input type="text" ref={ref} />
      <button type="submit" className="btn rounded-l-none">
        Add Todo
      </button>
    </form>
  );
});

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
