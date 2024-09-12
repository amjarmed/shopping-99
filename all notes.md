

# Important to keep in mind about reactjs and nextjs

## React Notes

### Hooks

Hooks are functions that let you use state and other React features without writing a class component.

- Allow functional components to have access to React state, lifecycle methods, and side effects.
- Allow for reusable stateful logic between components via custom hooks.

### Why Use Hooks?

Simplify Components: Remove the need for class components; use functional components instead.
State and Lifecycle: Manage state and lifecycle methods directly within functional components.
Reusable Logic: Share stateful logic without altering the component hierarchy.
Clean Code: Improve readability and maintenance by avoiding complex patterns like higher-order components and render props.

### Hook Rules

- There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional
- Note: Hooks will not work in React class components.

**Custom Hooks**
If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

----

## - useState

 > useState Hook to keep track of the application state. State generally refers to application data or properties that need to be tracked.

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

```js

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

### useRef Hook

Create a mutable object that persists across renders (commonly used for DOM manipulation).

```js

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


```

### useReducer

useReducer is a React Hook used for managing complex state logic in functional components. It's an alternative to useState and is ideal when you have multiple state transitions, or the next state depends on the previous state, such as with counter logic, form handling, or to-do list management.

```js

import { useReducer } from 'react';

let reduce = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
};

let initialState = { count: 0 };

// let initializer = () => {};
function Counter() {
  let [state, dispatch] = useReducer(reduce, initialState);
  return (
    <>
    <h3>current state : {state.count}</h3>
    <button onClick={() => { dispatch({ type: 'increment' }); }}> + </button>
    <button onClick={() => { dispatch({ type: 'decrement' });}} > + </button>
    <button onClick={() => { dispatch({ type: 'reset' }); }} > reset </button>  
    </>
  );
}
export default Counter;

```

- th todo list example with reduce

 ```js
 
 
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

 ```

### useCallback Hook

The useCallback() hook in React is used to memoize a function, which prevents it from being recreated on every render. This is especially useful when passing callback functions to child components, as it helps avoid unnecessary re-renders and improves performance.

Key Points to Remember About useCallback()
Memoization of Functions: useCallback returns a memoized version of the callback function, which only changes if the dependencies change.
Performance Optimization: Helps in optimizing performance when you need to prevent a function from being re-created unless specific dependencies have changed.

One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

    The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

```js
// todos.js
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


// rendringlist.js
import { memo } from 'react';
import ReactDOM from 'react-dom/client';

// render todos logic
let TodosRender = ({ todos, addTodo }) => {
  console.log('child render');
  return (
    <div className='boder p-4'>
      <h2> my todos list :</h2>
      {todos.map((todo, index) => {
        return <p key={index}>add Todo {index}</p>;
      })}
      <button onClick={addTodo} className='btn shadow border'>
        Add Todo
      </button>
    </div>
  );
};

export default memo(TodosRender);


```

### useMemo Hook

The React useMemo Hook returns a memoized value.

Think of memoization as caching a value so that it does not need to be recalculated.

The useMemo Hook only runs when one of its dependencies update.

This can improve performance.

The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

```js
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

```

### React Custom Hooks

When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

Custom Hooks start with "use". Example: useFetch.

```js

import { useState, useEffect, useMemo } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};

export default useFetch;

```
