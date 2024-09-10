import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import TrackAppRender from './TrackAppRender';
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
      <TrackAppRender />
    </>
  );
}

export default Timer;
