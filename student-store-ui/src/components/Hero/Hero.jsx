import React from "react";
import "./Hero.css"
import Store from "./shops.svg"

/**
 * 
 * @returns intro message that renders header and welcome image 
 */
export default function Hero() {
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
            <div className="hero-bottom-wrapper">
                <p className="description"> 
                    We have all kinds of goodies. Click on any of the items below to get started <br />
                    and fill up your shopping cart. Checkout on the sidebar whenever you are ready!
                </p>
            </div>
            
        </div>
  
    )
}