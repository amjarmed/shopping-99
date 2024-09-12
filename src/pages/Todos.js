import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import TodosData from './TodosData';

let Todos = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);
  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <TodosData todos={todos} />
      <br />
      <div>
        Count: {count}
        <button
          onClick={increment}
          className='bg-blue-500 hover:bg-blue-700 focus:outline-none active:bg-blue-800'
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Todos;
