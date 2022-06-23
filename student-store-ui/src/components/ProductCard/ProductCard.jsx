import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard(props) {
    console.log(props.showDescrpition)
    return (

      <div className="product-card">
        <div className="element-image"> 
        <Link to= {`/products/${props.productId}`} className="test" onClick={()=>props.setIsFetching(true)}>
            <img src={props.image}></img>
        </Link>
        
        </div>

        <div className="item-wrapper">
            <p className="product-name">{props.name}</p>

            {
                (props.quantity != 0) ?
                <>
                <p className="quantity">{props.quantity}</p>
                </>
                    : null
            }    
        </div>    
        
        <div className="item-description">
            {
                (props.showDescrpition) ? 
                <>
                <p>{props.description}</p>
                </> : null
            }
        </div>
        <p className="product-price">${props.price.toFixed(2)}</p>

        <div className="buttons">
            <button className="add" 
                    onClick = {() => {
                        props.handleAddItemToCart(props.productId)}}>+</button>
            <button className="remove"
                    onClick = {() => {
                        props.handleRemoveItemFromCart(props.productId)}}>-</button>
        </div>
        
      </div>
    )
  }
