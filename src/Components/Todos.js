import { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import TodoFrontEnd from './TodoLogic';

let Todos = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((e) => [...e, 'new todo.']);
  }, [todos]);

  return (
    <div className='p-5 bg-slate-300'>
      <TodoFrontEnd todos={todos} addTodo={addTodo} />
      <hr />
      Count: {count}
      <button
        onClick={increment}
        className='bg-blue-500 w-1/4 text-lg h-auto block p-3 rounded text-slate-50 hover:bg-blue-700 focus:outline-none active:bg-blue-800'
      >
        +
      </button>
    </div>
  );
};

export default Todos;
