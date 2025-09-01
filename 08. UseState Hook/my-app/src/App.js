// React Hook = special function that allows functional components
//              to use React features without writing class components
//            (useState, useEffect, useContext, useReducer, useCallback, more...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the virtual DOM.
//              [name, setName]


import Counter from "./Counter";
function App() {
  return (
    <Counter/>
  );
}

export default App;
