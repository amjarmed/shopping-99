***this project made for recovering reactjs and nextjs , its not for production!***

# Important to keep in mind about reactjs and nextjs

## React Notes

### Hooks

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
Hooks allow us to "hook" into React features such as state and lifecycle methods.

``import React, { useState } from "react";
``

### Hook Rules

- There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional
- Note: Hooks will not work in React class components.

**Custom Hooks**
If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

----

### **useState**

 > useState Hook to keep track of the application state.State generally refers to application data or properties that need to be tracked.

``import { useState } from "react";``

- **Initialize useState**
We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

```javascript
 import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```

Notice that again, we are destructuring the returned values from useState.

The first value, color, is our current state.

The second value, setColor, is the function that is used to update our state.

Lastly, we set the initial state to an empty string: useState("")

**Read State / Update State**

We can now include our state anywhere in our component.

```js

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  
  return <>

  //read state 
    <h1>My favorite color is {color}!</h1>

    // update the state 
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```

**What Can State Hold**

The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.

```js
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

```

**Or**, we can just use one state and include an **object** instead!

```js
 const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
```

Since we are now tracking a single object, we need to reference that object and then the property of that object when rendering the component. (Ex: car.brand).

**Updating Objects and Arrays in State**

When state is updated, the entire state gets overwritten.

What if we only want to update the color of our car?

If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.

```

  let updateColor = (previousState) => {
    setCar((previousState) => {
      return { ...previousState, color: color };
    });
  };

   <button type='button' onClick={updateColor}>
        Car color
      </button>
      
```

Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.

We then return an object, spreading the previousState and overwriting only the color.

### useEffect

allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. accepts two arguments. The second argument is optional.

- useEffect(<function>, <dependency>)

```js

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
```

But wait!! It keeps counting even though it should only count once!

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

```js

// No dependency passed
useEffect(() => {
  //Runs on every render
});


// An empty array
useEffect(() => {
  //Runs only on the first render
}, []);

// Props or state values

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

// Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

```

If there are multiple dependencies, they should be included in the useEffect dependency array.

### Effect Cleanup

Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.

```js

//Clean up the timer at the end of the useEffect Hook:


  useEffect(() => {
    //To clear the timer, we had to name it.
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);
  
```

### useContext Hook

React's Context API and useContext hook work together to manage and share state across deeply nested components without needing to pass props manually at each level.

```js
import { useState, createContext , useContext} from 'react';
const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState('Jesse Hall');

  return (
    <>
    //use the Context Provider to wrap the tree of components that need the
      state Context.
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

```

- Context API: Used to share the user value across deeply nested components without needing to pass it as props down the tree.
- useContext Hook: Enables components to consume context values directly.
- Provider: Wraps components to make data (like user) available within the tree.
