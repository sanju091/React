import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  //let foodItems = [];
  let foodItems = ['An item', "A second item", "A third item", "A fourth ite", "And a fifth one"];
  // if(foodItem===0){
  //   return <h3>i am still hungry!!</h3>
  // }
  return (
    <>
      <h1>Food-Items</h1>
      {/* {foodItems.length===0 ?<h3>i am still hungry!!</h3>:null } */}
      {foodItems.length === 0 && <h3>i am still hungry!!</h3>}

      <ul className="list-group">

        {foodItems.map((item) => (<li key={item} className="list-group-item">{item}</li>))}

      </ul>
    </>
  )
}

export default App;
