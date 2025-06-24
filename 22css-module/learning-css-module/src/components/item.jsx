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
const Item = ({ foodItems }) => {

    return (
        <li className={`${style["kg_item"]}`}>
            <span className={style["kg_span"]}>
            {foodItems}</span>
            </li>
    );
}

export default Item;