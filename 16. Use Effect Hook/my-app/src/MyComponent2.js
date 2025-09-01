import React,{useState, useEffect} from "react"
function MyComponent2(){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    // Without UseEffect. This will add again and again.
    // window.addEventListener("resize", handleSize)
    // console.log("Event listener added")

    useEffect(() =>{
        window.addEventListener("resize", handleSize)
        console.log("Event listener added")
        // clean up
        return () =>{
            window.addEventListener("resize", handleSize)
            console.log("Event listener removed")
        }
    },[])

    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`
    },[width, height])
    
    function handleSize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return(<>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
    </>)
}
export default MyComponent2