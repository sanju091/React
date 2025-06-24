import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/foodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


const App= () => {
        //let foodItems=[];
  let foodItems = ['An item', "A second item", "A third item", "A fourth ite", "And a fifth one"];
  
  return (
    <>
      <h1>Food-Items</h1>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
    </>
  );
};

export default App;

