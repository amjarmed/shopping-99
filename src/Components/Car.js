function Garage(props) {
  return <li>{props.brand}</li>;
}

function Car(props) {
  return (
    <>
      <h1>Who lives in my garage?:</h1>
      <ul>
        {props.cars.map((car) => (
          <Garage key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Car;
