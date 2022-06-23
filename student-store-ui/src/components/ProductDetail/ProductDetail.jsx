import * as React from "react"
import "./ProductDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductView from "../ProductView/ProductView"
import ProductCard from "../ProductCard/ProductCard"
import axios from "axios"


export default function ProductDetail(props) {
    const [product, setProduct] = useState("");
    let { productId } = useParams();
    let quantity = 0
    useEffect(() => {

        async function getInfo() {
            props.setIsFetching(true)
            const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
            setProduct(response.data.product)
            props.setIsFetching(false) 
        }

        getInfo()
      },[])

    if(props.isFetching) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }
    else {
        // console.log(productId)
        // console.log(props.shoppingCart)
        // console.log(props.shoppingCart.find(item => {
        //     return item.itemId == productId}).quantity);

        const currItem = props.shoppingCart.find(item => {
            return item.itemId == productId});
        
        if (typeof currItem != 'undefined') {
            quantity = currItem.quantity;
        }
        
        return (
            
            <div className="product-detail">
                <ProductView product={product}
                             productId={productId}
                             quantity={quantity} 
                             handleAddItemToCart={props.handleAddItemToCart}
                             handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                             setIsFetching={props.setIsFetching}
                            />
            </div>
        )
    }
    
  }