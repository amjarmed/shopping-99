import { useState, useEffect, useRef } from 'react';

function TrackAppRender() {
  //add local state to a component
  const [inputValue, setInputValue] = useState('');

  // track application renders
  const count = useRef(0);
  // Accessing DOM Elements
  const inputEl = useRef();
  //Tracking State Changes
  const prevState = useRef('');

  // allow to run side effect like ( fetching data, modifying DOM, timers....)
  useEffect(() => {
    count.current = count.current + 1;
  });
  // side effect for state change
  useEffect(() => {
    prevState.current = inputValue;
  }, [inputValue]);

  //set focus
  let setFocus = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputEl}
      />
      <button onClick={setFocus}>Focus Input</button>

      <h1>Render Count: {count.current}</h1>
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {prevState.current}</h2>
    </>
  );
}

export default TrackAppRender;
