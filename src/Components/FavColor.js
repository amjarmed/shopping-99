import React, { useState } from 'react';

let FavColor = () => {
  let [color, setColor] = useState('red');
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });
  let updateColor = (previousState) => {
    setCar((previousState) => {
      return { ...previousState, color: color };
    });
  };
  return (
    <>
      <p>
        my car info : brand {car.brand} - model {car.model} - year {car.year}-
        color {car.color}
      </p>
      <hr />
      <h1 style={{ color: color }}>My favorite color is {color}!</h1>
      <button type='button' onClick={updateColor}>
        Car color
      </button>

      <button type='button' onClick={() => setColor('blue')}>
        Blue
      </button>
      <button type='button' onClick={() => setColor('red')}>
        Red
      </button>
      <button type='button' onClick={() => setColor('pink')}>
        Pink
      </button>
      <button type='button' onClick={() => setColor('green')}>
        Green
      </button>
    </>
  );
};

export default FavColor;
