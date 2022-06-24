import * as React from "react"
// import AvatarIcon from "../AvatarIcon/AvatarIcon"
import "./Selector.css"

export default function Selector(props) {
    let buttonClassName = props.isActive ? "my-label active": "my-label";
    console.log(buttonClassName);
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