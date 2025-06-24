let ErrorMessage = ({ items }) => {

    // let foodItems = ['An item', "A second item", "A third item", "A fourth ite", "And a fifth one"];

    // if(foodItem===0){
    //   return <h3>i am still hungry!!</h3>
    // }
    return (
        <>
            {/* {foodItems.length===0 ?<h3>i am still hungry!!</h3>:null } */}


            {items.length === 0 && <h3>i am still hungry!!</h3>}
        </>

    );
}
export default ErrorMessage;