import * as React from "react"
import "./Selector.css"

/**
 * 
 * @param {*} props 
 * @returns Renders selector to iterate between different categories to toggle product grid
 */
export default function Selector(props) {
    let buttonClassName = props.isActive ? "my-label active": "my-label";

    return (
        <div className="category-menu">
            <button className={buttonClassName} onClick={props.onClick}>
                <p className={buttonClassName}>{(capitalizeFirst(props.label)).toUpperCase()} </p>
            </button>
        </div>
    )
  }

  function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
//   https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript