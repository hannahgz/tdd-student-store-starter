import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

const navbarTitles = ["Home", "About Us", "Contact Us", "Buy Now"]
export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
      <Logo />
        <div className="navbar-links">
        {
          navbarTitles.map((title) => {
            return <p className="item">{title}</p>
          })
        }
        </div>
        <SearchBar />
      </div>
    </nav>
  )
}


export function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search Twitter" />
      <i className="fas fa-search"></i>
    </div>
  )
}

