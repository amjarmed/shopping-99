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

- **useState** :

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
```