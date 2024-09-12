import { memo } from 'react';
import useFetch from '../Hook/useFetch';

// render todos logic
let TodosRender = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/todos');
  //const dataCount = data.length !== null ? data.length : 0;

  console.log('the data :' + data);
  return (
    <>
      <ul className='text-start w-1/2 mx-auto'>
        <li> total todo list:{data.length} </li>
        {data &&
          data.map((item) => {
            return (
              <li key={item.id} className='border  bg-slate-50 mb-2 shadow'>
                <b className='bg-red-400 p-1'>{item.id} </b>
                <span className='p-2'> {item.title}</span>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default memo(TodosRender);
