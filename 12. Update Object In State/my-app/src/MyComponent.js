import React, {useState} from "react"
function MyComponent(){
    const [car, setCar] = useState({ year: "2025",
                                     make: "Ford",
                                     model: "Mustang"
                                    })
    
    //...c = { year: "2026", make: "Ford",model: "Mustang" }                    
    const handleYear = e => setCar(c => ({...c, year: e.target.value}))
    const handleMake = e => setCar(c => ({...c, make: e.target.value}))
    const handleModel = e => setCar(c => ({...c, model: e.target.value}))

    return(
        <>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYear}/><br/>
            <input type="text" value={car.make} onChange={handleMake}/><br/>
            <input type="text" value={car.model} onChange={handleModel}/><br/>
        </>
    )
}

export default MyComponent