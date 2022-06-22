import * as React from "react"
import "./ProductDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductView from "../ProductView/ProductView"
import ProductCard from "../ProductCard/ProductCard"
import axios from "axios"

export default function ProductDetail(props) {
    const [product, setProduct] = useState("");
    // const [isFetching, setIsFetching] = useState(true);
    let { productId } = useParams();
    
    console.log(product)

    useEffect(() => {
        async function getInfo() {
            props.setIsFetching(true)
            
                
                const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
                
                console.log(response.data.product);
        
    
                setProduct(response.data.product)
           
                // props.setIsFetching(false)            
        }

        getInfo()
      },[])

    if(props.isFetching) {
        console.log(product)
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }
    else {
        console.log(product)
        return (
            <div className="product-detail">
                <p>test!!!!!!!</p>
            </div>
        )
    }
    
  }