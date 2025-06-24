// const Item=(props)=>{
//     //let {foodItems}=props;
//     return (
//     //<li className="list-group-item">{foodItems}</li>
//     <li className="list-group-item">{props.foodItems}</li>
// );
// }

// export default Item;





// const Item=(props)=>{
//     let {foodItems}=props;
//     return (
//     <li className="list-group-item">{foodItems}</li>
    
// );
// }

// export default Item;




import style from "./item.module.css";
const Item = ({ foodItems,handleBuyButton}) => {
    return (
        <li className={`${style["kg_item"]}`}>
            <span className={style["kg_span"]}>
            {foodItems}</span>
            <button className={`${style.button} btn btn-info`} 
            onClick={handleBuyButton}
            >Buy</button>
            </li>
    );
}

export default Item;