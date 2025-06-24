import Cointainer from "./components/Container";
import ErrorMessage from "./components/errorMessage";
import FoodInput from "./components/Foodinput";
import FoodItems from "./components/foodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


const App= () => {
        //let foodItems=[];
  let foodItems = ['An item', "A second item", "A third item", "A fourth ite", "And a fifth one"];
  
  const handleOnChange = (event) =>{
    console.log(event.target.value);
  }
  
  return (
    <><Cointainer>
       <h1>Food-Items</h1>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodInput handleOnChange={handleOnChange}></FoodInput>
    <FoodItems items={foodItems}></FoodItems>
    </Cointainer>
     
    </>
  );
};

export default App;

