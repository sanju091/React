import Item from "./item";

const FoodItems=({ items })=>{

    //let foodItems = ['An item', "A second item", "A third item", "A fourth ite", "And a fifth one"];
 
 return (<ul className="list-group">

    {items.map((item)  => (
        <Item key={item} foodItems={item}></Item>
    ))}      
                                                                                        
  </ul>);
};
export default FoodItems;