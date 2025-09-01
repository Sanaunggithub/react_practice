function List(props){

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetically
    // fruits.sort((a, b) => b.name.localeCompare(a.name))  // Reverse Alphabetically
    // fruits.sort((a, b) => a.calories - b.calories) // Numerically    
    // fruits.sort((a, b) => b.calories - a.calories) // Reverse Numerically
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const itemList = props.items;
    const category = props.category;
    // add key in li because React wants you to.
    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}&nbsp;
                                                <b>{item.calories}</b></li>)
    return(
        <>  
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}

export default List