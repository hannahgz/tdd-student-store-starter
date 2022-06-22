import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
    return (
      <section className="checkout-form">
        <p>Payment Info</p>
        <div className="input-field">
            <p className="label">Email</p>
            <div class="control">
                <input class="checkout-form-input" 
                       type="email"
                       name="email"
                       placeholder="student@codepath.org"
                       onChange={props.handleOnCheckoutFormChange}
                       value="">
                       </input>
            </div>
        </div>

        <div className="input-field">
            <p className="label">Name</p>
            <div class="control">
                <input class="checkout-form-input" 
                       type="name"
                       name="name"
                       placeholder="Student Name"
                       onChange={props.handleOnCheckoutFormChange}
                       value="">
                       </input>
            </div>
        </div>

        <button className="checkout-button" onClick={props.handleOnSubmitCheckoutForm}>
            Checkout
        </button>
      </section>
  
    )
}