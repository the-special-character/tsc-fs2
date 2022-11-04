import React, { createRef, PureComponent } from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

const btns = ['all', 'pending', 'completed'];

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filterType: 'all',
    };
    this.todoTextRef = createRef();
  }

  addTodo = event => {
    event.preventDefault();
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.todoTextRef.current.value,
            isDone: false,
          },
        ],
      }),
      () => {
        this.todoTextRef.current.value = '';
      },
    );
  };

  toggleComplete = item => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(
        x => x.id === item.id,
      );
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = item => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(
        x => x.id === item.id,
      );
      return {
        todoList: [
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  filterTodo = filterType => {
    this.setState({ filterType });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl font-bold my-8">
          Todo App
        </h1>
        <TodoForm
          addTodo={this.addTodo}
          ref={this.todoTextRef}
        />
        <div className="w-full flex-1">
          {todoList.length > 0 && (
            <TodoList
              {...this.state}
              deleteTodo={this.deleteTodo}
              toggleComplete={this.toggleComplete}
            />
          )}
        </div>
        <TodoFilter
          filterTodo={this.filterTodo}
          btns={btns}
        />
      </div>
    );
  }
}
