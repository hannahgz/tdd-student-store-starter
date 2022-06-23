import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
    let foundSearch = false;
    return (
    
    <div className="product-grid-wrapper">
        <div className="product-grid">
                {
                props.products.map((currProduct) =>{ 
                
                    let quantity = 0;
                    
                    if (typeof props.shoppingCart != 'undefined') {
                        console.log(currProduct.name)
                        console.log("search bar")
                        console.log(props.searchBar)
                        let currItem = props.shoppingCart.find(cart => cart["itemId"] === currProduct.id);
                            if (typeof currItem != 'undefined') {
                                quantity = currItem["quantity"];
                            }
                    }

                    if (currProduct.name.toLowerCase().includes(props.searchBar.toLowerCase())) {
                        foundSearch = true;
                        return <ProductCard category={currProduct.category}
                            description={currProduct.description}
                            showDescription={false}
                            image={currProduct.image}
                            name={currProduct.name}
                            price={currProduct.price}
                            productId={currProduct.id}
                            products={props.products}
                            quantity={quantity}
                            handleAddItemToCart={props.handleAddItemToCart}
                            handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                            setIsFetching={props.setIsFetching}/>
                    }
                    
                })
                }
                {
                    !foundSearch ? 
                    <div className="none-found">
                        <h1>No products available.</h1>
                    </div>
                    
                    : null
                }
                
            </div>
    </div>
      
    )
  }