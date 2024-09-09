class Car {
  constructor(name) {
    this.name = name;
  }

  present() {
    return ` i have this ${this.name}`;
  }
}

const mycar = Car('ford');
console.log(mycar.present());

// Inheritance
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ', its a ' + this.model;
  }
}
const mycar2 = Model('ford', 'mustang');
console.log(mycar.show());

//Arrow Functions == shorter function syntax
hello = function () {
  return 'Hello World!';
};

helloShort = () => {
  return 'Hello World!';
};

hello = () => 'Hello World!';
hello = (val) => 'Hello ' + val;
hello = (val) => 'Hello ' + val;
//In short, with arrow functions there is no binding of this.
/*
In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions, the this keyword always represents the object that defined the arrow function.
*/
class Header {
  constructor() {
    this.color = 'Red';
  }

  //Regular function:
  //With a regular function, this represents the object that called the function:
  changeColor = function () {
    document.getElementById('demo').innerHTML += this;
  };
}

//Arrow function:
//With an arrow function, this represents the Header object no matter who called the function:

changeColor = () => {
  document.getElementById('demo').innerHTML += this;
};

//React ES6 Array Methods

.map() //: The .map() method allows you to run a function on each item in the array, returning a new array as the result.

//In React, map() can be used to generate lists.


// React ES6 Destructuring

/* 
To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed.
*/

//1:::::::::Destructing Arrays
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// With destructuring:
const [car, truck, suv] = vehicles;
const [car,, suv] = vehicles;
//Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);


//2:::::::::::::: Destructuring Objects

//old way of using an object inside a function:

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
// new way
function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
//Notice that the object properties do not have to be declared in a specific order

//We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}

//=======================React ES6 Spread Operator
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

//The spread operator is often used in combination with destructuring.

//Assign the first and second items from numbers to variables and put the rest in an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

//We can use the spread operator with objects too:

// combine this 2 objects
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.


//========================= React ES6 Modules =====================//

/* 
JavaScript modules allow you to break up your code into separate files.
This makes it easier to maintain the code-base.
ES Modules rely on the import and export statements.

*/

//===== Export
//You can export a function or variable from any file.

//You can create named exports two ways. In-line individually, or all at once at the bottom.

//In-line individually:

export const name = "Jesse"
export const age = 40

//All at once at the bottom:
const name = "Jesse"
const age = 40

export { name, age }

// Default Exports
//Let us create another file, named message.js, and use it for demonstrating default export.
//You can only have one default export in a file.
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;


//========= Import

/* 
You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports must be destructured using curly braces. Default exports do not.
 */

//Import named exports 
import { name, age } from "./person.js";
//Import a default export
import message from "./message.js";


//=============== React ES6 Ternary Operator =============

/* The ternary operator is a simplified conditional operator like if / else.

Syntax: condition ? <expression if true> : <expression if false>
 */

// old way
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

// new way
authenticated ? renderApp() : renderLogin();

//=======================================================================
// =================================================================


// JSX which allows you to write HTML tags inside the JavaScript code

/* 

What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.
Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

*/

//===== Expressions in JSX
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

// React Events



//================== React Conditional Rendering ////

// using if 
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

//Logical && Operator
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>

// Ternary Operator

condition ? true : false
 <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>



// ==================== React Lists


//Adding Forms in React
  return (
    <form>
      <label>
        Enter your name:
        <input type='text' />
      </label>
    </form>
  );

  //prevent this default behavior and let React control the form.    

  /* 
    =========Handling Forms  =====
  Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM.

In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the //onChange// attribute.

We can use the //useState// Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
  */
 function App() {
  // data
  let [name, setName] = useState('');
  const handelSubmit = (event) => {
    event.preventDefault();
    alert(event.type + ': is submited / ' + name);
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>
          Enter your name:
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </form>
      <p>your name is : {name}</p>
    </>
  );
}

//============= Multiple Input Fields

/* 

You can control the values of more than one input field by adding a name attribute to each element.

We will initialize our state with an empty object.

To access the fields in the event handler use the event.target.name and event.target.value syntax.

To update the state, use square brackets [bracket notation] around the property name.
*/

function App() {
  // data
  //multi inputs filed
  let [inputs, setInputs] = useState({});

  //handle inputs changes
  let handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //handle  submit
  const handelSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    <>

      <form onSubmit={handelSubmit}>
        <label>
          Enter your name:
          <input
            type='text'
            name='username'
            value={inputs.username || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your age:
          <input
            type='number'
            name='age'
            value={inputs.age || ''}
            onChange={handleChange}
          />
        </label>
        <br />
      </form>
      <p>
        - your name is: {inputs.username} <br /> - age is: {inputs.age}
      </p>
    </>
  );
}



//======== Textarea
// The textarea element in React is slightly different from ordinary HTML.

// In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea>.
        <textarea>Content of the textarea.</textarea>
//In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to manage the value of the textarea:

        <textarea
          name='message'
          value={inputs.message || ''}
          onChange={handleChange}
        >
          Content of the textarea.
        </textarea>


//==================== Select 
   <select name='mycar' value={inputs.mycar} onChange={handleChange}>
          <option value='Ford' selected>
            Ford
          </option>
          <option value='Volvo'>Volvo</option>
          <option value='Fiat'>Fiat</option>
        </select>

        
// ====================== React Router
/* 
Create React App doesn't include page routing.

React Router is the most popular solution.
npm i -D react-router-dom



*/

//  index.js
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


// layout.js
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blog'>Blogs</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );


  // React Memo
/* 


Using memo will cause React to skip rendering a component if its props have not changed.

This can improve performance.

To fix this, we can use memo.

Use memoto keep the Todos component from needlessly re-rendering.

Wrap the Todos component export in memo

*/
export default memo(Todos);

//================ Styling React Using CSS
/* 

There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

Inline styling
CSS stylesheets
CSS Modules

*/

      <h1 style={{color: "red"}}>Hello Style!</h1>

/* 

Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.


camelCased Property Names : use backgroundColor instead of background-color
*/

// JavaScript Object
 const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
 <h1 style={myStyle}>Hello Style!</h1>
// == CSS Stylesheet
import './style.css';
// == CSS Modules
import styles from './blog.module.css';
   <p className={styles.bigblue}></p>

//== Styling React Using Sass
npm i sass
 sass.file.scss
``$myColor: red;

h1 {
  color: $myColor;
}``
import './my-sass.scss';

//#=================React Hooks 
/* 
Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

Although Hooks generally replace class components, there are no plans to remove classes from React.
You must import Hooks from react.

Here we are using the useState Hook to keep track of the application state.

State generally refers to application data or properties that need to be tracked.

*/
import React, { useState } from 'react';
/* 

Hook Rules
There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional
Note: Hooks will not work in React class components.

Custom Hooks
If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

*/