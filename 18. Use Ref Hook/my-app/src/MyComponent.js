// useState() = Re-renders the component when the state value changes

// useRef() = "use Reference" does not cause re-renders when its value changes.
//             When you want a component to "remember" some information,
//             but you don't want that information to trigger new renders.

// 1. Accesing/ Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

// useref returns current object.

import React, {useState, useEffect, useRef} from "react";

function MyComponent(){
    // let[number, setNumber] = useState(0)

    const ref = useRef(0);
    useEffect(() =>{
        console.log("COMPONENT RENDERED")
    })

    function handleNumber(){
        ref.current++;
        console.log(ref.current)
    }
    return(<>
        <button onClick={handleNumber}>Click me!</button>
    </>)
}
export default MyComponent