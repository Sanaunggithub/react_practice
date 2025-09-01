function Student(props){
    return(
        <div className= "student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.student ? "yes": "no"}</p>
        </div>
    )
}

/* 
function Student({name = "Guest",age = 0,isStudent = false}){
    return(
        <div className= "student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "yes": "no"}</p>
        </div>
    )
}
*/

export default Student