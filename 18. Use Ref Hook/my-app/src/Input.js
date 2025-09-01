import React,{useRef, useEffect} from "react";

function Input(){
    const inputRef = useRef(null)

    function handleClick(){
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
    }
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <input ref={inputRef}/>
        </div>
    )
}

export default Input