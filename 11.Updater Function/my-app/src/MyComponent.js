//updater function = A function passed as an argument to setState() usually
//                   ex.setYear(y => y + 1)
//                   Allow for safe updates based on previous state
//                   Used with multiple state updates and asynchronous functions
//                   Good practice to use updater functions

import React, {useState} from "react";

function MyComponent(){
    const [count, setCount] = useState(0);

    const increment = () => {
        //  Takes the PENDING to calculate next state.
        //  React puts your updater function in a queue.
        //  During the next render, it will call them in a same order.

        setCount(c=> c + 1)
        setCount(c=> c + 1)
        setCount(c=> c + 1)
    }
    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    const reset = () => setCount(0)

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
            
        </>
    )
}

export default MyComponent