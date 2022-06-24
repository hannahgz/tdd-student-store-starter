import * as React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"


/**
 * 
 * @param {*} props 
 * @returns Makes requests to API and renders loading page
 * Calls product view for product description
 */
export default function ProductDetail(props) {
    const [product, setProduct] = useState("");

    // Extract productId parameter from the url
    let { productId } = useParams();
    let quantity = 0
    useEffect(() => {
        // Makes axios get request to get individual product info
        async function getInfo() {
            props.setIsFetching(true)
            await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`).then((response) => {
                setProduct(response.data.product)
                props.setIsFetching(false) 
            }).catch((error) => {
                <NotFound />
            });
        }
        getInfo()
      },[])

    if(props.isFetching) {
        // Renders loading page if still fetching
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }
    else {
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