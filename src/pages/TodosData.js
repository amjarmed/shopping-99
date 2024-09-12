import { useReducer, useState } from 'react';

let initialState = [];

let reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'remove':
      return state.filter((todo) => todo.id !== action.payload);
    case 'reset':
      return [];

    default:
      throw new Error();
  }
};

// let initializer = () => {};
function Todos() {
  let [todos, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    dispatch({ type: 'add', payload: todo });
    setTodo('');
  };
  return (
    <>
      <div className='p-4 sm:p-5 md:p-8 lg:p-16 border'>
        <h2 className='bg-blue-100 p-5'> Learning hooks</h2>
        <div>
          <b>new todo is: </b>
          {todo} <br />
          <i>total todos: {todos.length}</i>
          <ul className='grid grid-cols-1 gap-4'>
            {console.log(todos)}
            {todos.map((tod) => (
              <li
                key={tod.id}
                className='bg-gray-300 my-2 grid grid-cols-12  justify-center items-center p-0 m-0'
              >
                <p
                  className='pl-4 p-0 m-0 col-span-10 text-start '
                  style={{ lineHeight: 2.5 }}
                >
                  {tod.text}{' '}
                  <i className='text-sm'>
                    ( created: {Date(tod.id).toString().toLocaleLowerCase()})
                  </i>
                </p>

                <button
                  type='button '
                  className='h-auto w-full p-2 bg-red-700 text-white   m-0 col-span-2'
                  onClick={() => dispatch({ type: 'remove', payload: tod.id })}
                >
                  remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <input
          type='text'
          value={todo}
          id='todo'
          className='bg-slate-300 my-4 border rounded shadow-sm w-75 mx-auto block'
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type='button '
          onClick={addTodo}
          className='h-auto w-1/4 mx-auto rounded p-2 block bg-red-700 text-white'
        >
          add
        </button>
      </div>
    </>
  );
}

export default Todos;
