import React from "react";
import "./Hero.css"
import Store from "./shops.png"

export default function Hero(props) {
    return (
        <div className="hero">
            <div className="hero-top-wrapper">
                <p className="intro">
                    Welcome! <br />
                    Find your merch!
                </p>
                <div className="hero-img-wrapper">
                <img 
                    src={Store}
                    className="hero-img" alt="hero"></img>
                </div>
            </div>
            <div classname="hero-bottom-wrapper">
                <p className="description"> 
                    We have all kinds of goodies. Click on any of the items below to get started <br />
                    and fill up your shopping cart. Checkout on the sidebar whenever you are ready!
                </p>
            </div>
            
        </div>
  
    )
}