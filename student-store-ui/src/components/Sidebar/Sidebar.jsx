import * as React from "react"

import "./Sidebar.css"

import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx"
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx"

import Arrow from "./arrow.svg"


/**
 * 
 * @param {*} props 
 * @returns conditionally renders the shopping cart and checkout form if the sidebar is opened
 */
export default function Sidebar(props) {
  return (
    <section className="sidebar">
      {
        // toggles if the sidebar is open or not
        props.isOpen ? 
        (<div className="sidebar-opened">
          <button className="toggle-button close" 
                onClick={props.handleOnToggle}>
            <img src={Arrow} className="arrow-button close"></img>
          </button>

          {/* Displays shopping cart */}
          <ShoppingCart isOpen={props.isOpen}
                        products={props.products}
                        shoppingCart={props.shoppingCart}/>

          {/* Displays checkout form */}
          <CheckoutForm isOpen={props.isOpen}
                        shoppingCart={props.shoppingCart}
                        checkoutForm={props.checkoutForm}
                        receipt={props.receipt}
                        error={props.error}
                        handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
                        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
                        />
        </div>) 
        : 
        <div className="sidebar-closed">
          <div className="button-wrapper">
            <button className="toggle-button open" 
                    onClick={props.handleOnToggle}>
            <img src={Arrow} className="arrow-button open"></img>
            </button>
          </div>
        
        </div>
        
      }
    </section>
  )
}
