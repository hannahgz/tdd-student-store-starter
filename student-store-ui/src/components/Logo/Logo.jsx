import "./Logo.css"
import LogoPic from "./logo-pic.svg"
import { Link } from "react-router-dom"

/**
 * 
 * @returns renders site home logo that redirects to homepage
 */
export default function Logo() {
  return (
      <div className="logo">
        <Link to="/" className="logo-link">
            <img className = "logo-pic" src={LogoPic} alt="Logo for Student Store" />
        </Link>
      </div>
  )
}

