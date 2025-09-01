import React,{useState} from "react";

function MyComponent(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleFood(){
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ""
        setFoods(f=> [...f, newFood])
    }

    function handleRemove(index){
        setFoods(foods.filter((_ , i) => i !== index))
    }
    return(<>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index)=> <li key={index} onClick={() => handleRemove(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food name"/>
            <button onClick={handleFood}>Add Food</button>
           </>)
}

export default MyComponent