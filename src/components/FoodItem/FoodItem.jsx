import React, { Component } from 'react';
import './FoodItem.css';


export default class Menu extends Component {
  render() {
    const { img, price, title, desc } = this.props.item || {};

    if (!this.props.item) {
      return null;
    }

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title || "Food item"} />
        </div>

        <div className="title-price">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>

        <div className="food-desc">
          {desc}
        </div>
      </div>
    );
  }
}