// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes.

import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    const handleName = e =>{
        setName(e.target.value)
    }

    const handleQuantity = e =>{
        setQuantity(e.target.value)
    }

    const handleComment = e =>{
        setComment(e.target.value)
    }

    const handlePayment = e => {
        setPayment(e.target.value)
    }

    const handleShipping = e =>{
        setShipping(e.target.value)
    }
    return (
        <div>
            <input value={name} onChange={handleName}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantity} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter comment."></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping}/>Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping}/>Delivery
            </label>
        </div>
    )
}

export default MyComponent;