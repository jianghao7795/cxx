import React, {
  useState,
  createContext,
  useContext
} from 'react';

const CountContext = createContext();

function Counter() {
  const count = useContext(CountContext);

  return (
    <h2>{count}</h2>
  );
}

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} tiems</p>
      <button onClick={() => setCount(count + 1)}>Clicked me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}


import React, {
  useReducer
} from 'react';

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <h2>code {count}</h2>
      <button onClick={() => {dispatch('add')}}>Increment</button>
      <button onClick={() => {dispatch('sub')}}>Decrement</button>
    </div>
  );
}
