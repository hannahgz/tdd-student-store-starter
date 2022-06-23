import "./SearchBar.css"
import SearchBarImg from "./searchbar.svg"
export default function SearchBar(props) {
    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <input placeholder="Search Store" 
                       className="input"
                       value={props.searchBar}
                       onChange={(e)=>props.handleOnSearchBarChange(e.target.value)} />
                <div className="img-wrapper">
                <img src={SearchBarImg} className="search-img"></img>
                </div>
                
            </div>
        </div>
    )
  }
  
  