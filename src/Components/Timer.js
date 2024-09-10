import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SharedStateCp from './SharedStateCp';
// useEffect
function Timer() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1> I've rendered {count} times!</h1>

      <hr />
      <SharedStateCp />
    </>
  );
}

export default Timer;
