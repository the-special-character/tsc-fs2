import React, {
  createContext,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState('all');

  const todoTextRef = useRef();

  const addTodo = useCallback(event => {
    event.preventDefault();
    const text = todoTextRef.current.value;
    setTodoList(value => [
      ...value,
      {
        id: new Date().valueOf(),
        text,
        isDone: false,
      },
    ]);
    todoTextRef.current.value = '';
  }, []);

  const toggleComplete = useCallback(item => {
    setTodoList(value => {
      const index = value.findIndex(x => x.id === item.id);
      return [
        ...value.slice(0, index),
        { ...item, isDone: !item.isDone },
        ...value.slice(index + 1),
      ];
    });
  }, []);

  const deleteTodo = useCallback(item => {
    setTodoList(value => {
      const index = value.findIndex(x => x.id === item.id);
      return [
        ...value.slice(0, index),
        ...value.slice(index + 1),
      ];
    });
  }, []);

  const filterTodo = useCallback(ft => {
    setFilterType(ft);
  }, []);

  const value = useMemo(
    () => ({
      todoList,
      filterType,
      addTodo,
      toggleComplete,
      deleteTodo,
      filterTodo,
      todoTextRef,
    }),
    [todoList, filterType],
  );

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
