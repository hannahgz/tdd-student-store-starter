import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx"
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx"
import Arrow from "./arrow.svg"

export default function Sidebar(props) {


  return (
    
    <section className="sidebar">
      {
        props.isOpen ? 
        (<div className="sidebar-opened">
          <button className="toggle-button close" 
                isActive={props.isOpen}
                onClick={props.handleOnToggle}>
            <img src={Arrow} className="arrow-button close"></img>
          </button>
          <ShoppingCart isOpen={props.isOpen}
                        products={props.products}
                        shoppingCart={props.shoppingCart}/>
          <CheckoutForm isOpen={props.isOpen}
                        shoppingCart={props.shoppingCart}
                        checkoutForm={props.checkoutForm}
                        // handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                        // handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                        />
        </div>) 
        
        : 
        <div className="sidebar-closed">
          <div className="button-wrapper">
            <button className="toggle-button open" 
                  isActive={props.isOpen}
                  onClick={props.handleOnToggle}>
            <img src={Arrow} className="arrow-button open"></img>
            </button>
          </div>
        
        </div>
        
      }
      

    </section>

  )
}
