import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filterType: 'all',
    };
  }

  // onChangeText = event => {
  //   this.setState({ todoText: event.target.value });
  // };

  addTodo = event => {
    event.preventDefault();
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.todoTextRef.value,
            isDone: false,
          },
        ],
      }),
      () => {
        this.todoTextRef.value = '';
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
    console.log('render');
    const { todoList, filterType } = this.state;
    return (
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl font-bold my-8">
          Todo App
        </h1>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            ref={ref => {
              this.todoTextRef = ref;
            }}
          />
          <button
            type="submit"
            className="btn rounded-l-none"
          >
            Add Todo
          </button>
        </form>
        <div className="w-full flex-1">
          {todoList
            // .filter(item => {
            //   if (filterType === 'pending') {
            //     return item.isDone === false;
            //   }
            //   if (filterType === 'completed') {
            //     return item.isDone === true;
            //   }
            //   return true;
            // })
            .map(x => {
              if (
                (filterType === 'pending' &&
                  x.isDone === false) ||
                (filterType === 'completed' &&
                  x.isDone === true) ||
                filterType === 'all'
              ) {
                return (
                  <div
                    className="flex m-8 items-center"
                    key={x.id}
                  >
                    <input
                      type="checkbox"
                      checked={x.isDone}
                      onChange={() =>
                        this.toggleComplete(x)
                      }
                    />
                    <p
                      className="flex-1 px-4"
                      style={{
                        textDecoration: x.isDone
                          ? 'line-through'
                          : 'none',
                      }}
                    >
                      {x.text}
                    </p>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => this.deleteTodo(x)}
                    >
                      Delete
                    </button>
                  </div>
                );
              }
              return null;
            })}
        </div>
        <div className="w-full flex">
          <button
            type="button"
            className="btn rounded-none flex-1 bg-blue-400"
            onClick={() => this.filterTodo('all')}
          >
            All
          </button>
          <button
            type="button"
            className="btn rounded-none flex-1 bg-blue-400"
            onClick={() => this.filterTodo('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn rounded-none flex-1 bg-blue-400"
            onClick={() => this.filterTodo('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
