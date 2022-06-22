import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({isOpen, products, shoppingCart}) {
    let subtotal = 0;
    let taxes = 0;
    let totalPrice = 0;
    return (
    
      <section className="shopping-cart">
        <p className="title">Shopping Cart</p>
        {
            (shoppingCart.length == 0) ? 
                (<p className="notification">No items added to cart yet. Start shopping now! </p>) : 
                (<div className="shopping-cart-table">
                    <div className="header-row">
                        <span className="flex-2">Name</span>
                        <span className="center">Quantity</span>
                        <span className="center">Unit Price</span>
                        <span className="center">Cost</span>
                    </div>

                    {
                        shoppingCart.map((item) => {
                            let currCost = item.quantity * products[item.itemId-1].price;
                            subtotal += currCost;
                            taxes = Math.ceil(subtotal * 0.0875 * 100)/100
                            return <div className="product-row">
                                <span className="cart-product-name">{products[item.itemId-1].name}</span>
                                <span className="cart-product-quantity">{item.quantity}</span>
                                <span className="cart-product-unitprice">${products[item.itemId-1].price.toFixed(2)}</span>
                                <span className="cart-product-cost">${currCost.toFixed(2)}</span>
                            </div>
                            
                        })
                    }
        
                    
                    
                    <div class = "cum-results">
                        <div class="receipt">
                            <span className="subtotal">Subtotal</span>
                            <span></span>
                            <span></span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div class="taxes">
                            <span className="subtotal">Taxes and Fees</span>
                            <span></span>
                            <span></span>
                            <span>${taxes.toFixed(2)}</span>
                        </div>

                        <div class="total-price">
                            <span className="subtotal">Total Price</span>
                            <span></span>
                            <span></span>
                            <span>${Math.ceil((subtotal + taxes)*100)/100}</span>
                        </div>
                    </div>
                    
                </div>)
        }
      </section>
  
    )
}