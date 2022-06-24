import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

const navbarTitles = ["Home", "About Us", "Contact Us", "Buy Now"]
let link = ""
export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
      <Logo />
        <div className="navbar-links">
        {
          navbarTitles.map((title) => {
            if (title == "About Us") {
              return <p className="item">
              <a className="anchor" href={"#about-us"}>{title}</a>
              </p>
            } else if(title == "Contact Us") {
              return <p className="item">
              <a className="anchor" href={"#contact-us"}>{title}</a>
              </p>
            } else {
              return <p className="item">
              {title}</p>
            }
            
          })
        }
        </div>
      </div>
    </nav>
  )
}


