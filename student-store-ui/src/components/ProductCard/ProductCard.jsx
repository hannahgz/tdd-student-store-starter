import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard(props) {
    return (
      <div className="product-card">
        <div className="element-image"> 
        <Link to= {`/products/${props.productId}`} className="test">
            <img src={props.image}></img>
        </Link>
            
        </div>
        {
            (props.quantity != 0) ?
            <>
            <p className="quantity">{props.quantity}</p>
            </>
                : null
        }
            
        
        
        <p className="product-name">{props.name}</p>
        
        <p className="product-price">${addZeroes(props.price)}</p>
        <button className="add" 
                onClick = {() => {
                    props.handleAddItemToCart(props.productId)}}>+</button>
        <button className="remove"
                onClick = {() => {
                    props.handleRemoveItemFromCart(props.productId)}}>-</button>
      </div>
    )
  }

  /**
   * 
   * @param {*} price 
   * @returns 
   */
  function addZeroes(price) {
    if (price.toString().includes('.') && price.toString().indexOf('.') == price.toString().length -2) {
        return (price.toString() + "0");
    } else if (!price.toString().includes('.')) {
        return (price.toString() + ".00");
    } else {
        return (price);
    } 
  }

// 12.0
// 12.