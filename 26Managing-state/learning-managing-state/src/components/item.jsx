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



import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;