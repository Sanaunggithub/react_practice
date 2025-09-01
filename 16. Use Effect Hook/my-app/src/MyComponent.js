// useEffect() = React hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts (mount = create and append it to the DOM)
//               The state of a value changes

// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount (once)
// 3. useEffect(() => {}, [value]) // Runs only on mount + when value changes  

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts

import React,{useEffect, useState} from "react";

function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }
    // re-render
    // useEffect(() =>{
    //     document.title = `Count: ${count}`
    // })

    // mount + value
    useEffect(() =>{
        document.title = `Count: ${count} ${color}`
    }, [count, color])

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change color</button>
    </>)
}

export default MyComponent
