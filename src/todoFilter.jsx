import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TodoFilter({ filterTodo, btns }) {
  console.log('TodoFilter render');
  return (
    <div className="w-full flex">
      {btns.map(x => (
        <button
          key={x}
          type="button"
          className="btn rounded-none flex-1 bg-blue-400"
          onClick={() => filterTodo(x)}
        >
          {x}
        </button>
      ))}
    </div>
  );
}

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
  btns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(TodoFilter);
