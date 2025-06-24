import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  let foodItems = ['An item', "A second item", "A third item", "A fourth ite", "And a fifth one"];
  return (
    <>
      <h1>Food-Items</h1>
      <ul className="list-group">

        {foodItems.map((item) => (<li key={item} className="list-group-item">{item}</li>))}

      </ul>
    </>
  )
}

export default App;
