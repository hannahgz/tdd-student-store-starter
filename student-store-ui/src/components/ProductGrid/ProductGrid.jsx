import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
    
    return (
      <div className="product-grid">
        {
          props.products.map((currProduct) =>{ 
        
            let quantity = 0;
            
            if (typeof props.shoppingCart != 'undefined') {
                let currItem = props.shoppingCart.find(cart => cart["itemId"] === currProduct.id);
                    if (typeof currItem != 'undefined') {
                        quantity = currItem["quantity"];
                    }
            }
            
            

            return <ProductCard category={currProduct.category}
                    description={currProduct.description}
                    image={currProduct.image}
                    name={currProduct.name}
                    price={currProduct.price}
                    productId={currProduct.id}
                    products={props.products}
                    quantity={quantity}
                    handleAddItemToCart={props.handleAddItemToCart}
                    handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
          })
        }
      </div>
    )
  }