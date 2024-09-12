***this project made for recovering reactjs and nextjs , its not for production!***

### Hooks

Hooks are functions that let you use state and other React features without writing a class component.

## - useState

 > useState Hook to keep track of the application state. State generally refers to application data or properties that need to be tracked.
const [color, setColor] = useState("");

### useEffect

allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. accepts two arguments. The second argument is optional.

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

### useContext Hook

React's Context API and useContext hook work together to manage and share state across deeply nested components without needing to pass props manually at each level.
const UserContext = createContext();
<UserContext.Provider value={user}>

### useRef Hook

Create a mutable object that persists across renders (commonly used for DOM manipulation).
  const count = useRef(0);

### useReducer

useReducer is a React Hook used for managing complex state logic in functional components. It's an alternative to useState and is ideal when you have multiple state transitions, or the next state depends on the previous state, such as with counter logic, form handling, or to-do list management.

  let [state, dispatch] = useReducer(reduce, initialState);

### useCallback Hook

The useCallback() hook in React is used to memoize a function, which prevents it from being recreated on every render. This is especially useful when passing callback functions to child components, as it helps avoid unnecessary re-renders and improves performance.
 const addTodo = useCallback(() => {
    setTodos((e) => [...e, 'new todo.']);
  }, [todos]);

### useMemo Hook

The React useMemo Hook returns a memoized value.
Think of memoization as caching a value so that it does not need to be recalculated.
The useMemo Hook only runs when one of its dependencies update.
This can improve performance.
The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

### React Custom Hooks

When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

Custom Hooks start with "use". Example: useFetch.
