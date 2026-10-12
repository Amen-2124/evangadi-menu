import React, { Component } from 'react' 
import './App.css';
import './assets/commonResource/style.css';
import FoodItem from "./components/FoodItem/FoodItem.jsx";
import data from "./assets/commonResource/data.js";
import FoodTitle from "./components/FoodTitle/FoodTitle.jsx"


// function App() {


//   return (
//     <>
//      <header className="title">
//         <h1>Evangadi Menu</h1>
//         <div></div>
//       </header>
    
     
//       <div className="foods-container">
//         {data.map(({ id, img, price, title, desc }) => {
//           return (
//             <FoodItem
//               key={id}
//               img={img}
//               title={title}
//               desc={desc}
//               price={price}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// }


export default class App extends Component {
  render() {
    return (
      <div>
        <FoodTitle />
        <div className="foods-container">
          {data.map((foodItem) => {
            return (
              <FoodItem
                key={foodItem.id}
                item={foodItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

