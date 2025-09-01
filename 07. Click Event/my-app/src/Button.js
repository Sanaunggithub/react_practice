function Button(){
    // const handleClick = () => console.log("OUCH!")
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    // <button onClick={handleClick}>Click me 😀</button>

    // wrapping callback with a parameter with an arrow expression prevents calling function right away.
    // <button onClick={() => handleClick2("San")}>Click me 😀</button>

    const handleClick = e => e.target.textContent = `OUCH! 🤕`;
    // <button onClick={(e) => handleClick(e)}>Click me 😀</button>
    
    return <button onDoubleClick={(e) => handleClick(e)}>Click me 😀</button>
}
export default Button